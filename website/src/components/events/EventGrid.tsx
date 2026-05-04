"use client"

import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"

type EventItem = {
  title: string
  description: string
  date: string
  city: string
  type: string
  image: string
}

type Props = {
  namespace: string
}

export default function EventGrid({ namespace }: Props) {
  const t = useTranslations(namespace)
  const tCommon = useTranslations("events-events")
  const items = t.raw("items") as EventItem[]

  const PAGE = 6
  const [shown, setShown] = useState(PAGE)
  const visible = items.slice(0, shown)
  const hasMore = shown < items.length

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visible.map((event, index) => (
            <div key={index} className="group flex flex-col">

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#022038] text-white text-xs font-semibold px-2 py-1">
                  {event.type}
                </span>
              </div>

              {/* META */}
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{event.city}</span>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="mt-3 text-base font-semibold leading-snug">
                {event.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">
                {event.description}
              </p>

            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShown(prev => Math.min(prev + PAGE, items.length))}
              className="bg-[#022038] text-white px-8 py-3 font-medium hover:opacity-90 transition"
            >
              {tCommon("more")}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
