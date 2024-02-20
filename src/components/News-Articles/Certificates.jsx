import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { useState } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import Image from "next/image"

export default function Certificates() {
  // const allCertificates = ["1.png", "2.png", "3.png", "4.png", "5.png"]
  const allCertificates = ["1.png", "2.png", "3.png", "4.png"]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex === allCertificates.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(allCertificates.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const certificates = allCertificates.map((certificate, index) => {
    return (
      <div
        key={index}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        className={`transition-transform duration-500
        flex-shrink-0 w-full flex-grow-0 basis-full
        lg:basis-1/2 lg:gap-3 self-center
        "`}
      >
        <div className="rounded-lg w-full md:p-4 lg:p-[10px]">
          <Image
            src={`/images/news-articles/certificates/${certificate}`}
            alt="article"
            width={500}
            height={500}
            className="xl:mx-auto"
          />
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="flex items-center gap-2 sm:px-6 sm:gap-5 md:justify-between md:px-10">
        <div onClick={handlePrev}>
          <FiArrowLeft
            className="text-3xl bg-secondary text-black rounded-full p-1 cursor-pointer
            md:text-4xl
          "
          />
        </div>
        <div className="w-full flex overflow-x-hidden ">{certificates}</div>
        <div onClick={handleNext}>
          <FiArrowRight className="text-3xl bg-secondary text-black rounded-full p-1 cursor-pointer md:text-4xl" />
        </div>
      </div>
    </>
  )
}
