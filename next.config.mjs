/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://starter-n6w3bev6x-preet-sojitra.vercel.app/",
        permanent: false,
      },
      {
        source: "/blog/:slug",
        destination: "https://starter-n6w3bev6x-preet-sojitra.vercel.app/:slug",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
