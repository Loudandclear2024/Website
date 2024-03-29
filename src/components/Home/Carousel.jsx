"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

// TODO: add high quality images

const images = [
  {
    src: "/images/home/main_1.webp",
    alt: "main",
  },
  {
    src: "/images/home/main_2.webp",
    alt: "main",
  },
  {
    src: "/images/home/main_3.webp",
    alt: "main",
  },
  {
    src: "/images/home/main_4.webp",
    alt: "main",
  },
  {
    src: "/images/home/main_5.webp",
    alt: "main",
  },
]

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // console.log(currentImageIndex)

  const handlePrevClick = () => {
    // console.log("prev clicked")
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    // console.log("next clicked")
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  //    //TODO: Add Animation Later On
  return (
    <>
      <Image
        src={images[currentImageIndex].src}
        alt="main"
        width={1920}
        height={1080}
        className={`object-cover relative w-screen h-56 md:h-[60vh] object-[center_70%] lg:object-[center_75%] z-0
        `}
      />

      {/* Image overlay */}
      <div className="bg-hero-img-overlay w-full h-[90%] absolute top-0 z-10"></div>

      <div className="absolute top-4 pr-4 z-20 ml-8 sm:ml-14 lg:ml-24">
        <h3 className="text-light-gray md:w-3/4 lg:w-3/5 md:text-2xl">
          Our assurance of best practices in Audio and Video solutions.
        </h3>
      </div>

      {/* Buttons to change the image */}
      <div className="space-x-3 absolute right-2 bottom-0 z-50 lg:right-7">
        <button className="bg-[#ffffff5d] p-1 md:px-2 md:py-[6px]">
          <FiArrowLeft
            className="text-white text-3xl md:text-4xl cursor-pointer"
            onClick={handlePrevClick}
          />
        </button>
        <button className="bg-black p-1 md:px-2 md:py-[6px]">
          <FiArrowRight
            className="text-white text-3xl md:text-4xl cursor-pointer"
            onClick={handleNextClick}
          />
        </button>
      </div>
    </>
  )
}
