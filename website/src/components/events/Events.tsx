"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function Events() {

  const t = useTranslations("events-events")
  const [activeTab, setActiveTab] = useState("upcoming")

  const events = [
    {
      image: "/events/event1.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description: "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    },
    {
      image: "/events/event2.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description: "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    },
    {
      image: "/events/event3.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description: "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    },
    {
      image: "/events/event1.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description: "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    },
    {
      image: "/events/event2.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description: "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    },
    {
      image: "/events/event3.jpg",
      date: "27.03.2026",
      location: "Ташкент, Узбекистан",
      title: "Benelux Business Networking Evening",
      description: "Benelux Business Networking EveningBenelux Business Networking EveningBenelux Business Networking"
    }
  ]

  return (

    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TABS */}

        <div className="flex gap-10 mb-12">

          <button
            onClick={() => setActiveTab("upcoming")}
            className={`text-3xl md:text-4xl font-bold pb-3 ${
              activeTab === "upcoming"
                ? "border-b-4 border-[#022038]"
                : "text-gray-300"
            }`}
          >
            {t("upcoming")}
          </button>

          <button
            onClick={() => setActiveTab("latest")}
            className={`text-3xl md:text-4xl font-bold pb-3 ${
              activeTab === "latest"
                ? "border-b-4 border-[#022038]"
                : "text-gray-300"
            }`}
          >
            {t("latest")}
          </button>

        </div>



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


        {/* LOAD MORE */}

        <div className="flex justify-center mt-14">

          <button className="bg-[#022038] text-white px-8 py-3 font-medium hover:opacity-90 transition">
            {t("more")}
          </button>

        </div>

      </div>

    </section>

  )

}
