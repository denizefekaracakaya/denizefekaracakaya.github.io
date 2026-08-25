/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export — GitHub Pages serves plain files, no Node server.
  output: "export",
  // Emits /path/index.html so Pages can resolve routes without a rewrite layer.
  trailingSlash: true,
  images: {
    // The Next image optimizer needs a server; Pages has none.
    unoptimized: true,
  },
};

module.exports = nextConfig;
