"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function Hero() {

  const t = useTranslations("home-hero")
  const locale = useLocale()

  return (

    <section className="w-full">

        <div className="relative w-full h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">

          {/* VIDEO */}

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero/hero.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-black/40"></div>


          {/* CONTENT */}

          <div className="absolute inset-0 flex items-center">

            <div className="max-w-7xl mx-auto w-full px-6">

              <div className="max-w-3xl">

              <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">

                {t("title")}

              </h1>

              <p className="text-white/90 mt-6 text-sm md:text-base lg:text-lg leading-relaxed">

                {t("subtitle")}

              </p>

              <Link
                href={`/${locale}/about`}
                className="inline-block mt-8 border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition"
              >
                {t("button")}
              </Link>

            </div>
          
          </div>

          </div>

        </div>

    </section>

  )
}