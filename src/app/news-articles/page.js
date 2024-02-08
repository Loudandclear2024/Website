"use client"

import Navbar from "../../components/Navbar"
import { Marquee } from "@/components/News-Articles/Marquee"
import { Grid } from "@/components/News-Articles/Grid"
import { Footer } from "@/components/Footer"
import { useEffect, useState } from "react"

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
      <Navbar />
      <div className="px-7 mt-8 sm:px-10 lg:py-12 lg:pl-24 lg:pr-20 lg:mt-0">
        <div>
          <h1 className="text-light-gray font-medium leading-normal text-3xl sm:text-4xl sm:leading-[1.5] lg:text-5xl lg:leading-[1.5] mlg:w-4/5">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </h1>
          <div className="w-full flex justify-end">
            <h4 className="text-dark-gray mt-9 text-lg sm:text-xl lg:w-1/2 lg:mr-0">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
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
