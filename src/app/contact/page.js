import { Footer } from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Page() {
  return (
    <>
      <Navbar />

      <div className="px-7 mt-6 sm:px-10 lg:py-12 lg:pl-24 lg:pr-20">
        {/* FORM */}
        <div>
          <h1 className="text-secondary text-3xl font-bold">
            CONTACT <span className="text-light-gray text-2xl ml-1">US</span>
          </h1>

          <h3 className="text-light-gray text-lg mt-5">
            Let's Chat, Reach Out To Us <br /> We&apos;d Love To Hear From You
          </h3>

          <form className="mt-10 space-y-10">
            <div>
              <input
                type="text"
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                "
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                "
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                "
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <textarea
                className="w-full text-light-gray mt-1 focus:outline-none border-b bg-transparent rounded-none text-xl px-2
                    "
                rows={5}
                placeholder="Message"
              ></textarea>
            </div>

            <div className="flex w-full lg:w-fit">
              <button
                className="bg-secondary text-black px-8 py-2 rounded-md text-xl mx-auto
                hover:bg-opacity-80 transition duration-300 ease-in-out
              "
              >
                Send
              </button>
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
