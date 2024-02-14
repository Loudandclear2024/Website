/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://starter-kit-sable-eta.vercel.app/blog",
      },
      {
        source: "/blog/:slug",
        destination: "https://starter-kit-sable-eta.vercel.app/blog/:slug",
      },
    ]
  },
}

export default nextConfig
