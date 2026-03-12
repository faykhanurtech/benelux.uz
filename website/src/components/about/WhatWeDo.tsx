"use client"

import { useTranslations } from "next-intl"

export default function WhatWeDo() {

  const t = useTranslations("what_we_do")

  return (

    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {t("networking_title")}
            </h3>
            <p className="text-gray-600">
              {t("networking_text")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {t("investment_title")}
            </h3>
            <p className="text-gray-600">
              {t("investment_text")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {t("support_title")}
            </h3>
            <p className="text-gray-600">
              {t("support_text")}
            </p>
          </div>

        </div>

      </div>

    </section>

  )
}