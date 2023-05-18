/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/outlets/BBC",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
