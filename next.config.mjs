/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML in out/ for GitHub Pages (no server, so no custom headers).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
