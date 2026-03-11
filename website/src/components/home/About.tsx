"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function About() {

  const t = useTranslations("about")
  const locale = useLocale()

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* TEXT */}

          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("title")}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t("text1")}
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t("text2")}
            </p>

            <Link
              href={`/${locale}/about`}
              className="inline-block bg-[#23256E] text-white px-8 py-3 font-medium hover:opacity-90 transition"
            >
              {t("button")}
            </Link>

          </div>


          {/* IMAGE */}

          <div className="relative h-[420px]">

            <Image
              src="/about/about.jpg"
              alt="Benelux Chamber"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>

  )

}