/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ["*.e2b.app"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/demander-un-devis", permanent: true },
    ];
  },
};

export default nextConfig;
