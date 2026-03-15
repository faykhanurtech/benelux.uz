"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

export default function WhoWeAre() {

  const t = useTranslations("about-who")

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

            <p className="text-gray-700 leading-relaxed mb-6">
              {t("text1")}
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              {t("text2")}
            </p>


            <Image
              src="/about/about1.jpg"
              alt="Benelux meeting"
              width={900}
              height={500}
              className="w-full h-auto"
            />

          </div>

        </div>

      </div>

    </section>

  )
}
