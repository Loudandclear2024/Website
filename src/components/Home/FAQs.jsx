import React from "react"
import { IoChevronDown, IoChevronUp } from "react-icons/io5"

export const FAQs = () => {
  const faqs = [
    {
      id: 0,
      question:
        "What is the difference between a full stack developer and a software engineer?",
      answer:
        "A full stack developer is someone who can work on both the front-end and back-end of a website or application. A software engineer is someone who can work on the back-end of a website or application.",
    },
    {
      id: 1,
      question:
        "What is the difference between a front-end developer and a back-end developer?",
      answer:
        "A front-end developer is someone who works on the client-side of a website or application. A back-end developer is someone who works on the server-side of a website or application.",
    },
    {
      id: 2,
      question:
        "What is the difference between a front-end developer and a full stack developer?",
      answer:
        "A front-end developer is someone who works on the client-side of a website or application. A full stack developer is someone who can work on both the front-end and back-end of a website or application.",
    },
    {
      id: 3,
      question:
        "What is the difference between a back-end developer and a full stack developer?",
      answer:
        "A back-end developer is someone who works on the server-side of a website or application. A full stack developer is someone who can work on both the front-end and back-end of a website or application.",
    },
  ]

  const [activeIndex, setActiveIndex] = React.useState(null)

  const handleToggle = (id) => {
    if (activeIndex === id) {
      return setActiveIndex(null)
    }
    setActiveIndex(id)
  }

  return (
    <>
      <h1 className="text-secondary font-semibold text-center text-2xl sm:text-3xl md:text-4xl">
        Frequently Asked Questions
      </h1>

      <div className="mt-8 space-y-7 md:mt-14 md:px-8 lg:space-y-14 xl:w-4/5 xl:mx-auto">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              className="flex items-center gap-4 justify-between
          relative after:absolute after:bottom-0 after:w-full after:bg-light-gray after:h-[0.5px] pb-1
          "
            >
              <h3 className="text-light-gray font-medium md:text-xl xl:text-2xl">
                {faq.question}
              </h3>
              <button>
                <IoChevronDown
                  className={`text-light-gray text-2xl duration-300 md:text-3xl
                  ${
                    index === activeIndex
                      ? "transform rotate-180"
                      : "transform rotate-0"
                  }
                  `}
                  onClick={() => handleToggle(index)}
                />
              </button>
            </div>

            <div
              className={`  duration-300 ease-out
                ${
                  index === activeIndex
                    ? "opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }
            `}
            >
              <p className="text-light-gray lg:text-xl">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
