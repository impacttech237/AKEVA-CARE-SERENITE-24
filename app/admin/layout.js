import "./admin.css";

export const metadata = {
  title: "Admin · Akeva Care",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
