"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const ambassadors = [
  {
    id: "uzbekistan",
    title: "Ambassador of Uzbekistan",
    name: "Name Surname",
    image: "/defoult.jpg",
    text: "The BENELUX Chamber of Commerce in Uzbekistan serves as a bridge between companies from the BENELUX region and Uzbekistan. We promote business cooperation, investment opportunities and knowledge exchange to strengthen long-term economic partnerships"
  },
  {
    id: "belgium",
    title: "Ambassador of Belgium",
    name: "Name Surname",
    image: "/defoult.jpg",
    text: "The BENELUX Chamber of Commerce in Uzbekistan serves as a bridge between companies from the BENELUX region and Uzbekistan. We promote business cooperation, investment opportunities and knowledge exchange to strengthen long-term economic partnerships"
  },
  {
    id: "netherlands",
    title: "Ambassador of Netherlands",
    name: "Name Surname",
    image: "/defoult.jpg",
    text: "The BENELUX Chamber of Commerce in Uzbekistan serves as a bridge between companies from the BENELUX region and Uzbekistan. We promote business cooperation, investment opportunities and knowledge exchange to strengthen long-term economic partnerships"
  },
  {
    id: "luxembourg",
    title: "Ambassador of Luxembourg",
    name: "Name Surname",
    image: "/defoult.jpg",
    text: "The BENELUX Chamber of Commerce in Uzbekistan serves as a bridge between companies from the BENELUX region and Uzbekistan. We promote business cooperation, investment opportunities and knowledge exchange to strengthen long-term economic partnerships"
  }
]

export default function Ambassadors() {
  const [active, setActive] = useState("uzbekistan")

  useEffect(() => {
    const handleScroll = () => {
      ambassadors.forEach((item) => {
        const el = document.getElementById(item.id)
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(item.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12">

          {/* LEFT SIDEBAR (как About) */}
          <div className="lg:sticky lg:top-28 h-fit space-y-6">

            {ambassadors.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-2xl transition ${
                  active === item.id
                    ? "text-black font-bold"
                    : "text-gray-400"
                }`}
              >
                {item.title}
              </a>
            ))}

          </div>


          {/* RIGHT CONTENT */}
          <div className="space-y-24">

            {ambassadors.map((item) => (
              <div key={item.id} id={item.id} className="scroll-mt-32">

                {/* IMAGE FULL WIDTH */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={900}
                  height={500}
                  className="w-full h-auto mb-6"
                />

                <p className="font-semibold mb-4">
                  {item.name}
                </p>

                {/* TEXT */}
                <p className="text-gray-700 leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}