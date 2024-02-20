"use client"

import Navbar from "../../components/Navbar"
import { Marquee } from "@/components/News-Articles/Marquee"
import { Grid } from "@/components/News-Articles/Grid"
import { Footer } from "@/components/Footer"
import Head from "next/head"
import Image from "next/image"
import Certificates from "@/components/News-Articles/Certificates"

export default function Page() {
  return (
    <>
      <Head>
        <title>Loud and Clear | News and Articles</title>
        <meta
          name="description"
          content="
        Explore Our Latest News and Articles: Uncover the Stories That Define Us and Our Work
        "
        />
        <meta
          name="keywords"
          content="audio, video, acoustics, AV, solutions, home theater, corporate, Loud & Clear"
        />
        <meta name="author" content="Loud and Clear" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="generator" content="Next.js" />
        <meta name="og:title" content="Loud and Clear" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://www.loudandclear.in" />
        <meta
          name="og:description"
          content="Premier AV solutions provider delivering crystal-clear sound & stunning visuals for tailored entertainment experiences. Expert consultations for seamless integration into any space. From home theaters to corporate environments, experience audio-video excellence with Loud and Clear."
        />
        <meta name="og:image" content="https://www.loudandclear.in/logo.png" />
      </Head>
      <Navbar />
      <div className="px-7 mt-8 sm:px-10 lg:pl-24 lg:pr-20 lg:mt-0">
        <h1 className="text-secondary mt-8 text-[42px] font-medium lg:text-6xl">
          Certifications
        </h1>

        <div>
          <h4 className="text-dark-gray mt-3 text-lg sm:text-xl lg:mt-5 lg:mr-0 xl:w-4/5">
            Our commitment to excellence is reflected in the certifications we
            have earned. We are proud to be recognized by the industry and our
            peers for our dedication to quality and innovation. Our
            certifications are a testament to our expertise and our unwavering
            commitment to delivering exceptional audio-visual solutions to our
            clients.
          </h4>
        </div>
      </div>
      <div className="mt-8 px-3 lg:mt-0">
        <Certificates />
      </div>

      <div className="px-7 mt-8 sm:px-10 lg:py-12 lg:pl-24 lg:pr-20 lg:mt-0">
        <div>
          <h1 className="text-secondary font-medium text-3xl lg:text-5xl">
            Decade of Progress: Then and Now
          </h1>

          <div className="mt-4">
            <div>
              <h4 className="text-dark-gray text-lg sm:text-xl lg:mt-5 lg:mr-0 xl:w-4/5">
                As we celebrate our 10th anniversary, we reflect on the journey
                that has brought us to where we are today. Our journey has been
                marked by innovation, excellence, and collaboration, and we are
                excited to continue this journey with you.
              </h4>
            </div>

            <div className="md:flex md:gap-5 mt-3 lg:mt-8 lg:gap-8">
              <div className="md:w-[30%] lg:w-[25%]">
                <h3 className="text-light-gray text-2xl">Then</h3>
                <Image
                  src={"/old_logo.jpeg"}
                  alt="old logo"
                  width={500}
                  height={500}
                  className="mt-3"
                />
              </div>
              <div className="mt-6 md:w-[30%] md:mt-0 lg:w-[20%]">
                <h3 className="text-light-gray text-2xl">Now</h3>
                <Image
                  src={"/new_logo.png"}
                  alt="new logo"
                  width={500}
                  height={500}
                  className="bg-white mt-2 md:mt-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <h1 className="text-light-gray font-medium leading-normal text-3xl sm:text-4xl sm:leading-[1.5] lg:text-5xl lg:leading-[1.5] mlg:w-4/5">
            Explore Our Latest News and Articles: <br /> Uncover the Stories
            That Define Us and Our Work
          </h1>
          <div className="w-full flex justify-end">
            <h4 className="text-dark-gray mt-9 text-lg sm:text-xl lg:w-1/2 lg:mr-0">
              Dive into a collection of publications that reflect our passion
              and commitment to excellence, offering valuable insights into our
              mission, values, and the impact we strive to create. Stay
              informed, engaged, and connected as we share our stories and
              milestones with you.
            </h4>
          </div>
        </div>

        {/* This will be marquee animation, so want everything horizontal */}
        <Marquee />

        <div className="mt-16 space-y-20 md:mt-24">
          {/* each will be grid */}
          <Grid />
        </div>
      </div>

      <Footer />
    </>
  )
}
