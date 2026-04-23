"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { useState } from "react"

const ambassadorIds = ["uzbekistan", "belgium", "netherlands", "luxembourg"]

const ambassadorImages: Record<string, string> = {
  uzbekistan: "/ambassadors/uzbekistan.jpg",
  belgium: "/ambassadors/btlgimg.jpg",
  netherlands: "/ambassadors/netherlands.jpg",
  luxembourg: "/ambassadors/luxembourg.jpg",
}

export default function Ambassadors() {
  const t = useTranslations("ambassadors")
  const [activeId, setActiveId] = useState("uzbekistan")

  const texts = t.raw(`${activeId}.texts`) as string[]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TABS */}
        <div className="flex gap-8 mb-14 flex-wrap">
          {ambassadorIds.map((id) => (
            <button
              key={id}
              onClick={() => setActiveId(id)}
              className={`text-2xl md:text-3xl font-bold pb-3 transition-colors ${
                activeId === id
                  ? "text-[#022038] border-b-4 border-[#022038]"
                  : "text-gray-300"
              }`}
            >
              {t(`${id}.sidebarTitle`)}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto">

          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">
            {t(`${activeId}.heading`)}
          </p>

          <Image
            src={ambassadorImages[activeId]}
            alt={t(`${activeId}.name`)}
            width={900}
            height={500}
            className="w-full h-auto mb-6"
          />

          <div className="mb-6">
            <p className="font-bold text-lg">{t(`${activeId}.name`)}</p>
            <p className="font-semibold text-gray-600">{t(`${activeId}.position`)}</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            {t(`${activeId}.greeting`)}
          </p>

          {texts.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

        </div>

      </div>
    </section>
  )
}
