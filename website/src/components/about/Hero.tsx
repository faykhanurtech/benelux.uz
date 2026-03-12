"use client"

import { useTranslations } from "next-intl"

export default function Hero() {

  const t = useTranslations("hero")

  return (

    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t("title")}
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl">
          {t("subtitle")}
        </p>

      </div>

    </section>

  )
}