/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://blogs.loudandclear.in/",
        permanent: false,
      },
      {
        source: "/blog/:slug",
        destination: "https://blogs.loudandclear.in/",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
