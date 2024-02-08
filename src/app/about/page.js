"use client"

import Link from "next/link"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"

export default function About() {
  const team = [
    {
      name: "Karan Gandhi",
      position: "Founder",
      image: "/images/about/team/karan.jpeg",
      linkedin: "https://www.linkedin.com/in/karan-gandhi-3370201b/",
    },
    {
      name: "Sanjay Aagri",
      position: "Manager",
      image: "/images/about/team/sanjay.jpeg",
      linkedin: "https://www.linkedin.com/in/john-doe",
    },
    {
      name: "Dhrupad Anam",
      position: "Sr. Project Manager",
      image: "/images/about/team/dhrupad.jpeg",
      linkedin: "https://www.linkedin.com/in/maria-sanchaz",
    },
    {
      name: "Ankit Kumar",
      position: "Site Engineer",
      image: "/images/about/team/ankit.jpeg",
      linkedin: "https://www.linkedin.com/in/maria-sanchaz",
    },
    {
      name: "Ganesh Parmar",
      position: "AutoCAD Draftman",
      image: "/images/about/team/ganesh.jpeg",
      linkedin: "https://www.linkedin.com/in/john-doe",
    },
    {
      name: "Deepak Goswami",
      position: "Office Boy",
      image: "/images/about/team/deepak.jpeg",
      linkedin: "https://www.linkedin.com/in/john-doe",
    },
  ]

  return (
    <>
      <Navbar />

      <div className="px-7 mt-6 sm:px-10 lg:py-12 lg:pl-24 lg:pr-20">
        <h3 className="text-secondary text-xl">How It Started</h3>

        <div className="mt-7 md:flex md:gap-3 items-center lg:justify-between">
          <h1 className="text-light-gray font-medium text-3xl md:text-5xl md:leading-tight lg:w-[45%] mlg:text-6xl mlg:leading-snug xl:text-7xl xl:leading-normal xl:w-[47%]">
            Our Dream is Global Learning Transformation
          </h1>

          <Image
            src="/images/about/about.jpeg"
            width={500}
            height={500}
            alt="team"
            className="rounded-lg mt-5 md:w-1/2 md:mt-0 lg:w-[45%] mlg:mr-8 mlg:w-[40%] xl:w-[35%]"
          />
        </div>

        <div className="mt-7 md:mt-10">
          <p className="text-light-gray text-justify md:text-lg mlg:text-2xl">
            Loud & Clear is your premier destination for premium audio-video
            solutions. As a leading end to end AV solution provider, we
            specialize in delivering top-of-the-line AV systems tailored to your
            unique needs. With a focus on quality and innovation, we ensure
            crystal-clear sound and stunning visuals that elevate your
            entertainment experience. Our expert team provides personalized
            consultations to design bespoke solutions that seamlessly integrate
            into your space. From home theaters to corporate environments, we
            offer a comprehensive range of products and services to meet your
            every AV requirement. Experience excellence in audio-video with Loud
            & Clear.
          </p>
        </div>

        <div className="mt-7 md:mt-20 lg:mt-24">
          <h3 className="text-secondary text-xl lg:text-2xl">Meet The Team</h3>

          <h1 className="text-light-gray font-medium text-3xl mt-5 lg:text-5xl lg:leading-tight lg:w-4/5 mlg:w-3/4 2xl:w-1/2 lg:mt-10">
            Meet Our Dedicated Team of Lorem and Ipsum
          </h1>

          {/* All Images */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:mt-5 lg:mt-8 lg:grid-cols-3">
            {team.map((member, index) => (
              <div className="relative group" key={index}>
                <Image
                  src={member.image}
                  width={500}
                  height={500}
                  alt="team"
                  className="rounded-lg mt-5 h-[350px] w-full  object-cover object-center mlg:h-[400px] xl:h-[450px] xl:w-full"
                />

                {/* Linkedin */}
                <div
                  className="mx-1 flex items-center justify-between rounded-md px-3 py-1 gap-1 absolute bottom-2 left-4 right-4 sm:flex-row sm:items-center sm:gap-3 sm:w-4/5 sm:mx-auto
                sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-700 sm:ease-in-out

                xl:left-12 xl:right-12  bg-light-gray
                "
                >
                  <div>
                    <h3 className="text-black font-medium text-base mlg:text-lg">
                      {member.name}
                    </h3>
                    <h4 className="text-[#0C1013] text-xs mlg:text-base">
                      {member.position}
                    </h4>
                  </div>
                  {/* <h6 className="text-[#0077b5] text-xs flex items-center gap-1 cursor-pointer sm:hidden">
                    Linkedin
                  </h6> */}
                  {/* <FaLinkedin className="text-[#0077b5] text-2xl hidden sm:block" /> */}
                  <Link href={member.linkedin} target="_blank">
                    <FaLinkedin className="text-[#0077b5] text-2xl cursor-pointer lg:text-3xl mlg:text-4xl" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
