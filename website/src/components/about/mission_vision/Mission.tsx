"use client"

import { useTranslations } from "next-intl"

export default function Mission() {

  const t = useTranslations("about-mission")

  return (

    <section className="pb-20">

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

            <p className="text-gray-700 leading-relaxed mb-10">
              {t("text3")}
            </p>

            {/* BE CONNECTED */}

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-3">{t("connectedTitle")}</h3>
              <p className="text-gray-700 leading-relaxed mb-3">{t("connectedText1")}</p>
              <p className="text-gray-700 leading-relaxed mb-3">{t("connectedText2")}</p>
              <p className="text-gray-700 leading-relaxed">{t("connectedText3")}</p>
            </div>

            {/* BE INFORMED */}

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-3">{t("informedTitle")}</h3>
              <p className="text-gray-700 leading-relaxed mb-3">{t("informedText1")}</p>
              <p className="text-gray-700 leading-relaxed mb-3">{t("informedText2")}</p>
              <p className="text-gray-700 leading-relaxed">{t("informedText3")}</p>
            </div>

            {/* BE INSPIRED */}

            <div>
              <h3 className="font-bold text-lg mb-3">{t("inspiredTitle")}</h3>
              <p className="text-gray-700 leading-relaxed mb-3">{t("inspiredText1")}</p>
              <p className="text-gray-700 leading-relaxed mb-3">{t("inspiredText2")}</p>
              <p className="text-gray-700 leading-relaxed">{t("inspiredText3")}</p>
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}
