// Génère l'INSERT SQL pour créer/mettre à jour un compte admin, avec le même
// schéma de hash (PBKDF2) que lib/auth/password.js.
// Usage : node scripts/create-admin.mjs <email> <password> > db/admin-seed.sql
const ITERATIONS = 100000;

function toBase64(bytes) {
  return Buffer.from(bytes).toString("base64");
}

async function pbkdf2(password, salt, iterations) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  return crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations, hash: "SHA-256" }, keyMaterial, 256);
}

async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await pbkdf2(password, salt, ITERATIONS);
  return `pbkdf2$${ITERATIONS}$${toBase64(salt)}$${toBase64(hash)}`;
}

const [, , email, password] = process.argv;
if (!email || !password) {
  console.error("Usage: node scripts/create-admin.mjs <email> <password>");
  process.exit(1);
}

const hash = await hashPassword(password);
const esc = (s) => `'${String(s).replace(/'/g, "''")}'`;

const sql = `INSERT INTO admin_users (email, password_hash) VALUES (${esc(email.toLowerCase().trim())}, ${esc(hash)})
ON CONFLICT(email) DO UPDATE SET password_hash = excluded.password_hash;\n`;

process.stdout.write(sql);
