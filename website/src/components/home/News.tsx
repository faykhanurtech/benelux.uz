"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function News() {

  const t = useTranslations("news")
  const locale = useLocale()

  const news = [
    {
      image: "/news/news1.jpg",
      date: "12 March 2026",
      title: "Benelux companies explore investment opportunities in Uzbekistan"
    },
    {
      image: "/news/news2.jpg",
      date: "3 March 2026",
      title: "Business delegation froфm the Netherlands visits Tashkent"
    },
    {
      image: "/news/news3.jpg",
      date: "18 February 2026",
      title: "New partnerships between Benelux and Uzbek companies"
    }
  ]

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {t("title")}
        </h2>


        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {news.map((item, index) => (

            <div key={index} className="group cursor-pointer">

              {/* IMAGE */}

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>


              {/* DATE */}

              <p className="text-sm text-gray-500 mt-4">
                {item.date}
              </p>


              {/* TITLE */}

              <h3 className="mt-2 text-xl font-semibold leading-snug group-hover:text-[#23256E] transition">

                {item.title}

              </h3>

            </div>

          ))}

        </div>


        {/* BUTTON */}

        <div className="flex justify-center mt-14">

          <Link
            href={`/${locale}/news`}
            className="bg-[#23256E] text-white px-8 py-3 font-medium hover:opacity-90 transition"
          >
            {t("all")}
          </Link>

        </div>

      </div>

    </section>

  )

}