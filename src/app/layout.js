import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata = {
  title: "Loud and Clear",
  description:
    "Premier AV solutions provider delivering crystal-clear sound & stunning visuals for tailored entertainment experiences. Expert consultations for seamless integration into any space. From home theaters to corporate environments, experience audio-video excellence with Loud & Clear.",
  keywords:
    "audio, video, AV, solutions, home theater, corporate, Loud & Clear",
  image: "https://www.loudandclear.in/logo.png",
  author: "Loud and Clear",
  robots: "index, follow",
  language: "English",
  generator: "Next.js",
  copyright:
    "© 2021 Loud and Clear. All rights reserved. Designed and developed by Loud and Clear.",
  ogTitle: "Loud and Clear",
  ogType: "website",
  ogUrl: "https://www.loudandclear.in",
  ogDescription:
    "Premier AV solutions provider delivering crystal-clear sound & stunning visuals for tailored entertainment experiences. Expert consultations for seamless integration into any space. From home theaters to corporate environments, experience audio-video excellence with Loud and Clear.",
  ogImage: "https://www.loudandclear.in/logo.png",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-primary`}>{children}</body>
    </html>
  )
}
