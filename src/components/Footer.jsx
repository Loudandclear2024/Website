"use client"

import { SubFooter } from "./SubFooter"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <div
        className="my-4 py-10
        relative after:absolute after:w-full after:bottom-0 after:bg-[#898686] after:h-[1px]
        "
      >
        <SubFooter />
      </div>

      <div
        className=" px-4 text-center pb-10 pt-6
        "
      >
        <h1 className="text-light-gray">
          Copyright &copy; {year}. Loud and Clear. All Rights Reserved.
        </h1>
      </div>
    </>
  )
}
