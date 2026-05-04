"use client"

import { useTranslations } from "next-intl"

const tierStyles = [
  {
    card: "bg-gray-100 border border-gray-300",
    tier: "text-[#022038]",
    subtitle: "text-[#2980b9]",
    fee: "text-[#022038]",
  },
  {
    card: "bg-amber-50 border border-amber-300",
    tier: "text-[#022038]",
    subtitle: "text-[#2980b9]",
    fee: "text-[#022038]",
  },
  {
    card: "bg-[#022038] border border-[#022038]",
    tier: "text-white",
    subtitle: "text-blue-300",
    fee: "text-white",
  },
]

export default function Partnership() {
  const t = useTranslations("partnership")

  const cards = t.raw("cards") as {
    tier: string
    subtitle: string
    features: string[]
    feeLabel: string
    fee: string
  }[]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const s = tierStyles[i]
            return (
              <div key={i} className={`rounded-sm p-8 flex flex-col ${s.card}`}>

                <p className={`font-extrabold text-lg text-center mb-6 tracking-wide ${s.tier}`}>
                  {card.tier}
                </p>

                <p className={`font-semibold text-sm mb-5 leading-snug ${s.subtitle}`}>
                  {card.subtitle}
                </p>

                <ul className="space-y-2 mb-10 flex-1">
                  {card.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${i === 2 ? "text-gray-200" : "text-gray-700"}`}>
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${i === 2 ? "bg-gray-400" : "bg-gray-400"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className={`text-sm mb-1 ${i === 2 ? "text-gray-300" : "text-gray-600"}`}>
                    {card.feeLabel}
                  </p>
                  <p className={`font-bold text-lg ${s.fee}`}>
                    {card.fee}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
