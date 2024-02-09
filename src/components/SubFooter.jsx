"use client"

import Image from "next/image"
import { FaInstagram } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import Link from "next/link"
import localFont from "next/font/local"

const brandBe = localFont({
  src: [
    {
      path: "../../public/fonts/Brandbe-Regular.woff",
      weight: "400",
    },
  ],
})

export const SubFooter = () => {
  return (
    <>
      <div className="px-2 sm:px-7 sm:flex sm:justify-between md:px-16">
        {/* Left */}
        <div className="sm:w-3/5">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-14 h-18"
              />

              <h1
                className={`text-white
            ${brandBe.className}
            text-[42px]  lg:text-5xl`}
              >
                Loud & Clear
              </h1>
            </div>
          </Link>

          {/* <p className="text-[#898686] px-4 md:w-4/5 lg:text-xl">
            Experience the pinnacle of audio excellence, where passion meets
            precision. 300+ successful projects, CEDIA certified. Unmatched
            quality, personalized solutions.
          </p> */}

          <div className="mt-2 px-4">
            <p className="text-light-gray">
              304 Sun Orbit, B/H Rajpath Club <br />
              Next to PDPU Hall, Rajpath Rangoli Rd <br />
              Ahmedabad - 380059.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="mt-4 px-4">
              <div className="flex items-center gap-3 ">
                <MdOutlineEmail className="text-secondary text-2xl" />
                <h3 className=" text-secondary text-lg">Email Address</h3>
              </div>
              <p className="text-light-gray ">info.loudandclear@gmail.com</p>
            </div>
            <div className="mt-4 px-4">
              <div className="flex items-center gap-3 ">
                <BsFillTelephoneFill className="text-secondary text-2xl" />
                <h3 className=" text-secondary text-lg">Mobile</h3>
              </div>
              <p className="text-light-gray ">+91 1010101010</p>
            </div>
          </div>

          {/* Socials */}
          <div className=" flex gap-3 mt-4 px-4">
            <a
              href="https://www.instagram.com/loud_n_clear_india?igsh=MTA2bzB5Nmo3c2RvNg%3D%3D&utm_source=qr"
              target="_blank"
            >
              <div className="bg-[#1D2123] rounded-full p-2 cursor-pointer">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/loud-and-clear-ahmedabad/"
              target="_blank"
            >
              <div className="bg-[#1D2123] rounded-full p-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-3xl" />
              </div>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="mt-7 px-4 space-y-5 sm:flex sm:space-y-0  sm:gap-10 grow md:justify-end lg:justify-evenly lg:w-[30%]">
          {/* Quick Links */}
          <div className="space-y-1 sm:space-y-6">
            <h3 className="text-white font-medium text-lg">Quick Links</h3>
            <ul className="text-light-gray flex gap-x-4 sm:gap-4 sm:flex-col flex-wrap sm:flex-nowrap">
              <Link href="/">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link href="/#how-we-work">
                <li className="cursor-pointer">How It Works</li>
              </Link>
              <Link href="/#services">
                <li className="cursor-pointer">Services</li>
              </Link>
              <Link href="/#faqs">
                <li className="cursor-pointer">FAQS</li>
              </Link>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-1 sm:space-y-6">
            <h3 className="text-white font-medium text-lg">Company</h3>
            <ul className="text-light-gray flex gap-x-4 sm:gap-4 sm:flex-col flex-wrap sm:flex-nowrap">
              <Link href="/about">
                <li className="cursor-pointer">About Us</li>
              </Link>
              <Link href="/projects">
                <li className="cursor-pointer">Projects</li>
              </Link>
              <Link href="/news-articles">
                <li className="cursor-pointer">News Article</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer">Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
