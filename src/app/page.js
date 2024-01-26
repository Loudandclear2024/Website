"use client"

import Navbar from "@/components/Navbar"
import Carousel from "@/components/Home/Carousel"
import Process from "@/components/Home/Process"
import Experience from "@/components/Home/Experience"
import Services from "@/components/Home/Services"
import Brands from "@/components/Home/Brands"
import Vis_Mis from "@/components/Home/Vis_Mis"
import Testimonail from "@/components/Home/Testimonial"
import { FAQs } from "@/components/Home/FAQs"
import { FaArrowRightLong } from "react-icons/fa6"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="mt-4">
        <h1 className="pl-8 sm:pl-14 text-secondary font-bold text-2xl md:text-4xl lg:text-5xl lg:pl-24">
          Sorem dolor <br /> ipsum sit amet
        </h1>

        <div className="mt-7 relative">
          <Carousel />
        </div>

        <div className="mt-8 md:mt-14 pb-10 lg:pb-20">
          <Process />
        </div>

        <div className="bg-white px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20">
          <Experience />
        </div>

        <div className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20">
          <Services />
        </div>

        <div className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20">
          <Brands />
        </div>

        <div className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20">
          <Vis_Mis />
        </div>

        <div className=" py-16  lg:py-20 ">
          <div className="px-6 sm:px-10 lg:pl-24 lg:pr-20">
            <h4 className="uppercase text-light-gray md:text-xl">
              Testimonials
            </h4>
            <div className="mt-4 space-y-2 md:flex md:space-y-0 md:gap-8 lg:gap-24">
              <h1 className="text-secondary font-medium capitalize text-2xl md:grow md:text-3xl lg:text-4xl lg:grow-0">
                What our customer says
              </h1>

              <p className="text-[#898686] md:grow-0 md:w-3/5 md:text-lg lg:w-1/2">
                We always provide best for our clients in any case, so
                that&apos;s all wishes can be reaslized and decenet. Lorem Ipsum
                dolor isit. Lorem Ipsum dolor isit.
              </p>
            </div>
          </div>

          <div className="mt-7 lg:mt-12">
            <Testimonail />
          </div>
        </div>

        <div className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20">
          <FAQs />
        </div>

        <div className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20 xl:px-64">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h1
              className="text-white font-bold text-3xl sm:text-4xl sm:w-[300px] sm:leading-relaxed
            md:text-5xl md:w-[420px] md:leading-[1.5]
            "
            >
              Ready To Work With Us?
            </h1>

            <div>
              <button
                className="bg-secondary flex items-center text-black px-4 py-2 mt-4 sm:mt-0 rounded-xl font-medium text-base group sm:mr-4
              border border-transparent hover:bg-transparent hover:text-secondary transition duration-300 ease-in-out hover:border-secondary lg:mr-28 lg:text-2xl"
              >
                Get Started
                <FaArrowRightLong className="inline-block ml-2 text-black  group-hover:text-secondary duration-300 group-hover:ml-3" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="my-4 py-10
        relative after:absolute after:w-full after:bottom-0 after:bg-[#898686] after:h-[1px]
        "
        >
          <Footer />
        </div>

        <div
          className=" px-4 text-center pb-10 pt-6
        "
        >
          <h1 className="text-light-gray">
            Copyright &copy; 2024. Loud and Clear. All Rights Reserved.
          </h1>
        </div>
      </div>
    </main>
  )
}
