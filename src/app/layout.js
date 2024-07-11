import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
    "audio, video, AV, solutions, home theater, corporate, Loud & Clear, Ahmedabad, Gujarat, India, sound, visual, entertainment, experience, excellence, expert, consultation, integration, space, crystal-clear, stunning, tailored, premier, provider, AV solutions, AV solutions provider, AV solutions provider in Ahmedabad, AV solutions provider in Gujarat, AV solutions provider in, Loud and Clear, loudandclear, loud and clear ahmedabad",
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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="language" content={metadata.language} />
        <meta name="generator" content={metadata.generator} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
      </head>
      <body className={`${roboto.className} bg-primary`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
