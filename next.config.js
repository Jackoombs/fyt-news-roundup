/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/outlets/BBC/overview",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
