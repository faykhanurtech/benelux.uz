"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export default function Events() {

  const t = useTranslations("events")
  const locale = useLocale()

  const events = [
    {
      image: "/events/event1.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description:
        "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    },
    {
      image: "/events/event2.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description:
        "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    },
    {
      image: "/events/event3.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description:
        "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    }
  ]

  return (

    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {t("title")}
        </h2>


        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {events.map((event, index) => (

            <div key={index} className="group">

              {/* IMAGE */}

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>


              {/* META */}

              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">

                <div className="flex items-center gap-2">

                  <Calendar size={16} />

                  {event.date}

                </div>

                <div>
                  {event.location}
                </div>

              </div>


              {/* TITLE */}

              <h3 className="mt-3 text-xl font-semibold leading-snug">

                {event.title}

              </h3>


              {/* DESCRIPTION */}

              <p className="mt-3 text-gray-600 line-clamp-3">

                {event.description}

              </p>

            </div>

          ))}

        </div>


        {/* BUTTON */}

        <div className="flex justify-center mt-14">

          <Link
            href={`/${locale}/events`}
            className="bg-[#022038] text-white px-8 py-3 font-medium hover:opacity-90 transition"
          >
            {t("all")}
          </Link>

        </div>

      </div>

    </section>

  )

}