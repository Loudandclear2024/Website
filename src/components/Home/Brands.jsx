import Image from "next/image"

export default function Brands() {
  const clients = [
    {
      src: "/images/home/clients/adani.webp",
      alt: "Adani",
      name: "Adani",
    },
    {
      src: "/images/home/clients/gca.webp",
      alt: "GCA",
      name: "GCA",
    },
    {
      src: "/images/home/clients/gls.webp",
      alt: "GLS",
      name: "GLS",
    },
    {
      src: "/images/home/clients/gmdc.webp",
      alt: "GMDC",
      name: "GMDC",
    },
    {
      src: "/images/home/clients/gujsail.webp",
      alt: "GUJSAIL",
      name: "GUJSAIL",
    },
    {
      src: "/images/home/clients/lilleria.webp",
      alt: "Lilleria",
      name: "Lilleria",
    },
    {
      src: "/images/home/clients/navin.webp",
      alt: "Navin",
      name: "Navin Group",
    },
    {
      src: "/images/home/clients/torrent.webp",
      alt: "Torrent",
      name: "Torrent",
    },
    {
      src: "/images/home/clients/navratna.webp",
      alt: "Navratna",
      name: "Navratna",
    },
  ]

  return (
    <>
      <div className="text-center">
        <h3 className="text-light-gray text-xl sm:text-3xl">
          Some of our esteemed clients include
        </h3>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-12 mt-9 md:mt-16">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col gap-1">
              <Image
                src={client.src}
                alt={client.alt}
                width={200}
                height={100}
                className=" w-20 h-20 sm:w-40 sm:h-20 object-contain"
              />
              {/* <h4 className="text-light-gray  text-base sm:text-lg">
                {client.name}
              </h4> */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
