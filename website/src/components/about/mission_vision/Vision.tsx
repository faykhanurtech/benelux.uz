"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function Vision() {

  const t = useTranslations("about-vision")
  const locale = useLocale()

  return (

    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12">

          {/* TITLE */}

          <div className="lg:sticky lg:top-28 h-fit">

            <h2 className="text-2xl md:text-3xl font-bold">
              {t("title")}
            </h2>

          </div>


          {/* CONTENT */}

          <div>

            <p className="text-gray-700 leading-relaxed mb-4">
              {t("text1")}
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              {t("text2")}
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              {t("text3")}
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              {t("text4")}
            </p>

            <div className="mb-4">
              <Link
                href={`/${locale}/about/word/chairman`}
                className="text-gray-700 hover:text-[#022038] transition-colors underline underline-offset-4 decoration-gray-400 hover:decoration-[#022038]"
              >
                {t("chairmanIntro")} <span className="font-bold">{t("chairmanName")}</span>
              </Link>
            </div>

            <div>
              <Link
                href={`/${locale}/about/word/director`}
                className="text-gray-700 hover:text-[#022038] transition-colors underline underline-offset-4 decoration-gray-400 hover:decoration-[#022038]"
              >
                {t("directorIntro")} <span className="font-bold">{t("directorName")}</span>
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}
