"use client"

import Image from "next/image"
import { useEffect } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function Services() {
  return (
    <>
      <div>
        {/* Gradient */}
        <div></div>
        <div className="text-center space-y-3 lg:space-y-4">
          <h3 className="text-light-gray font-medium text-lg md:text-xl lg:text-2xl">
            {" "}
            Our Services
          </h3>
          <h1 className="text-secondary font-semibold text-2xl xs:text-3xl md:text-4xl lg:text-5xl">
            Here Are Our Best Services
          </h1>
        </div>

        <div className="mt-8 lg:mt-12">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3 }}
          >
            <Masonry gutter="15px">
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
                  className="w-full h-[450px] sm:w-auto sm:h-auto object-cover rounded-md"
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
                  Project Selection & Supply
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
              <div className="relative after:absolute after:bg-service after:w-full after:h-full after:opacity-50 after:top-0 after:left-0 after:z-10">
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
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  )
}

/**
 * 1.Initial consultation & Design //
2. Client interfacing and customizing solutions //
3. Acoustic design expertise //
4. Project management and coordination //
5. Product selection and supply 
6. Installation expertise //
7. Professional A/V calibration and optimization //
8. Warranties and maintenance //
9. Home Automation integration //
10. End user training //
11. Final Calibration, Programming and equipment readjustment.
 */
