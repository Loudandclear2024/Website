"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const textEle = useRef(null)

  useEffect(() => {
    gsap.to(textEle.current, {
      scrollTrigger: {
        trigger: textEle.current,
        start: "top 30%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
      color: "#C2C2C2",
      duration: 0.5,
    })
  }, [])

  return (
    <>
      <div>
        <div className="text-center space-y-3 lg:space-y-4">
          <h3
            className="text-black font-medium text-lg md:text-xl lg:text-2xl"
            ref={textEle}
          >
            Our Services
          </h3>
          <h1 className="text-secondary font-semibold text-2xl xs:text-3xl md:text-4xl lg:text-5xl">
            Here Are Our Services
          </h1>
        </div>

        <div className="mt-8 lg:mt-12 grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/1.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Initial Consulting & Design
            </h3>
          </div>
          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/2.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Client Interfacing & Customizing Solutions
            </h3>
          </div>
          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/3.webp"
              alt="Picture of the author"
              width={300}
              height={600}
              className="w-full \sm:w-auto sm:h-auto object-cover rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Acoustic Design Expertise
            </h3>
          </div>

          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/4.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Project Management & Coordination
            </h3>
          </div>
          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/5.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Project Selection and Supply
            </h3>
          </div>

          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/6.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Installation Expertise
            </h3>
          </div>

          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/7.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Professional A/V Calibration & Optimization
            </h3>
          </div>
          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/8.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Warranties & Maintenance
            </h3>
          </div>

          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
            <Image
              src="/images/home/services/9.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md object-cover"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Home Automation Integration
            </h3>
          </div>

          {/* Just for making align properly */}
          <div className="hidden lg:flex lg:gap-4 lg:col-span-full lg:w-[67%] lg:justify-self-center">
            <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
              <Image
                src="/images/home/services/10.webp"
                alt="Picture of the author"
                width={1920}
                height={1080}
                className="rounded-md"
              />
              <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
                End User Training
              </h3>
            </div>
            <div
              className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10
          "
            >
              <Image
                src="/images/home/services/11.webp"
                alt="Picture of the author"
                width={1920}
                height={1080}
                className="rounded-md"
              />
              <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
                Final Calibration, Programming & Equipment Readjustment
              </h3>
            </div>
          </div>

          <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10 lg:hidden">
            <Image
              src="/images/home/services/10.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              End User Training
            </h3>
          </div>
          <div
            className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10
          sm:col-span-2 sm:justify-self-center sm:w-1/2 lg:w-full lg:col-start-auto lg:col-span-1 lg:hidden
          "
          >
            <Image
              src="/images/home/services/11.webp"
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="rounded-md"
            />
            <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
              Final Calibration, Programming & Equipment Readjustment
            </h3>
          </div>
        </div>
      </div>
    </>
  )

  // OLD
  // return (
  //   <>
  //     <div>
  //       <div className="text-center space-y-3 lg:space-y-4">
  //         <h3
  //           className="text-black font-medium text-lg md:text-xl lg:text-2xl"
  //           ref={textEle}
  //         >
  //           Our Services
  //         </h3>
  //         <h1 className="text-secondary font-semibold text-2xl xs:text-3xl md:text-4xl lg:text-5xl">
  //           Here Are Our Services
  //         </h1>
  //       </div>

  //       <div className="mt-8 lg:mt-12">
  //         <ResponsiveMasonry
  //           columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3 }}
  //         >
  //           <Masonry gutter="15px">
  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/1.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Initial Consulting & Design
  //               </h3>
  //             </div>
  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/2.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Client Interfacing & Customizing Solutions
  //               </h3>
  //             </div>
  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/3.webp"
  //                 alt="Picture of the author"
  //                 width={300}
  //                 height={600}
  //                 className="w-full \sm:w-auto sm:h-auto object-cover rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Acoustic Design Expertise
  //               </h3>
  //             </div>

  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/4.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Project Management & Coordination
  //               </h3>
  //             </div>
  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/5.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Project Selection and Supply
  //               </h3>
  //             </div>

  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/6.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Installation Expertise
  //               </h3>
  //             </div>

  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/7.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Professional A/V Calibration & Optimization
  //               </h3>
  //             </div>
  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/8.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Warranties & Maintenance
  //               </h3>
  //             </div>

  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/9.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md object-cover"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Home Automation Integration
  //               </h3>
  //             </div>
  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/10.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 End User Training
  //               </h3>
  //             </div>
  //             <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
  //               <Image
  //                 src="/images/home/services/11.webp"
  //                 alt="Picture of the author"
  //                 width={1920}
  //                 height={1080}
  //                 className="rounded-md"
  //               />
  //               <h3 className="text-white font-medium absolute bottom-1 z-20 text-lg left-3 lg:text-xl">
  //                 Final Calibration, Programming & Equipment Readjustment
  //               </h3>
  //             </div>
  //           </Masonry>
  //         </ResponsiveMasonry>
  //       </div>
  //     </div>
  //   </>
  // )
}
