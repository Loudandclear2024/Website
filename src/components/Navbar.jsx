"use client"

import Link from "next/link"
import Image from "next/image"
import { Lora } from "next/font/google"
import { BiAlignRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { useState } from "react"

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
})

// TODO: Add active class (gradient + underline) to nav items

export default function Navbar(props) {
  // console.log(props)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  return (
    <nav
      className={`
    ${props ? props.className : "relative"}
    `}
    >
      <div className="py-3 px-3 flex items-center justify-between lg:pr-6">
        {/* LOGO DIV */}
        <div className="flex items-center gap-1">
          <div>
            <Image
              src="/logo.png"
              height={50}
              width={50}
              alt="Loud & Clear"
              className=" sm:w-20 sm:h-28"
            />
          </div>
          <div>
            <h1 className={`${lora.className} text-white text-2xl lg:text-3xl`}>
              Loud & Clear
            </h1>
          </div>
        </div>

        {/* nav items */}
        <ul className="hidden lg:flex lg:items-center text-white gap-7 text-xl">
          <Link href="/">
            <li className="nav-link">Home</li>
          </Link>
          <Link href="/about">
            <li className="nav-link">About Us</li>
          </Link>
          <Link href="/projects">
            <li className="nav-link">Projects</li>
          </Link>
          <Link href="/news-articles">
            <li className="nav-link">News Articles</li>
          </Link>
          <li className="nav-link">Blogs</li>
        </ul>

        {/* Contact */}
        <div className="hidden lg:block lg:pr-5">
          <button
            className="text-xl text-white border-secondary border-[1px] rounded-xl px-3 py-2
          hover:bg-secondary hover:text-white transition duration-300 ease-in-out
          "
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger icon div */}
        <div className="lg:hidden">
          {isHamburgerOpen ? (
            <RxCross2
              className="text-white text-4xl cursor-pointer pr-2"
              onClick={() => setIsHamburgerOpen(false)}
            />
          ) : (
            <BiAlignRight
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsHamburgerOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Hamburger */}
      <div
        className={`absolute z-full w-screen sm:w-4/5 md:w-3/5 h-screen bg-white top-0 px-3 duration-300 ease-in ${
          isHamburgerOpen ? "left-0" : "-left-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-1">
            <div>
              <Image
                src="/logo.png"
                height={50}
                width={50}
                alt="Loud & Clear"
              />
            </div>
            <div>
              <h1 className={`${lora.className} text-black text-2xl`}>
                Loud & Clear
              </h1>
            </div>
          </div>

          {/* Cross icon div */}
          <div>
            <RxCross2
              className="text-black text-4xl cursor-pointer pr-2"
              onClick={() => setIsHamburgerOpen(false)}
            />
          </div>
        </div>

        {/* Nav Items */}
        <div className="mt-2 px-4">
          <ul className="text-3xl space-y-3 font-medium">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About Us</li>
            </Link>
            <Link href="/projects">
              <li>Projects</li>
            </Link>
            <Link href="/news-articles">
              <li>News Articles</li>
            </Link>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
