"use client"

import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Marquee = () => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const marqueeContainer = marqueeRef.current
    const marqueeContent = marqueeContainer.firstChild
    const clone = marqueeContent.cloneNode(true)
    marqueeContainer.appendChild(clone)

    gsap.to(marqueeContainer, {
      scrollLeft: marqueeContainer.scrollWidth,
      ease: "linear",
      duration: 300,
      repeat: -1,
      repeatDelay: 0,
    })

    return () => {
      gsap.killTweensOf(marqueeContainer)
    }
  }, [])

  return (
    <div
      className="text-5xl text-light-gray mt-14 px-4
  vertical-bars sm:text-7xl lg:mt-16 lg:text-8xl lg:px-9 md:sticky md:top-10 md:z-10
  "
    >
      <div
        ref={marqueeRef}
        className="overflow-x-scroll no-scrollbar overflow-y-hidden whitespace-nowrap
        space-x-16 lg:space-x-24 py-1
        "
      >
        <div className="inline-block space-x-16 lg:space-x-24">
          <span className="circles">Acoustics</span>
          <span className="circles">Audio & Visuals</span>
          <span className="circles">Interior</span>
          <span className="circles">Management</span>
          <span className="circles">Acoustics</span>
          <span className="circles">Audio & Visuals</span>
          <span className="circles">Interior</span>
          <span className="circles">Management</span>
          <span className="circles">Acoustics</span>
          <span className="circles">Audio & Visuals</span>
          <span className="circles">Interior</span>
          <span className="circles">Management</span>
          <span className="circles">Acoustics</span>
          <span className="circles">Audio & Visuals</span>
          <span className="circles">Interior</span>
          <span className="circles">Management</span>
          <span className="circles">Acoustics</span>
          <span className="circles">Audio & Visuals</span>
          <span className="circles">Interior</span>
          <span className="circles">Management</span>
        </div>
      </div>
      {/* <div
        className="overflow-x-scroll overflow-y-hidden no-scrollbar flex  whitespace-nowrap py-2 space-x-16 lg:space-x-24"
        ref={marqueeRef}
      >
        <div className="space-x-16 lg:space-x-24">
          <span className="circles">Acoustic</span>
          <span className="circles">Interior</span>
          <span className="circles">Management</span>
        </div>
        <div className="space-x-16 lg:space-x-24">
          <span className="circles">Acoustic</span>
          <span className="circles">Interior</span>
          <span className="circles">Management</span>
        </div>
      </div> */}
    </div>
  )
}
