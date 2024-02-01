"use client"

import Image from "next/image"
import { Parallax } from "./Parallax"

export const Grid = () => {
  // We will be creating a parallax effect with the images
  // The images will move at different speeds

  return (
    <>
      <Parallax speed={2} className={"relative z-20"}>
        <div
          className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3 md:gap-2
          "
        >
          <Image
            src="/images/news-articles/1.jpg"
            alt="article"
            width={500}
            height={500}
            className=""
          />
        </div>
      </Parallax>

      <Parallax speed={-2}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 md:col-span-2
          lg:grid-cols-3 md:gap-2
          "
        >
          <Image
            src="/images/news-articles/1.jpg"
            alt="article"
            width={500}
            height={500}
            className="md:col-start-2 lg:md:col-start-3"
          />
        </div>
      </Parallax>
      <Parallax speed={-2} className={"relative z-20"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2">
          <Image
            src="/images/news-articles/1.jpg"
            alt="article"
            width={500}
            height={500}
            className="lg:col-start-2"
          />
        </div>
      </Parallax>
      <Parallax speed={-5}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2">
          <Image
            src="/images/news-articles/1.jpg"
            alt="article"
            width={500}
            height={500}
            className="md:col-start-2 lg:col-start-1"
          />
        </div>
      </Parallax>
      <Parallax speed={-5.6} className={"relative z-10"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2">
          <Image
            src="/images/news-articles/1.jpg"
            alt="article"
            width={500}
            height={500}
            className="lg:col-start-2"
          />
        </div>
      </Parallax>
      <Parallax speed={-4}>
        <div
          className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3
          "
        >
          <Image
            src="/images/news-articles/1.jpg"
            alt="article"
            width={500}
            height={500}
            className="md:col-start-2 lg:col-start-3"
          />
        </div>
      </Parallax>
    </>
  )
}
