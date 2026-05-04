"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

type PressReleaseItem = {
  label: string
  organization: string
  title: string
  date: string
  image: string
  paragraphs: string[]
}

export default function PressReleases() {
  const t = useTranslations("press-releases")
  const items = t.raw("items") as PressReleaseItem[]

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-24">
        {items.map((item, i) => (
          <article
            key={i}
            className="border-t border-gray-200 pt-16 first:border-t-0 first:pt-0"
          >
            {/* Label + Organization — centred */}
            <div className="text-left mb-8">
              <span className="text-xs font-bold tracking-widest text-[#022038] uppercase">
                {item.label}
              </span>
              <p className="text-sm text-gray-500 mt-1">{item.organization}</p>
            </div>

            {/* Image — reduced height */}
            <div className="relative w-full aspect-[16/7] rounded-sm overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#022038] mt-8 leading-snug">
              {item.title}
            </h2>

            {/* Date */}
            <p className="text-gray-500 italic mt-2 text-sm">{item.date}</p>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4">
              {item.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-700 leading-relaxed text-sm">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
