"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function Hero() {

  const t = useTranslations("hero")
  const locale = useLocale()

  return (

    <section className="w-full">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative w-full h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden rounded-lg">

          {/* IMAGE */}

          <Image
            src="/hero/hero.jpeg"
            alt="Tashkent"
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-black/40"></div>


          {/* CONTENT */}

          <div className="absolute inset-0 flex items-center">

            <div className="max-w-3xl px-8 md:px-12">

              <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">

                {t("title")}

              </h1>

              <p className="text-white/90 mt-6 text-sm md:text-base lg:text-lg leading-relaxed">

                {t("subtitle")}

              </p>

              <Link
                href={`/${locale}/about`}
                className="inline-block mt-8 bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
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