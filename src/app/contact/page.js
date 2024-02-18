"use client"

import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import Head from "next/head"

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(formData)
    if (
      formData.name &&
      formData.email &&
      formData.mobile &&
      formData.message &&
      formData.subject &&
      formData.mobile.length === 10
    ) {
      setIsSubmitting(true)

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          (result) => {
            // console.log(result.text)
            setIsSubmitting(false)
            toast.success("Email Sent Successfully")
            setFormData({
              name: "",
              email: "",
              mobile: "",
              subject: "",
              message: "",
            })
          },
          (error) => {
            console.log(error.text)
            setIsSubmitting(false)
            toast.error("Error Sending Email")
          }
        )
    } else if (formData.mobile.length !== 10) {
      toast.error("Invalid Mobile Number")
    } else {
      toast.error("Please fill all the fields")
    }
  }

  return (
    <>
      <Head>
        <title>Loud and Clear | Contact Us</title>
        <meta
          name="description"
          content="Contact Loud and Clear for all your audio-video solutions"
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
        <meta name="og:image" content="https://www.loudandclear.in/logo.png" />
      </Head>
      <Navbar />
      <Toaster />

      <div className="px-7 mt-6 sm:px-10 lg:py-12 lg:pl-24 lg:pr-20">
        {/* FORM */}
        <div>
          <h1 className="text-secondary text-3xl font-bold sm:text-4xl lg:text-5xl">
            CONTACT{" "}
            <span className="text-light-gray text-2xl ml-1 lg:text-3xl">
              US
            </span>
          </h1>

          <h3 className="text-light-gray text-lg mt-5 sm:text-xl">
            Let&apos;s Chat, Reach Out To Us <br /> We&apos;d Love To Hear From
            You
          </h3>

          <form className="mt-10 space-y-10" ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                "
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                "
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                "
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                "
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                    "
                rows={5}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="flex w-full lg:w-fit">
              <input
                className={`bg-secondary text-black px-8 py-2 rounded-md text-xl mx-auto
                hover:bg-opacity-80 transition duration-300 ease-in-out sm:mx-0
                ${
                  isSubmitting
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }
  `}
                type="submit"
                value={isSubmitting ? "Sending..." : "Send"}
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>

        {/* MAP */}
        {/* <div className="mt-14">
          <h1 className="text-secondary text-3xl font-bold">
            OUR <span className="text-light-gray text-2xl ml-1">LOCATION</span>
          </h1>

          <h3 className="text-light-gray text-lg mt-5">
            Visit Us At Our Office
          </h3>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=23.01510226165136, 72.5769789556552"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div> */}

        {/* Other Details */}
        <div></div>
      </div>

      <Footer />
    </>
  )
}
