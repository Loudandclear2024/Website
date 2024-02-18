"use client"

import Navbar from "../../components/Navbar"
import { Marquee } from "@/components/News-Articles/Marquee"
import { Grid } from "@/components/News-Articles/Grid"
import { Footer } from "@/components/Footer"
import { useState } from "react"
import Head from "next/head"

export default function Page() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState("")

  function openModal(img) {
    setIsOpen(true)
    setModalContent(img)
  }
  function closeModal() {
    setIsOpen(false)
    setModalContent("")
  }

  // useEffect(() => {
  //   // If the modal is open, disable scrolling of whole html
  //   if (modalIsOpen) {
  //     document.documentElement.style.overflow = "hidden"
  //   } else {
  //     document.documentElement.style.overflow = "scroll"
  //   }
  // }, [modalIsOpen])

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
      <div className="px-7 mt-8 sm:px-10 lg:py-12 lg:pl-24 lg:pr-20 lg:mt-0">
        <div>
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
          <Grid
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setIsOpen}
            openModal={openModal}
            closeModal={closeModal}
            modalContent={modalContent}
          />
        </div>
      </div>

      <Footer />
    </>
  )
}
