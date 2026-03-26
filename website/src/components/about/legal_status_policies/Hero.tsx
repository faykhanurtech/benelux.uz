"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Hero() {

  const t = useTranslations("partners-hero")

  return (

    <section className="relative w-full h-[300px] md:h-[300px] overflow-hidden">

      {/* BACKGROUND IMAGE */}

      <Image
        src="/about/hero.jpg"
        alt="Partners"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/40"></div>


      {/* CONTENT */}

      <div className="absolute bottom-10 left-0 w-full">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-xl">

            {t("title")}

          </h1>

        </div>

      </div>

    </section>

  )

}
