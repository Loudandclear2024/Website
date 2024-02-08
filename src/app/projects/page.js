"use client"

import Navbar from "../../components/Navbar"
import Image from "next/image"
import { useState, useEffect } from "react"
import { RxCross2 } from "react-icons/rx"

export default function Page() {
  const allImages = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp",
    "8.webp",
    "9.webp",
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  // console.log(activeIndex)

  const handleClick = (index) => {
    // console.log("Index: ", index)
    setActiveIndex(index)
  }

  //   Get window width
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])
  //   console.log(windowWidth)

  //   Get cursor click position
  const imageClick = (e) => {
    const cursor = e.clientX

    const isRight = cursor > windowWidth / 2

    if (isRight) {
      setActiveIndex((activeIndex + 1) % allImages.length)
    } else {
      setActiveIndex((activeIndex - 1 + allImages.length) % allImages.length)
    }
  }

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <div className="relative w-screen min-h-screen after:absolute after:w-full after:min-h-screen after:inset-0 after:bg-opaque-black overflow-x-hidden">
        <Navbar className="absolute z-full w-full" />
        <div className="relative">
          {allImages.map((image, index) => (
            <Image
              src={`/images/projects/${image}`}
              width={1920}
              height={1080}
              alt={"image"}
              className={`w-screen min-h-screen lg:h-screen object-cover transition-all duration-1000 absolute inset-0 ease-out object-bottom
              ${
                index === activeIndex
                  ? "translate-x-0"
                  : index < activeIndex
                  ? "translate-x-0"
                  : "translate-x-full"
              }
               `}
              key={index}
            />
          ))}
        </div>

        {/* Text */}
        <div
          className="
        w-screen min-h-screen absolute z-[1] flex flex-col justify-center items-center 
        "
          onClick={imageClick}
        >
          <h1 className="text-5xl sm:text-6xl text-white font-bold">
            Lorem Ipsum
          </h1>

          <button
            onClick={(e) => {
              e.stopPropagation()
              openModal()
            }}
            className="
            bg-secondary text-black sm:text-lg px-4 py-1 rounded-md mt-5 hover:bg-opacity-80 transition-all duration-300 ease-in-out
            "
          >
            View Full Image
          </button>
        </div>
        {/* Modal */}
        {modalIsOpen && (
          <div className="absolute z-full bg-[rgba(0,0,0,0.9)] w-screen min-h-screen">
            <Image
              src={`/images/projects/${allImages[activeIndex]}`}
              width={1920}
              height={1080}
              alt={"image"}
              className="object-contain
          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-[90%] h-[90%]
          "
            />
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-4xl text-white"
            >
              <RxCross2 />
            </button>
          </div>
        )}

        {/* Sliders */}
        <div
          className=" absolute bottom-6 sm:right-3 z-10 w-full px-5 overflow-x-scroll no-scrollbar
        "
        >
          <div className="flex whitespace-nowrap gap-3 w-full lg:justify-center mlg:justify-end">
            {allImages.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/projects/${image}`}
                  width={300}
                  height={300}
                  alt={"image"}
                  className="w-[80px] h-[50px] sm:w-[100px] sm:h-[60px] cursor-pointer object-cover
                grow-0 shrink-0 basis-auto
                "
                  onClick={() => handleClick(index)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
