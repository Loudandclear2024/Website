import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"

export default function About() {
  const team = [
    {
      name: "Maria Sanchaz",
      position: "Chief Product Officer",
      image: "/images/about/team/1.jpeg",
      linkedin: "https://www.linkedin.com/in/maria-sanchaz",
    },
    {
      name: "John Doe",
      position: "Founder",
      image: "/images/about/team/2.jpeg",
      linkedin: "https://www.linkedin.com/in/john-doe",
    },
    {
      name: "Maria Sanchaz",
      position: "Chief Product Officer",
      image: "/images/about/team/1.jpeg",
      linkedin: "https://www.linkedin.com/in/maria-sanchaz",
    },
    {
      name: "John Doe",
      position: "Founder",
      image: "/images/about/team/2.jpeg",
      linkedin: "https://www.linkedin.com/in/john-doe",
    },
    {
      name: "Maria Sanchaz",
      position: "Chief Product Officer",
      image: "/images/about/team/1.jpeg",
      linkedin: "https://www.linkedin.com/in/maria-sanchaz",
    },
    {
      name: "John Doe",
      position: "Founder",
      image: "/images/about/team/2.jpeg",
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
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>

        <div className="mt-7 md:mt-20 lg:mt-24">
          <h3 className="text-secondary text-xl lg:text-2xl">Meet The Team</h3>

          <h1 className="text-light-gray font-medium text-3xl mt-5 lg:text-5xl lg:leading-tight lg:w-4/5 mlg:w-3/4 2xl:w-1/2 lg:mt-10">
            Meet Our Dedicated Team of Lorem and Ipsum
          </h1>

          {/* All Images */}
          <div className="grid gap-4 grid-cols-2 md:mt-5 lg:mt-8">
            {team.map((member, index) => (
              <div className="relative group" key={index}>
                <Image
                  src={member.image}
                  width={500}
                  height={500}
                  alt="team"
                  className="rounded-lg mt-5 h-[200px] w-full  object-cover object-center"
                />

                {/* Linkedin */}
                <div
                  className="bg-light-gray mx-1 flex flex-col rounded-md px-3 py-1 gap-1 absolute bottom-1 left-1 right-1 sm:flex-row sm:items-center sm:gap-3 sm:w-4/5 sm:mx-auto
                sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-700 sm:ease-in-out
                "
                >
                  <div>
                    <h3 className="text-black font-medium text-sm">
                      {member.name}
                    </h3>
                    <h4 className="text-[#0C1013] text-xs">
                      {member.position}
                    </h4>
                  </div>
                  <h6 className="text-[#0077b5] text-xs flex items-center gap-1 cursor-pointer sm:hidden">
                    Linkedin
                  </h6>
                  <FaLinkedin className="text-[#0077b5] text-2xl hidden sm:block" />
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
