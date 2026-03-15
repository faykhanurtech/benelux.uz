"use client"

import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"

const partners = [
  { name: "Embassy of Belgium", logo: "/partners/prt1.png" },
  { name: "Embassy of Netherlands", logo: "/partners/prt2.png" },
  { name: "Embassy of Luxembourg", logo: "/partners/prt3.png" },
  { name: "Benelux Business Council", logo: "/partners/prt4.png" },
  { name: "EU Delegation Uzbekistan", logo: "/partners/prt5.png" },
  { name: "Benelux Chamber", logo: "/partners/prt6.png" }
]

export default function Partners() {

  const t = useTranslations("home-partners")
  const locale = useLocale()

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-14">

          <h2 className="text-3xl md:text-4xl font-bold">
            {t("title")}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl">
            {t("description")}
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">

          {partners.map((partner, index) => (

            <div
              key={index}
              className="flex items-center justify-center transition"
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

        {/* BUTTON */}

        <div className="flex justify-center mt-14">

          <a
            href={`/${locale}/partners`}
            className="bg-[#022038] text-white px-8 py-3 font-medium hover:opacity-90 transition"
          >
            {t("all")}
          </a>

        </div>

      </div>

    </section>

  )
}