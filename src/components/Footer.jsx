import React from "react"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa"

export const Footer = () => {
  return (
    <>
      <div className="px-2 sm:px-7 sm:flex sm:justify-between md:px-16">
        {/* Left */}
        <div className="sm:w-3/5">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-14 h-18"
            />

            <h1 className="text-white text-2xl md:text-3xl">Loud & Clear</h1>
          </div>

          <p className="text-[#898686] px-4 md:w-4/5 lg:text-xl">
            Ideas become mesmerising reality through our dedication, creating
            unique and inspiring spaces together.
          </p>

          {/* Socials */}
          <div className=" flex gap-3 mt-4 px-4">
            <div className="bg-[#1D2123] rounded-full p-2 cursor-pointer">
              <FaInstagram className="text-white text-3xl" />
            </div>
            <div className="bg-[#1D2123] rounded-full p-2 cursor-pointer">
              <FaLinkedinIn className="text-white text-3xl" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="mt-7 px-4 space-y-5 sm:flex sm:space-y-0  sm:gap-10 grow md:justify-end lg:justify-evenly lg:w-[30%]">
          {/* Quick Links */}
          <div className="space-y-1 sm:space-y-6">
            <h3 className="text-white font-medium text-lg">Quick Links</h3>
            <ul className="text-light-gray flex gap-4 sm:flex-col">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">How It Works</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">FAQS</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-1 sm:space-y-6">
            <h3 className="text-white font-medium text-lg">Company</h3>
            <ul className="text-light-gray flex gap-4 sm:flex-col">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">News Article</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
