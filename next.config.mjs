/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ["*.e2b.app"],
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  // redirects() n'est pas supporté en export statique : le redirect /contact
  // est géré par le Worker Cloudflare (worker/index.js).
};

export default nextConfig;
