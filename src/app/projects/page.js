"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Page() {
  // const allImages = [
  //   {
  //     key: 1,
  //     name: "1.jpg",
  //   },
  //   {
  //     key: 2,
  //     name: "2.JPG",
  //   },
  //   {
  //     key: 3,
  //     name: "3.JPG",
  //   },
  //   {
  //     key: 4,
  //     name: "4.jpg",
  //   },
  // ]
  // const allImages = ["4.jpg", "3.JPG", "2.JPG", "1.jpg"]
  const allImages = ["1.jpg", "2.JPG", "3.JPG", "4.jpg"]

  // const images = [
  //   {
  //     name: "1.jpg",
  //     isShown: true,
  //   },
  //   {
  //     name: "2.JPG",
  //     isShown: false,
  //   },
  //   {
  //     name: "3.JPG",
  //     isShown: false,
  //   },
  //   {
  //     name: "4.jpg",
  //     isShown: false,
  //   },
  // ]

  const [activeIndex, setActiveIndex] = useState(0)
  console.log(activeIndex)
  // const [allImages, setAllImages] = useState(images)

  const handleClick = (index) => {
    console.log("Index: ", index)
    setActiveIndex(index)
    //  Change the isShown property to true of that image which is clicked
    // const newImages = allImages.map((image, i) => {
    //   if (i === index) {
    //     return {
    //       ...image,
    //       isShown: true,
    //     }
    //   } else {
    //     return {
    //       ...image,
    //       isShown: false,
    //     }
    //   }
    // })
    // setAllImages(newImages)
  }
  // console.log(allImages)

  //   Get window width
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  //   console.log(windowWidth)

  //   Get cursor click position
  const imageClick = (e) => {
    // console.log(e.clientX)
    // console.log(windowWidth / 2)
    // If click is on the left side of the screen
    // if (e.clientX < windowWidth / 2) {
    //   //   console.log("left")
    //   if (activeIndex === 0) {
    //     setActiveIndex(allImages.length - 1)
    //   } else {
    //     setActiveIndex(activeIndex - 1)
    //   }
    // } else {
    //   //   console.log("right")
    //   if (activeIndex === allImages.length - 1) {
    //     setActiveIndex(0)
    //   } else {
    //     setActiveIndex(activeIndex + 1)
    //   }
    // }
  }

  return (
    <>
      <div
        className="relative w-screen h-screen after:absolute after:w-full after:h-full after:inset-0 after:bg-opaque-black"
        onClick={imageClick}
      >
        <div className="relative">
          {allImages.map((image, index) => (
            <Image
              src={`/images/projects/${image}`}
              width={300}
              height={300}
              alt={"image"}
              className={`w-screen h-screen object-cover transition-all object-center duration-1000 absolute inset-0 ease-out
              ${
                index === activeIndex
                  ? "translate-x-0"
                  : index < activeIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }
               `}
              //   className={`w-screen h-screen object-cover grow-0 shrink-0 basis-full transition-all object-center duration-700
              //     ${
              //       index === 0
              //         ? "translate-x-0"
              //         : "translate-x-full absolute top-0"
              //     }`}
              key={index}
              // style={{ marginLeft: `-${index * 100}%` }}
            />
          ))}
        </div>

        {/* Text */}
        <div
          className="text-6xl text-white absolute top-1/2 left-1/2
        -transform -translate-x-1/2 -translate-y-1/2 z-full font-bold
        "
        >
          Lorem Ipsum
        </div>

        {/* Sliders */}
        <div className="flex gap-3 absolute bottom-6 right-3 z-10">
          {allImages.map((image, index) => {
            return (
              <Image
                key={index}
                src={`/images/projects/${image}`}
                width={300}
                height={300}
                alt={"image"}
                className="w-[100px] h-[60px] cursor-pointer object-cover"
                onClick={() => handleClick(index)}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
