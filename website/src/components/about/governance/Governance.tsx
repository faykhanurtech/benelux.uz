"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

type Person = {
  name: string
  roles: string[]
}

const photos: Record<string, string[]> = {
  board: [
    "/governance/denis-van-den-weghe.jpg",
    "/governance/oybek-shaykhov.jpg",
    "/governance/asal-shodieva.jpg",
  ],
  observers: [
    "/governance/nico-schermers.jpg",
    "/governance/erik-de-maeyer.jpg",
    "/governance/gayratfazilov.jpg",
    "/governance/thomas-reisen.jpg",
  ],
  management: [
    "/governance/bekhzod-botirjonov.jpg",
  ],
}

const sections = ["board", "observers", "management"] as const

export default function Governance() {
  const t = useTranslations("governance")

  return (
    <>
      {sections.map((section, index) => {
        const items = t.raw(`${section}.items`) as Person[]

        return (
          <section
            key={section}
            className={index === 0 ? "py-20" : "pb-20"}
          >
            <div className="max-w-7xl mx-auto px-6">

              <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12">

                {/* LEFT — sticky title */}
                <div className="lg:sticky lg:top-28 h-fit">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {t(`${section}.sidebarTitle`)}
                  </h2>
                </div>

                {/* RIGHT — list of people */}
                <div className="divide-y divide-gray-200">

                  {items.map((person, i) => (
                    <div key={i} className="flex items-start gap-6 py-8 first:pt-0">

                      {/* PHOTO */}
                      <div className="w-24 shrink-0">
                        <Image
                          src={photos[section][i]}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="object-cover w-24 h-24 rounded"
                        />
                      </div>

                      {/* INFO */}
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-base uppercase leading-snug">
                          {person.name}
                        </p>
                        {person.roles.map((role, j) => (
                          <p key={j} className="text-sm text-gray-600 leading-snug">
                            {role}
                          </p>
                        ))}
                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          </section>
        )
      })}
    </>
  )
}
