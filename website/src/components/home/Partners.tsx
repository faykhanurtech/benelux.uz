"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

const partners = [
  { name: "Embassy of Belgium", logo: "/partners/belgium.svg" },
  { name: "Embassy of Netherlands", logo: "/partners/netherlands.svg" },
  { name: "Embassy of Luxembourg", logo: "/partners/luxembourg.svg" },
  { name: "Benelux Business Council", logo: "/partners/bbc.svg" },
  { name: "EU Delegation Uzbekistan", logo: "/partners/eu.svg" },
  { name: "Benelux Chamber", logo: "/partners/chamber.svg" }
]

export default function Partners() {

  const t = useTranslations("partners")

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold">
            {t("title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("description")}
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">

          {partners.map((partner, index) => (

            <div
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
            >

              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain h-12 w-auto"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}