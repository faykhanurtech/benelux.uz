"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

const partners = [
  { name: "Embassy of Belgium", logo: "/partners/prt1.png" },
  { name: "Embassy of Uzbekistan in Benelux", logo: "/partners/prt2.png" },
  { name: "Kingdom of the Netherlands", logo: "/partners/prt3.png" },
  { name: "EUROUZ", logo: "/partners/prt4.png" },
  { name: "BLCCA", logo: "/partners/prt5.png" },
  { name: "Chamber of Commerce Luxembourg", logo: "/partners/prt6.png" },
  { name: "Embassy of Belgium", logo: "/partners/prt1.png" },
  { name: "Embassy of Uzbekistan in Benelux", logo: "/partners/prt2.png" },
  { name: "Kingdom of the Netherlands", logo: "/partners/prt3.png" },
  { name: "EUROUZ", logo: "/partners/prt4.png" },
  { name: "BLCCA", logo: "/partners/prt5.png" },
  { name: "Chamber of Commerce Luxembourg", logo: "/partners/prt6.png" },
  { name: "Embassy of Belgium", logo: "/partners/prt1.png" },
  { name: "Embassy of Uzbekistan in Benelux", logo: "/partners/prt2.png" },
  { name: "Kingdom of the Netherlands", logo: "/partners/prt3.png" },
  { name: "EUROUZ", logo: "/partners/prt4.png" },
  { name: "BLCCA", logo: "/partners/prt5.png" },
  { name: "Chamber of Commerce Luxembourg", logo: "/partners/prt6.png" },
  { name: "Embassy of Belgium", logo: "/partners/prt1.png" },
  { name: "Embassy of Uzbekistan in Benelux", logo: "/partners/prt2.png" },
  { name: "Kingdom of the Netherlands", logo: "/partners/prt3.png" },
  { name: "EUROUZ", logo: "/partners/prt4.png" },
  { name: "BLCCA", logo: "/partners/prt5.png" },
  { name: "Chamber of Commerce Luxembourg", logo: "/partners/prt6.png" }
]

export default function Partners() {

  const t = useTranslations("partners-partners")

  return (

    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <div className="mb-14">

          <h2 className="text-3xl md:text-4xl font-bold">
            {t("title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl">
            {t("description")}
          </p>

        </div>


        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14 items-center">

          {partners.map((partner, index) => (

            <div
              key={index}
              className="flex items-center justify-center"
            >

              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={80}
                className="object-contain h-14 w-auto"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}
