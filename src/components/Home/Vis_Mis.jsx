import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"

export default function Vis_Mis() {
  const subHeadingEle1 = useRef(null)
  const subHeadingEle2 = useRef(null)
  const headingEle1 = useRef(null)
  const headingEle2 = useRef(null)
  const contentEle1 = useRef(null)
  const contentEle2 = useRef(null)
  // useEffect(() => {
  //   gsap.to([subHeadingEle1.current, subHeadingEle2.current], {
  //     scrollTrigger: {
  //       trigger: subHeadingEle1.current,
  //       start: "top 70%",
  //       toggleActions: "play none none reverse",
  //       // markers: true,
  //     },
  //     color: "#666666",
  //     duration: 0.9,
  //   })

  //   gsap.to([headingEle1.current, headingEle2.current], {
  //     scrollTrigger: {
  //       trigger: headingEle1.current,
  //       start: "top 70%",
  //       toggleActions: "play none none reverse",
  //       markers: true,
  //     },
  //     color: "#0C1013",
  //     duration: 0.9,
  //   })

  //   gsap.to([contentEle1.current, contentEle2.current], {
  //     scrollTrigger: {
  //       trigger: contentEle1.current,
  //       start: "top 70%",
  //       toggleActions: "play none none reverse",
  //       // markers: true,
  //     },
  //     color: "black",
  //     duration: 0.9,
  //   })
  // }, [])

  return (
    <>
      <div className="space-y-12 md:flex md:space-y-0 md:gap-3 md:justify-between lg:gap-6 xl:gap-10">
        {/* Vision */}
        <div className="space-y-3 lg:space-y-5">
          <h4
            className="text-secondary font-medium text-lg lg:text-2xl"
            ref={subHeadingEle1}
          >
            Our Vision
          </h4>
          <h1
            className="text-light-gray font-medium text-2xl lg:text-4xl xl:text-5xl"
            ref={headingEle1}
          >
            Transforming Audio Visual Experiences
          </h1>
          <p className="text-light-gray text-lg lg:text-xl" ref={contentEle1}>
            At Loud & Clear, we&apos;re committed to raising the bar in
            audio-visual design and calibration standards. We envision a future
            where every AV room is meticulously crafted to deliver unparalleled
            sound and visual experiences. By setting new benchmarks for quality
            and precision, we aim to transform how audio-visual systems are
            perceived and enjoyed. With our expertise and dedication, we strive
            to create immersive environments that captivate the senses and
            exceed expectations. Join us as we lead the change towards a world
            where excellence in AV design and calibration is the norm, not the
            exception.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-3 lg:space-y-5">
          <h4
            className="text-secondary font-medium text-lg lg:text-2xl"
            ref={subHeadingEle2}
          >
            Our Mission
          </h4>
          <h1
            className="text-light-gray font-medium text-2xl lg:text-4xl xl:text-5xl"
            ref={headingEle2}
          >
            Revolutionizing Home Entertainment
          </h1>
          <p className="text-light-gray text-lg lg:text-xl" ref={contentEle2}>
            At Loud & Clear, we envision revolutionizing home entertainment by
            seamlessly integrating cutting-edge audio-visual solutions into
            residential spaces. We aspire to create immersive environments that
            transcend traditional boundaries, enriching daily experiences and
            fostering deeper connections within homes. Through innovation and
            expertise, we strive to redefine the way homeowners interact with
            their audio-visual systems, elevating entertainment to new heights
            of sophistication and enjoyment. Our vision is to be the trusted
            partner in transforming houses into personalized havens of
            unparalleled audio-visual delight, where every moment is enhanced by
            the perfect harmony of technology and design.
          </p>
        </div>
      </div>
    </>
  )
}
