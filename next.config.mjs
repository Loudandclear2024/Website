/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://starter-kit-rho-five.vercel.app/",
        permanent: false,
      },
      {
        source: "/blog/:slug",
        destination: "https://starter-kit-rho-five.vercel.app/:slug",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
