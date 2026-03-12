"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Overview() {

  const t = useTranslations("overview")

  return (

    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl font-bold mb-6">
            {t("title")}
          </h2>

          <p className="text-gray-600 mb-4">
            {t("text1")}
          </p>

          <p className="text-gray-600">
            {t("text2")}
          </p>

        </div>

        <div className="relative h-[420px]">

          <Image
            src="/about/about.jpg"
            alt="Benelux Chamber"
            fill
            className="object-cover"
          />

        </div>

      </div>

    </section>

  )
}