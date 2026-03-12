"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

const members = [
  { name: "Company 1", logo: "/members/member1.svg" },
  { name: "Company 2", logo: "/members/member2.svg" },
  { name: "Company 3", logo: "/members/member3.svg" },
  { name: "Company 4", logo: "/members/member4.svg" },
  { name: "Company 5", logo: "/members/member5.svg" },
  { name: "Company 6", logo: "/members/member6.svg" },
  { name: "Company 7", logo: "/members/member7.svg" },
  { name: "Company 8", logo: "/members/member8.svg" }
]

export default function Members() {

  const t = useTranslations("members")

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          {t("title")}
        </h2>

        {/* LOGO GRID */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">

          {members.map((member, index) => (

            <div
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
            >

              <Image
                src={member.logo}
                alt={member.name}
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