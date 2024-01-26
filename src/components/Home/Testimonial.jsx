import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { useState } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

export default function Testimonail() {
  const allTestimonials = [
    {
      text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per .",
      name: "Lorem Ipsum",
    },
    {
      text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per .",
      name: "Ipsum Lorem",
    },
    {
      text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per .",
      name: "Dolor Ipsum",
    },
    {
      text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per .",
      name: "Ipsum Ipsum",
    },
    {
      text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per .",
      name: "Ipsum Ipsum",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex === allTestimonials.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(allTestimonials.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const testimonials = allTestimonials.map((testimonial, index) => {
    return (
      <div
        key={index}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        className="transition-transform duration-500
        flex-shrink-0 w-full flex-grow-0 basis-full
        lg:basis-1/2 lg:gap-3
        "
      >
        <div className="bg-testimonial py-4 px-4 rounded-lg w-full md:p-8">
          <div>
            <FaQuoteLeft className="text-3xl text-secondary lg:text-4xl xl:text-5xl" />
          </div>
          <div className="mt-3 text-lg text-light-gray lg:text-xl ">
            <p>{testimonial.text}</p>
          </div>
          <div className="mt-3 text-[#898686]">
            <h4>{testimonial.name}</h4>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="flex items-center gap-3 px-2 sm:px-6 sm:gap-5 md:justify-between md:px-10">
        <div onClick={handlePrev}>
          <FiArrowLeft
            className="text-3xl bg-secondary text-black rounded-full p-1 cursor-pointer
            md:text-4xl
          "
          />
        </div>
        <div className="w-full flex overflow-x-hidden ">{testimonials}</div>
        <div onClick={handleNext}>
          <FiArrowRight className="text-3xl bg-secondary text-black rounded-full p-1 cursor-pointer md:text-4xl" />
        </div>
      </div>
    </>
  )
}
