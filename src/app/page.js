"use client"

import Navbar from "@/components/Navbar"
import Carousel from "@/components/Home/Carousel"
import Process from "@/components/Home/Process"
import Experience from "@/components/Home/Experience"
import Services from "@/components/Home/Services"
import Brands from "@/components/Home/Brands"
import Vis_Mis from "@/components/Home/Vis_Mis"

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

        <div className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-24 lg:pr-20">
          <h4 className="uppercase text-light-gray">Testimonials</h4>
          <div>
            <h1 className="text-secondary font-medium capitalize text-2xl">
              What our customer says
            </h1>

            <p className="text-[#898686]">
              We always provide best for our clients in any case, so that’s all
              wishes can be reaslized and decenet. Lorem Ipsum dolor isit. Lorem
              Ipsum dolor isit.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
