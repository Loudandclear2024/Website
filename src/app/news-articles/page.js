import Navbar from "@/components/Navbar"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="px-7 mt-8 sm:px-10 lg:py-12 lg:pl-24 lg:pr-20 lg:mt-0">
        <div>
          <h1 className="text-light-gray font-medium leading-normal text-3xl sm:text-4xl sm:leading-[1.5] lg:text-5xl lg:leading-[1.5] mlg:w-4/5">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </h1>
          <div className="w-full flex justify-end">
            <h4 className="text-dark-gray mt-9 text-lg sm:text-xl lg:w-1/2 lg:mr-0">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </h4>
          </div>
        </div>

        {/* This will be marquee animation, so want everything horizontal */}
        <div
          className="text-5xl text-light-gray mt-14 px-4
        vertical-bars sm:text-7xl lg:mt-16 lg:text-8xl lg:px-9
        "
        >
          <div className="overflow-x-scroll overflow-y-hidden space-x-16 no-scrollbar whitespace-nowrap lg:space-x-24 py-2">
            <span className="circles">Acoustic</span>
            <span className="circles">Interior</span>
            <span className="circles">Management</span>
          </div>
        </div>

        <div className="mt-16 space-y-20 md:mt-24">
          {/* each will be grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3
          
          "
          >
            <Image src="/images/news-articles/1.jpg" width={500} height={500} />
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 md:col-span-2
          lg:grid-cols-3
          "
          >
            <Image
              src="/images/news-articles/1.jpg"
              width={500}
              height={500}
              className="md:col-start-2 lg:md:col-start-3"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Image
              src="/images/news-articles/1.jpg"
              width={500}
              height={500}
              className="lg:col-start-2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Image
              src="/images/news-articles/1.jpg"
              width={500}
              height={500}
              className="md:col-start-2 lg:col-start-1"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Image
              src="/images/news-articles/1.jpg"
              width={500}
              height={500}
              className="lg:col-start-3"
            />
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3
          "
          >
            <Image
              src="/images/news-articles/1.jpg"
              width={500}
              height={500}
              className="md:col-start-2"
            />
          </div>
        </div>
      </div>
    </>
  )
}
