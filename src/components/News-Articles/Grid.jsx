"use client"

import Image from "next/image"
import { Parallax } from "./Parallax"
import { RxCross2 } from "react-icons/rx"
import { useEffect, useState } from "react"

export const Grid = () => {
  // We will be creating a parallax effect with the images
  // The images will move at different speeds

  return (
    <>
      <div className="relative">
        <Parallax speed={-1} className={"relative z-20"}>
          <div
            className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3 md:gap-2
          "
          >
            <div>
              {/* <a href="/images/news-articles/1.jpg" download={true}> */}
              <Image
                src="/images/news-articles/1.jpg"
                alt="article"
                width={500}
                height={500}
                className="cursor-pointer"
              />
              {/* </a> */}
            </div>
          </div>
        </Parallax>

        <Parallax speed={-2}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 md:col-span-2
          lg:grid-cols-3 md:gap-2
          "
          >
            <a
              href="/images/news-articles/2.png"
              download={true}
              className="md:col-start-2 lg:md:col-start-3 cursor-pointer"
            >
              <Image
                src="/images/news-articles/2.png"
                alt="article"
                width={500}
                height={500}
                className=""
              />
            </a>
          </div>
        </Parallax>
        <Parallax speed={-2} className={"relative z-20"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2">
            <a
              href="/images/news-articles/3.png"
              download={true}
              className="lg:col-start-2 cursor-pointer"
            >
              <Image
                src="/images/news-articles/3.png"
                alt="article"
                width={500}
                height={900}
                // className="lg:col-start-2 cursor-pointer"
              />
            </a>
          </div>
        </Parallax>
        <Parallax speed={-5}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-2">
            <a
              href="/images/news-articles/4.png"
              download={true}
              className="md:col-start-2 lg:col-start-1 cursor-pointer"
            >
              <Image
                src="/images/news-articles/4.png"
                alt="article"
                width={500}
                height={500}
                // className="md:col-start-2 lg:col-start-1 cursor-pointer"
              />
            </a>

            <a
              href="/images/news-articles/5.png"
              download={true}
              className="md:col-start-1 lg:col-start-3 self-center md:row-start-1 mt-14 md:mt-0 cursor-pointer"
            >
              <Image
                src="/images/news-articles/5.png"
                alt="article"
                width={500}
                height={500}
                // className="md:col-start-1 lg:col-start-3 self-center md:row-start-1 mt-14 md:mt-0 cursor-pointer"
              />
            </a>
          </div>
        </Parallax>
        <Parallax speed={-5.6} className={"relative z-10"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2">
            <a
              href="/images/news-articles/6.png"
              download={true}
              className="lg:col-start-2 cursor-pointer"
            >
              <Image
                src="/images/news-articles/6.png"
                alt="article"
                width={900}
                height={600}
                // className="lg:col-start-2 cursor-pointer"
              />
            </a>
          </div>
        </Parallax>
        <Parallax speed={-4}>
          <div
            className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3
          "
          >
            <a
              href="/images/news-articles/7.png"
              download={true}
              className="md:col-start-2 lg:col-start-3 cursor-pointer"
            >
              <Image
                src="/images/news-articles/7.png"
                alt="article"
                width={500}
                height={500}
                // className="md:col-start-2 lg:col-start-3 cursor-pointer"
              />
            </a>
          </div>
        </Parallax>
      </div>
    </>
  )
}
