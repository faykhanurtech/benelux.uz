"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

type Fact = {
  label: string
  value: string
}

type Section = {
  heading: string
  paragraphs: string[]
  list?: string[]
}

type CountryData = {
  intro: string
  title: string
  facts?: Fact[]
  sections: Section[]
}

const TAB_KEYS = ["uzbekistan", "belgium", "netherlands", "luxembourg", "benelux", "central_asia"]

export default function CountryProfile() {
  const t = useTranslations("country-profile")
  const [activeTab, setActiveTab] = useState("uzbekistan")

  const country = t.raw(activeTab) as CountryData
  const sections = country.sections as Section[]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TABS */}
        <div className="flex gap-8 mb-14 flex-wrap border-b border-gray-200">
          {TAB_KEYS.map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-lg md:text-xl font-bold pb-4 transition-colors whitespace-nowrap ${
                activeTab === key
                  ? "text-[#022038] border-b-4 border-[#022038] -mb-px"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t(`tabs.${key}`)}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {sections.length === 0 ? (
          <p className="text-gray-500 text-lg">{t("comingSoon")}</p>
        ) : (
          <div className="max-w-3xl">

            {country.intro && (
              <p className="text-gray-500 italic mb-6">{country.intro}</p>
            )}

            {country.title && (
              <h2 className="text-2xl md:text-3xl font-bold text-[#022038] mb-10">
                {country.title}
              </h2>
            )}

            {/* FACTS TABLE */}
            {country.facts && country.facts.length > 0 && (
              <div className="mb-10 border border-gray-200 divide-y divide-gray-200">
                {(country.facts as Fact[]).map((fact, i) => (
                  <div key={i} className="flex py-2.5 px-4 gap-4">
                    <span className="font-semibold text-sm text-gray-800 w-52 shrink-0">{fact.label}</span>
                    <span className="text-sm text-gray-600">{fact.value}</span>
                  </div>
                ))}
              </div>
            )}

            {sections.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    {section.heading}
                  </h3>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
                {section.list && section.list.length > 0 && (
                  <ul className="mt-2 space-y-3">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3 text-gray-700 leading-relaxed text-sm">
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#022038]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  )
}
