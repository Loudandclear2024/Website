"use client"

import Navbar from "../components/Navbar"
import Carousel from "../components/Home/Carousel"
import Process from "../components/Home/Process"
import Experience from "../components/Home/Experience"
import Services from "../components/Home/Services"
import Brands from "../components/Home/Brands"
import Vis_Mis from "../components/Home/Vis_Mis"
// import Testimonail from "../components/Home/Testimonial"
// import { FAQs } from "../components/Home/FAQs"
import { FaArrowRightLong } from "react-icons/fa6"
import { Footer } from "../components/Footer"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  // Developer info
  console.log(
    "Developed by: Preet Sojitra\n" +
      "Wesite: https://preet-sojitra-github-io.vercel.app/\n" +
      "GitHub: https://github.com/Preet-Sojitra\n" +
      "Contact for any kind of development work\n"
  )

  const changeBg = useRef(null)
  const visMisEle = useRef(null)

  useEffect(() => {
    gsap.to(changeBg.current, {
      scrollTrigger: {
        trigger: changeBg.current,
        start: "top 30%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
      backgroundColor: "#0C1013",
      duration: 0.9,
      // delay: 0.1,
    })

    // gsap.to(visMisEle.current, {
    //   scrollTrigger: {
    //     trigger: visMisEle.current,
    //     start: "top 70%",
    //     toggleActions: "play none none reverse",
    //     // markers: true,
    //   },
    //   backgroundColor: "white",
    //   duration: 0.9,
    //   // delay: 0.1,
    // })
  }, [])

  return (
    <main>
      <Navbar />

      <div className="mt-4">
        <h1 className="pl-8 sm:pl-14 text-secondary font-bold text-2xl md:text-4xl lg:text-5xl lg:pl-24 lg:leading-[1.175]">
          {/* Elevate Your Audio <br /> Experience With Loud and Clear */}
          Elevate Your Cinematic <br /> Experience With Loud and Clear
        </h1>

        <div className="mt-7 relative">
          <Carousel />
        </div>

        <div className="mt-8 md:mt-14 pb-10 lg:pb-20" id="how-we-work">
          <Process />
        </div>

        <div className="bg-white px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20">
          <Experience />
        </div>

        <div
          className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20 bg-white"
          id="services"
          ref={changeBg}
        >
          <Services />
        </div>

        <div className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20">
          <Brands />
        </div>

        <div
          className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20"
          ref={visMisEle}
        >
          <Vis_Mis />
        </div>

        {/* Testimonials and FAQs on hold */}
        {/* <div className=" py-16  lg:py-20 ">
          <div className="px-6 sm:px-10 lg:pl-24 lg:pr-20">
            <h4 className="uppercase text-light-gray md:text-xl">
              Testimonials
            </h4>
            <div className="mt-4 space-y-2 md:flex md:space-y-0 md:gap-8 lg:gap-24 mlg:gap-36 xl:gap-[20%]">
              <h1 className="text-secondary font-medium capitalize text-2xl md:grow md:text-3xl lg:text-4xl lg:grow-0">
                What our customer says
              </h1>

              <p className="text-[#898686] md:grow-0 md:w-3/5 md:text-lg lg:w-1/2">
                At Loud & Clear, your wishes become our mission. Customer
                feedback fuels our creativity, ensuring every experience is a
                masterpiece of satisfaction. Your dreams, our performance -
                together, let&apos;s create audio excellence.
              </p>
            </div>
          </div>
          <div className="mt-7 lg:mt-12">
            <Testimonail />
          </div>
        </div> */}

        {/* <div
          className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20"
          id="faqs"
        >
          <FAQs />
        </div> */}

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
              <Link href="/contact">
                <button
                  className="bg-secondary flex items-center text-black px-4 py-2 mt-4 sm:mt-0 rounded-xl font-medium text-base group sm:mr-4
              border border-transparent hover:bg-transparent hover:text-secondary transition duration-300 ease-in-out hover:border-secondary lg:mr-28 lg:text-2xl"
                >
                  Get Started
                  <FaArrowRightLong className="inline-block ml-2 text-black  group-hover:text-secondary duration-300 group-hover:ml-3" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
