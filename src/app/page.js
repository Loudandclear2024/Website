"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { useState } from "react"

// TODO: add high quality images

export default function Home() {
  const images = [
    {
      src: "/images/home/main_1.jpeg",
      alt: "main",
    },
    {
      src: "/images/home/main_2.jpg",
      alt: "main",
    },
    {
      src: "/images/home/main_3.jpg",
      alt: "main",
    },
    {
      src: "/images/home/main_4.jpg",
      alt: "main",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // console.log(currentImageIndex)

  const handlePrevClick = () => {
    console.log("prev clicked")
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    console.log("next clicked")
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <main>
      <Navbar />

      <div className="mt-4">
        <h1 className="pl-14 text-secondary font-bold text-2xl md:text-4xl lg:text-5xl">
          Sorem dolor <br /> ipsum sit amet
        </h1>

        <div className="mt-7 relative">
          {/* //TODO: Add Animation Later On */}
          <Image
            src={images[currentImageIndex].src}
            alt="main"
            width={600}
            height={200}
            className="object-cover w-full h-56 md:h-[60vh] object-[center_70%] lg:object-[center_75%] inline"
          />

          {/* <div className="overflow-auto whitespace-nowrap relative">
            <Image
              src={"/images/home/main_1.jpeg"}
              alt="main"
              width={600}
              height={200}
              className="object-cover w-full h-56 md:h-[60vh] object-[center_70%] lg:object-[center_75%] inline"
            />

            <Image
              src={"/images/home/main_2.jpg"}
              alt="main"
              width={600}
              height={200}
              className="object-cover w-full h-56 md:h-[60vh] object-[center_70%] lg:object-[center_75%] inline"
            />
          </div> */}

          {/* Image overlay */}
          <div className="bg-hero-img-overlay w-full h-[90%] absolute top-0 z-10"></div>

          <div className="absolute top-4 pr-4 z-20 ml-14">
            <h3 className="text-light-gray md:w-3/4 lg:w-3/5 md:text-xl">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </h3>
          </div>

          {/* Buttons to change the image */}
          <div className="space-x-3 absolute right-2 bottom-0 z-50">
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
        </div>
      </div>
    </main>
  )
}
