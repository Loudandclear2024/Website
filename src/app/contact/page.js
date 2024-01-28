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
            Let's Chat, Reach Out To Us <br /> We'd Love To Hear From You
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

            <div className="flex w-full">
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
        <div className="mt-14">
          <h1 className="text-secondary text-3xl font-bold">
            OUR <span className="text-light-gray text-2xl ml-1">LOCATION</span>
          </h1>

          <h3 className="text-light-gray text-lg mt-5">
            Visit Us At Our Office
          </h3>

          <div>
            {/* Google MAP Integrate */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.702526791179!2d121.0369583148229!3d14.55464528982542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!
                3m3!1m2!1s0x3397c9a6d8b7f6a7%3A0x3a2f7d0b7a2a8e9e!2sMakati%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1631301706465!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe> */}
          </div>
        </div>

        {/* Other Details */}
        <div></div>
      </div>

      <Footer />
    </>
  )
}
