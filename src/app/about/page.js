"use client"

import Link from "next/link"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"
import Head from "next/head"

export default function About() {
  const team = [
    {
      name: "Karan Gandhi",
      position: "Founder",
      image: "/images/about/team/karan.webp",
      linkedin: "https://www.linkedin.com/in/karan-gandhi-3370201b/",
    },
    {
      name: "Sanjay Aagri",
      position: "Manager",
      image: "/images/about/team/sanjay.webp",
      linkedin: "#",
    },
    {
      name: "Dhrupad Anam",
      position: "Sr. Project Manager",
      image: "/images/about/team/dhrupad.webp",
      linkedin: "https://www.linkedin.com/in/dhrupad-anam-b269122b0/",
    },
    {
      name: "Rajendra Patel",
      position: "Accountant",
      image: "/images/about/team/rajendra.webp",
      linkedin: "#",
    },
    {
      name: "Ankit Kumar",
      position: "Site Engineer",
      image: "/images/about/team/ankit.webp",
      linkedin: "https://www.linkedin.com/in/ankit-kumar-5427392b0/",
    },
    {
      name: "Ganesh Parmar",
      position: "AutoCAD Draftman",
      image: "/images/about/team/ganesh.webp",
      linkedin: "https://www.linkedin.com/in/ganesh-parmar-26673a2b0/",
    },
    {
      name: "Deepak Goswami",
      position: "Office Assistant",
      image: "/images/about/team/deepak.webp",
      linkedin: "https://www.linkedin.com/in/deepak-goswami-7907342b0/",
    },
  ]

  return (
    <>
      <Head>
        <Head>
          <title>Loud and Clear | About Us</title>
          <meta
            name="description"
            content="
        Loud & Clear is your premier destination for premium audio-video solutions. As a leading end to end AV solution provider, we specialize in delivering top-of-the-line AV systems. From home theaters to corporate environments, we offer a comprehensive range of products and services to meet your every AV requirement. Experience excellence in audio-video with Loud & Clear."
          />
          <meta
            name="keywords"
            content="audio, video, AV, solutions, home theater, corporate, Loud & Clear"
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
          <meta
            name="og:image"
            content="https://www.loudandclear.in/logo.png"
          />
        </Head>
      </Head>
      <Navbar />

      <div className="px-7 mt-6 sm:px-10 lg:py-12 lg:pl-24 lg:pr-20">
        <h3 className="text-secondary text-xl">How It Started</h3>

        <div className="mt-7 md:flex md:gap-3 items-center lg:justify-between">
          <h1 className="text-light-gray font-medium text-3xl md:text-5xl md:leading-tight lg:w-[45%] mlg:text-6xl mlg:leading-snug xl:text-7xl xl:leading-normal xl:w-[47%]">
            Roaring Beginnings of Loud & Clear
          </h1>

          <Image
            src="/images/about/about.jpeg"
            width={1280}
            height={900}
            alt="team"
            className="rounded-lg mt-5 w-full h-full object-cover md:w-1/2 md:mt-0 lg:w-[40%] mlg:mr-8 mlg:w-[40%] xl:w-[35%]"
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
            Meet Our Dedicated Team Behind Loud & Clear
          </h1>

          {/* All Images */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:mt-5 lg:mt-8 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                className={`relative group
              ${
                index === 6 &&
                "lg:col-start-2 sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto"
              }
              `}
                key={index}
              >
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
