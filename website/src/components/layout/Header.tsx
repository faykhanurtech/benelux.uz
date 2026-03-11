"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export default function Header() {

  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [membersOpen, setMembersOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const t = useTranslations("nav")
  const locale = useLocale()

  const languages = ["en", "ru", "uz"].filter(l => l !== locale)

  return (
    <header className="w-full bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between py-6">

          {/* LOGO */}

          <Link href={`/${locale}`} className="flex items-center">
            <Image src="/logo.svg" alt="Benelux Chamber" width={160} height={40} priority />
          </Link>


          {/* DESKTOP RIGHT SIDE */}

          <div className="hidden lg:flex items-center gap-8">

          <nav className="hidden lg:flex items-center gap-10 text-gray-800 font-medium">

            <Link href={`/${locale}`} className="hover:text-blue-600">
              {t("home")}
            </Link>


            {/* ABOUT */}

            <div className="relative">

              <button
                onClick={() => { setAboutOpen(!aboutOpen); setMembersOpen(false); setLangOpen(false) }}
                className="flex items-center gap-1 hover:text-blue-600"
              >

                {t("about")}

                <ChevronDown size={16} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />

              </button>

              {aboutOpen && (

                <div className="absolute top-full left-0 mt-4 bg-white border border-gray-300 rounded-lg w-56 p-3">

                  <Link href={`/${locale}/about`} className="block px-3 py-2 hover:bg-gray-50 rounded">
                    {t("about_chamber")}
                  </Link>

                  <Link href={`/${locale}/board`} className="block px-3 py-2 hover:bg-gray-50 rounded">
                    {t("board")}
                  </Link>

                </div>

              )}

            </div>


            {/* MEMBERS */}

            <div className="relative">

              <button
                onClick={() => { setMembersOpen(!membersOpen); setAboutOpen(false); setLangOpen(false) }}
                className="flex items-center gap-1 hover:text-blue-600"
              >

                {t("members")}

                <ChevronDown size={16} className={`transition-transform ${membersOpen ? "rotate-180" : ""}`} />

              </button>

              {membersOpen && (

                <div className="absolute top-full left-0 mt-4 bg-white border border-gray-300 rounded-lg w-56 p-3">

                  <Link href={`/${locale}/members`} className="block px-3 py-2 hover:bg-gray-50 rounded">
                    {t("members_list")}
                  </Link>

                  <Link href={`/${locale}/join`} className="block px-3 py-2 hover:bg-gray-50 rounded">
                    {t("join")}
                  </Link>

                </div>

              )}

            </div>


            <Link href={`/${locale}/events`} className="hover:text-blue-600">
              {t("events")}
            </Link>

            <Link href={`/${locale}/contact`} className="hover:text-blue-600">
              {t("contact")}
            </Link>


            {/* LANGUAGE */}

            <div className="relative">

              <button
                onClick={() => { setLangOpen(!langOpen); setAboutOpen(false); setMembersOpen(false) }}
                className="flex items-center gap-2"
              >

                <Image src={`/flags/${locale}.svg`} alt={locale} width={22} height={14} />

                <span className="text-sm font-medium">{locale.toUpperCase()}</span>

                <ChevronDown size={16} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />

              </button>


              {langOpen && (

                <div className="absolute top-full right-0 mt-4 bg-white border border-gray-300 rounded-lg w-32 p-2">

                  {languages.map(lang => (
                    <Link
                      key={lang}
                      href={`/${lang}`}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded w-full"
                    >
                      <Image src={`/flags/${lang}.svg`} alt={lang} width={20} height={14}/>
                      {lang.toUpperCase()}
                    </Link>
                  ))}

                </div>

              )}

            </div>

          </nav>

          <Link
            href={`/${locale}/join`}
            className="ml-6 bg-[#23256E] text-white px-6 py-3 font-medium hover:opacity-90 transition"
          >
            {t("join")}
          </Link>

          </div>


          {/* MOBILE BUTTON */}

          <button onClick={() => setMobileOpen(true)} className="lg:hidden">

            {mobileOpen ? (

              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>

            ) : (

              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>

            )}

          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      {mobileOpen && (

        <div className="fixed inset-0 bg-white z-40 lg:hidden">

          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">

            <Link href={`/${locale}`} onClick={() => setMobileOpen(false)}>
              <Image src="/logo.svg" alt="Benelux" width={160} height={40}/>
            </Link>

            <button onClick={() => setMobileOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

          </div>


          <div className="px-6 pt-8">

            <nav className="flex flex-col gap-6 text-xl">

              <Link href={`/${locale}`} onClick={() => setMobileOpen(false)}>
                {t("home")}
              </Link>

              <Link href={`/${locale}/about`}>
                {t("about")}
              </Link>

              <Link href={`/${locale}/members`} onClick={() => setMobileOpen(false)}>
                {t("members")}
              </Link>

              <Link href={`/${locale}/events`} onClick={() => setMobileOpen(false)}>
                {t("events")}
              </Link>

              <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)}>
                {t("contact")}
              </Link>

            </nav>

            {/* MOBILE LANGUAGE */}

            <div className="mt-8 relative">

              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-3 text-lg"
              >

                <Image
                  src={`/flags/${locale}.svg`}
                  alt={locale}
                  width={22}
                  height={14}
                />

                {locale.toUpperCase()}

                <ChevronDown
                  size={18}
                  className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
                />

              </button>


              {langOpen && (

                <div className="mt-4 flex flex-col gap-4">

                  {languages.map(lang => (

                    <Link
                      key={lang}
                      href={`/${lang}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-lg"
                    >

                      <Image
                        src={`/flags/${lang}.svg`}
                        alt={lang}
                        width={22}
                        height={14}
                      />

                      {lang.toUpperCase()}

                    </Link>

                  ))}

                </div>

              )}

            </div>


            <Link
              href={`/${locale}/join`}
              onClick={() => setMobileOpen(false)}
              className="mt-8 block w-full bg-[#23256E] text-white text-center py-3 font-medium"
            >
              {t("join")}
            </Link>

          </div>

        </div>

      )}

    </header>
  )
}