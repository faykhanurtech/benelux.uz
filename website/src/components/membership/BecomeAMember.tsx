"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

type Tab = "overview" | "corporate" | "nonCorporate"

export default function BecomeAMember() {
  const t = useTranslations("membership")
  const [activeTab, setActiveTab] = useState<Tab>("overview")

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: t("tabs.overview") },
    { key: "corporate", label: t("tabs.corporate") },
    { key: "nonCorporate", label: t("tabs.nonCorporate") },
  ]

  const benefits = t.raw("overview.benefits") as { title: string; desc: string }[]
  const tableRows = t.raw("overview.tableRows") as {
    no: string
    benefit: string
    corporate: string
    nonCorporate: string
    premium: string
  }[]
  const corporateCards = t.raw("corporate.cards") as {
    region: string
    category: string
    subtitle: string
    features: string[]
    feeLabel: string
    fee: string
  }[]
  const nonCorporateCards = t.raw("nonCorporate.cards") as {
    title: string
    subtitle?: string
    features: string[]
    feeIntl: string
    feeIntlAmount: string
    feeLocal: string
    feeLocalAmount: string
  }[]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TABS */}
        <div className="flex gap-8 mb-14 flex-wrap border-b border-gray-200">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-lg md:text-xl font-bold pb-4 transition-colors whitespace-nowrap ${
                activeTab === key
                  ? "text-[#022038] border-b-4 border-[#022038] -mb-px"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <p className="text-gray-700 leading-relaxed mb-10 max-w-4xl">
              {t("overview.intro")}
            </p>

            <p className="font-bold text-[#022038] text-lg mb-6">
              {t("overview.benefitsTitle")}
            </p>

            <div className="mb-14 space-y-4">
              {benefits.map((b, i) => (
                <div key={i}>
                  <span className="font-bold text-gray-900">{b.title}</span>
                  <br />
                  <span className="text-gray-700">{b.desc}</span>
                </div>
              ))}
            </div>

            {/* BENEFITS TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#022038] text-white">
                    <th className="px-4 py-3 text-left font-semibold w-10">
                      {t("overview.tableColumns.0")}
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      {t("overview.tableColumns.1")}
                    </th>
                    <th className="px-4 py-3 text-center font-semibold">
                      {t("overview.tableColumns.2")}
                    </th>
                    <th className="px-4 py-3 text-center font-semibold">
                      {t("overview.tableColumns.3")}
                    </th>
                    <th className="px-4 py-3 text-center font-semibold bg-[#1a5276]">
                      {t("overview.tableColumns.4")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-gray-500 text-center align-top">
                        {row.no}
                      </td>
                      <td className="px-4 py-3 text-gray-700 align-top">
                        {row.benefit}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 align-top">
                        {row.corporate}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 align-top">
                        {row.nonCorporate}
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-[#022038] bg-[#eaf0f6] align-top">
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CORPORATE TAB */}
        {activeTab === "corporate" && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              {t("corporate.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              {corporateCards.map((card, i) => (
                <div
                  key={i}
                  className="border border-[#022038] rounded-sm p-6 flex flex-col"
                >
                  <p className="font-bold text-gray-900 text-base mb-3 leading-snug">
                    {card.region}
                  </p>

                  <p className="text-[#2980b9] text-sm font-semibold mb-1">
                    {card.category}
                  </p>
                  <p className="text-gray-500 text-sm italic mb-5 leading-snug">
                    {card.subtitle}
                  </p>

                  <ul className="space-y-2 mb-8 flex-1">
                    {card.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <p className="text-sm text-gray-600">{card.feeLabel}</p>
                    <p className="text-[#022038] font-bold text-lg">{card.fee}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 italic">
              {t("corporate.note")}
            </p>
          </div>
        )}

        {/* NON-CORPORATE TAB */}
        {activeTab === "nonCorporate" && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              {t("nonCorporate.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {nonCorporateCards.map((card, i) => (
                <div
                  key={i}
                  className="border border-[#022038] rounded-sm p-8 flex flex-col"
                >
                  <p className="font-bold text-gray-900 text-base mb-4 leading-snug">
                    {card.title}
                  </p>

                  {card.subtitle && (
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {card.subtitle}
                    </p>
                  )}

                  <ul className="space-y-2 mb-10 flex-1">
                    {card.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div>
                      <p className="text-[#2980b9] text-sm font-semibold mb-1">
                        {card.feeIntl}
                      </p>
                      <p className="text-sm text-gray-500">Annual fee:</p>
                      <p className="text-[#022038] font-bold">{card.feeIntlAmount}</p>
                    </div>
                    <div>
                      <p className="text-[#2980b9] text-sm font-semibold mb-1">
                        {card.feeLocal}
                      </p>
                      <p className="text-sm text-gray-500">Annual fee:</p>
                      <p className="text-[#022038] font-bold">{card.feeLocalAmount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 italic">
              {t("nonCorporate.note")}
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
