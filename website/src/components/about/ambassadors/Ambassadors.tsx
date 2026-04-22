"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

const ambassadorIds = ["uzbekistan", "belgium", "netherlands", "luxembourg"]

const ambassadorImages: Record<string, string> = {
  uzbekistan: "/ambassadors/uzbekistan.jpg",
  belgium: "/ambassadors/btlgimg.jpg",
  netherlands: "/ambassadors/netherlands.jpg",
  luxembourg: "/ambassadors/luxembourg.jpg",
}

export default function Ambassadors() {
  const t = useTranslations("ambassadors")

  return (
    <>
      {ambassadorIds.map((id, index) => {
        const texts = t.raw(`${id}.texts`) as string[]

        return (
          <section
            key={id}
            className={index === 0 ? "py-20" : "pb-20"}
          >
            <div className="max-w-7xl mx-auto px-6">

              <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12">

                {/* LEFT — sticky, one per section, same pattern as mission/vision */}
                <div className="lg:sticky lg:top-28 h-fit">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {t(`${id}.sidebarTitle`)}
                  </h2>
                </div>

                {/* RIGHT — content */}
                <div>

                  <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">
                    {t(`${id}.heading`)}
                  </p>

                  <Image
                    src={ambassadorImages[id]}
                    alt={t(`${id}.name`)}
                    width={900}
                    height={500}
                    className="w-full h-auto mb-6"
                  />

                  <div className="mb-6">
                    <p className="font-bold text-lg">{t(`${id}.name`)}</p>
                    <p className="font-semibold text-gray-600">{t(`${id}.position`)}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t(`${id}.greeting`)}
                  </p>

                  {texts.map((paragraph, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
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
