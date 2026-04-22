"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

type Item = {
  name: string
  website: string
  location: string
}

const logos: Record<string, Record<string, string>> = {
  embassies: {
    "0": "/institutional/embassy-belgium.png",
    "1": "/institutional/embassy-netherlands.png",
    "2": "/institutional/embassy-luxembourg.svg",
    "3": "/institutional/embassy-uzbekistan.png",
  },
  partners: {
    "0": "/institutional/benelux-kz.png",
    "1": "/institutional/eurouz.png",
    "2": "/institutional/belgian-chambers.png",
    "3": "/institutional/cc-luxembourg.png",
    "4": "/institutional/kvk.png",
    "5": "/institutional/flanders.png",
    "6": "/institutional/wallonia.svg",
  },
}

const sections = ["embassies", "partners"] as const

export default function Partners() {
  const t = useTranslations("institutional")

  return (
    <>
      {sections.map((section, index) => {
        const items = t.raw(`${section}.items`) as Item[]

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

                {/* RIGHT — list of items */}
                <div className="divide-y divide-gray-200">

                  {items.map((item, i) => (
                    <div key={i} className="flex items-start gap-6 py-6 first:pt-0">

                      {/* LOGO */}
                      <div className="w-28 shrink-0 flex items-center justify-center">
                        <Image
                          src={logos[section][String(i)]}
                          alt={item.name}
                          width={110}
                          height={60}
                          className="object-contain h-14 w-auto"
                        />
                      </div>

                      {/* INFO */}
                      <div className="flex flex-col gap-1.5">

                        {/* NAME */}
                        <p className="font-semibold text-sm uppercase leading-snug">
                          {item.name}
                        </p>

                        {/* WEBSITE */}
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 0c2.485 0 4-4.03 4-9s-1.515-9-4-9m0 18c-2.485 0-4-4.03-4-9s1.515-9 4-9m-8.25 9h16.5" />
                          </svg>
                          {item.website.replace(/^https?:\/\//, "")}
                        </a>

                        {/* LOCATION */}
                        <p className="flex items-center gap-2 text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                          </svg>
                          {item.location}
                        </p>

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
