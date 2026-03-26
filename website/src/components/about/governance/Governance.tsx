"use client"

import { useEffect, useState } from "react"

const governance = [
  {
    id: "board",
    title: "BOARD OF TRUSTEES",
    text: "The Board of Trustees provides strategic oversight and ensures that the Chamber operates in alignment with its mission and long-term objectives. It defines key priorities, supervises governance standards and supports sustainable development of the organization."
  },
  {
    id: "observers",
    title: "PERMANENT OBSERVERS",
    text: "Permanent Observers represent key partner institutions and stakeholders. They contribute to strategic dialogue, strengthen institutional cooperation and support knowledge exchange between BENELUX countries and Uzbekistan."
  },
  {
    id: "management",
    title: "EXECUTIVE MANAGEMENT",
    text: "The Executive Management is responsible for the day-to-day operations of the Chamber. It implements strategic initiatives, manages programs, and ensures effective communication with members, partners and stakeholders."
  }
]

export default function Governance() {
  const [active, setActive] = useState("board")

  useEffect(() => {
    const handleScroll = () => {
      governance.forEach((item) => {
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

          {/* LEFT SIDEBAR */}
          <div className="lg:sticky lg:top-28 h-fit space-y-6">

            {governance.map((item) => (
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

            {governance.map((item) => (
              <div key={item.id} id={item.id} className="scroll-mt-32">

                <h3 className="text-2xl font-semibold mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed max-w-3xl">
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