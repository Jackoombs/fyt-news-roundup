/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/outlets",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
