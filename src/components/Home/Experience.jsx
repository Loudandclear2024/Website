import Image from "next/image"

export default function Experience() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-8 lg:items-center">
        {/* image */}
        <div className="md:w-full lg:w-4/5 xl:w-1/2">
          <Image
            src="/images/home/experience.webp"
            width={1920}
            height={1080}
            alt="experience"
            className="object-cover w-full h-[400px] md:h-[300px] lg:h-[400px] rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="md:ml-5 lg:w-4/5 xl:w-1/2">
          <h3 className="text-[#666666] font-medium text-xl mt-6 lg:text-2xl">
            Experience
          </h3>

          <p className="text-primary font-medium text-2xl mt-4 lg:text-3xl lg:leading-normal">
            Unleash the power of cinematic sound in the comfort of your home.
            Elevate your audio, transform your experience.
          </p>

          <p className="text-[#898686] mt-3 lg:text-lg">
            Immerse yourself in a symphony of sensations with our cutting-edge
            sound technology.
          </p>
        </div>
      </div>
    </>
  )
}
