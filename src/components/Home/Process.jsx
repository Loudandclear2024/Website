import { IoChevronDown, IoChevronUp } from "react-icons/io5"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Process() {
  const [selected, setSelected] = useState(0)

  const process = [
    {
      heading: "Initial Consultation",
      subText:
        "Initial meeting with client and architect, to explain latest technologies and types of systems.",
    },
    {
      heading: "Conceptual Design",
      subText:
        "Guiding them on which systems enhances their lifestyle and discussing design ideas with architects.",
    },
    {
      heading: "Technical Planning",
      subText:
        "Choose audio-visual equipment, seating, lighting, and acoustic elements based on the finalized design.Preparing technical CAD drawings such as (placement, wiring & acoustics) for the suggested AV system.",
    },
    {
      heading: "Contractors and Installation",
      subText:
        "Releasing final execution drawings and supervising the same to onsite. Professional AV system installation.",
    },
    {
      heading: "Testing and Calibration",
      subText:
        "Final programming of the system. Calibrate and test all audio-visual components to ensure optimal performance.",
    },
    {
      heading: "Documentation and Handover",
      subText:
        "Provide the client with comprehensive documentation, including manuals, warranty information, and system guidelines. Officially hand over the completed home theater and demonstrate how to use the system to the client, ensuring their satisfaction.",
    },
  ]

  const open = (index) => {
    if (selected === index) {
      setSelected(null)
    } else {
      setSelected(index)
    }
  }

  const close = () => {
    setSelected(null)
  }

  return (
    <>
      {/* Flex */}
      <div className="md:flex justify-between gap-8 xl:justify-start">
        {/* Left */}
        <div className="xl:w-1/2">
          <h3 className="uppercase text-light-gray ml-8 sm:ml-14 md:text-xl lg:ml-24">
            How we work
          </h3>

          <h1 className="text-secondary font-semibold text-[27px] mt-2 ml-8 sm:ml-14 md:text-3xl md:mt-4 lg:w-1/2 lg:text-3xl lg:ml-24">
            Our Process Simplified
          </h1>

          {/* Steps */}
          <div className="mt-5">
            {process.map((item, index) => (
              <div
                key={index}
                className={`flex gap-x-3  sm:pl-14 pr-4 mt-7 md:mt-10
                ${
                  selected === index
                    ? "bg-process-steps py-5 md:py-7 pl-12 md:pl-20 lg:pl-32 duration-300"
                    : "pl-8 bg-transparent duration-300 lg:pl-24"
                }
                `}
              >
                {/* Number */}
                <h1 className="text-light-gray font-medium text-2xl">{`0${
                  index + 1
                }`}</h1>
                {/* Content */}
                <div className="w-full">
                  <div className="flex items-center justify-between pr-2 w-full sm:justify-start sm:gap-4">
                    {/* Heading */}
                    <h2 className="text-light-gray font-medium text-2xl ">
                      {item.heading}
                    </h2>

                    {/* Icon */}
                    {selected === index ? (
                      <IoChevronUp
                        className="text-dark-gray text-2xl cursor-pointer"
                        onClick={close}
                      />
                    ) : (
                      <IoChevronDown
                        className="text-dark-gray text-2xl cursor-pointer"
                        onClick={() => open(index)}
                      />
                    )}
                  </div>
                  {/* Sub Text */}
                  <p
                    className={`text-dark-gray mt-[2px]
                  ${selected === index ? "block h-auto" : "invisible h-0"}
                  `}
                  >
                    {item.subText}
                  </p>
                </div>
              </div>
            ))}

            {/* Step-1 */}
            {/* <div className="flex gap-x-3 pl-8 sm:pl-14 py-5 pr-4">
              <h1 className="text-light-gray font-medium text-2xl">01</h1>
              <div>
                <h2 className="text-light-gray font-medium text-2xl ">
                  Consulation
                </h2>
                <p className="text-dark-gray mt-[2px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  nisi. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right */}
        <div className="hidden md:block pr-3 lg:pr-8 xl:w-[50%]">
          <div className="lg:ml-8 xl:ml-16">
            <p className="text-light-gray text-lg md:mt-5 lg:w-4/5 xl:w-[70%]">
              At Loud & Clear, our team is not just about technical prowess;
              it&apos;s a symphony of eager minds, dedicated hearts, and
              boundless knowledge.
            </p>

            <Link href="/about">
              <button
                className="text-white border border-secondary rounded-lg mt-4 px-4 py-[6px] text-base
              hover:bg-secondary hover:text-black duration-300 focus:outline-none
              "
              >
                Learn More
              </button>
            </Link>
          </div>

          <div className="flex justify-center pt-16 relative xl:justify-start xl:pl-24">
            <div className="h-full w-4/5 lg:w-3/5 xl:w-1/2  rounded-full bg-process-circular -z-10 absolute top-2 left-1/2 -translate-x-1/2 xl:left-60 xl:top-1"></div>
            <Image
              src="/images/home/process.webp"
              width={500}
              height={500}
              alt="process"
              className="w-[300px] h-[300px] object-cover rounded-lg object-[50%_70%] mlg:h-[400px] mlg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}
