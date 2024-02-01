"use client"

import Link from "next/link"
import Image from "next/image"
import { BiAlignRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { useState } from "react"
import localFont from "next/font/local"
import { usePathname } from "next/navigation"

const brandBe = localFont({
  src: [
    {
      path: "../../public/fonts/Brandbe-Regular.woff",
      weight: "400",
    },
  ],
})

// TODO: Add active class (gradient + underline) to nav items

export default function Navbar(props) {
  // console.log(props)

  const pathname = usePathname()
  // console.log(pathname)

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  return (
    <nav
      className={`
    ${props.className ? props.className : "relative"}
    `}
    >
      <div className="py-3 px-3 flex items-center justify-between lg:pr-6">
        {/* LOGO DIV */}
        <Link href="/">
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
              <h1
                className={` ${brandBe.className}  text-white text-4xl md:text-5xl`}
              >
                Loud & Clear
              </h1>
            </div>
          </div>
        </Link>

        {/* nav items */}
        <ul className="hidden lg:flex lg:items-center text-white gap-7 text-xl">
          <Link href="/">
            <li
              className={` cursor-pointer
              ${pathname === "/" ? "active-nav-link" : "nav-link"}
            `}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={` cursor-pointer
              ${pathname === "/about" ? "active-nav-link" : "nav-link"}
            `}
            >
              About Us
            </li>
          </Link>
          <Link href="/projects">
            <li
              className={` cursor-pointer
              ${pathname === "projects" ? "active-nav-link" : "nav-link"}
            `}
            >
              Projects
            </li>
          </Link>
          <Link href="/news-articles">
            <li
              className={` cursor-pointer
              ${pathname === "/news-articles" ? "active-nav-link" : "nav-link"}
            `}
            >
              News Articles
            </li>
          </Link>
          <li className="nav-link">Blogs</li>
        </ul>

        {/* Contact */}
        <div className="hidden lg:block lg:pr-5">
          <button
            className={`text-xl  border-secondary border-[1px] rounded-xl px-3 py-2
          duration-300 ease-in-out

          ${
            pathname === "/contact"
              ? "bg-secondary text-black font-semibold"
              : "hover:bg-secondary hover:text-white transition text-white"
          }

          `}
          >
            <Link href="/contact">Contact Us</Link>
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
          <Link href="/">
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
                <h1 className={`${brandBe.className} text-black text-[42px]`}>
                  Loud & Clear
                </h1>
              </div>
            </div>
          </Link>

          {/* Cross icon div */}
          <div className="pr-4">
            <RxCross2
              className="text-black text-3xl cursor-pointer"
              onClick={() => setIsHamburgerOpen(false)}
            />
          </div>
        </div>

        {/* Nav Items */}
        <div className="mt-5 px-12">
          <ul className="text-3xl space-y-6 font-medium">
            <div>
              <Link href="/">
                <li
                  className={`
                cursor-pointer
                ${pathname === "/" ? "border-b-2 w-fit border-black" : ""}
                `}
                >
                  Home
                </li>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <li
                  className={`
                cursor-pointer
                ${pathname === "/about" ? "border-b-2 w-fit border-black" : ""}
                `}
                >
                  About Us
                </li>
              </Link>
            </div>

            <div>
              <Link href="/projects">
                <li
                  className={`
                cursor-pointer
                ${
                  pathname === "/projects"
                    ? "border-b-2 w-fit border-black"
                    : ""
                }
                `}
                >
                  Projects
                </li>
              </Link>
            </div>
            <div>
              <Link href="/news-articles">
                <li
                  className={`
                cursor-pointer
                ${
                  pathname === "/news-articles"
                    ? "border-b-2 w-fit border-black"
                    : ""
                }
                `}
                >
                  News Articles
                </li>
              </Link>
            </div>
            <div>
              <Link href="/blogs">
                <li>Blogs</li>
              </Link>
            </div>

            <div>
              <Link href="/contact">
                <li
                  className={`
                cursor-pointer
                ${
                  pathname === "/contact" ? "border-b-2 w-fit border-black" : ""
                }
                `}
                >
                  Contact Us
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
