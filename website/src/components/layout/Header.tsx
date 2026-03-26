"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { usePathname } from "next/navigation"

export default function Header() {

  const headerRef = useRef<HTMLDivElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [membersOpen, setMembersOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const [insightsOpen, setInsightsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const closeAll = useCallback(() => {
    setAboutOpen(false)
    setMembersOpen(false)
    setEventsOpen(false)
    setInsightsOpen(false)
    setLangOpen(false)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeAll()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [closeAll])

  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  const languages = ["en", "ru", "uz"].filter(l => l !== locale)

  const switchLocale = (lang: string) => {
    const segments = pathname.split("/")

    if (segments.length > 1) {
      segments[1] = lang
    } else {
      return `/${lang}`
    }

    return segments.join("/")
  }

  return (
    <header ref={headerRef} className="w-full bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between py-6">

          {/* LOGO */}

          <Link href={`/${locale}`} className="flex items-center">
            <Image src="/logo.svg" alt="Benelux Chamber" width={160} height={40} priority />
          </Link>


          {/* DESKTOP RIGHT SIDE */}

          <div className="hidden lg:flex items-center gap-8">

          <nav className="flex items-center gap-7 text-gray-800 font-medium">

            <Link
              href={`/${locale}`}
              className={`hover:text-[#103959] pb-1 ${
                pathname === `/${locale}` ? "border-b-2 border-[#103959]" : ""
              }`}
            >
              {t("home")}
            </Link>


            {/* ABOUT */}

            <div
              className="relative"
              onMouseEnter={() => window.innerWidth >= 1024 && (closeAll(), setAboutOpen(true))}
              onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setAboutOpen(false), 100)}
            >

              <button
                onClick={() => window.innerWidth < 1024 && (closeAll(), setAboutOpen(!aboutOpen))}
                className={`flex items-center gap-1 pb-1 hover:text-[#103959] ${
                  isActive(`/${locale}/about`) ? "border-b-2 border-[#103959]" : ""
                }`}
              >

                {t("about")}

                <ChevronDown size={16} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />

              </button>

              {aboutOpen && (

                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white border border-gray-300 w-68 p-3 divide-y divide-gray-200">

                    <Link
                      href={`/${locale}/about/mission_vision`}
                      onClick={() => setAboutOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("mission_vision")}
                    </Link>

                    <Link
                      href={`/${locale}/about/ambassadors`}
                      onClick={() => setAboutOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("ambassadors")}
                    </Link>

                    <Link
                      href={`/${locale}/about/institutional_engagement`}
                      onClick={() => setAboutOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("institutional_engagement")}
                    </Link>


                    <Link
                      href={`/${locale}/about/governance`}
                      onClick={() => setAboutOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("governance")}
                    </Link>


                    <Link
                      href={`/${locale}/about/legal_status_policies`}
                      onClick={() => setAboutOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("legal_status_policies")}
                    </Link>

                  </div>
                </div>

              )}

            </div>


            {/* MEMBERS */}

            <div
              className="relative"
              onMouseEnter={() => window.innerWidth >= 1024 && (closeAll(), setMembersOpen(true))}
              onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setMembersOpen(false), 100)}
            >

              <button
                onClick={() => window.innerWidth < 1024 && (closeAll(), setMembersOpen(!membersOpen))}
                className={`flex items-center gap-1 pb-1 hover:text-[#103959] ${
                  isActive(`/${locale}/members`) ? "border-b-2 border-[#103959]" : ""
                }`}
              >

                {t("members")}

                <ChevronDown size={16} className={`transition-transform ${membersOpen ? "rotate-180" : ""}`} />

              </button>

              {membersOpen && (

                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white border border-gray-300 w-62 p-3 divide-y divide-gray-200">

                  <Link
                    href={`/${locale}/member/become_a_member`}
                    onClick={() => setMembersOpen(false)}
                    className="block px-3 py-3 hover:bg-gray-50"
                  >
                    {t("become_a_member")}
                  </Link>

                  <Link
                    href={`/${locale}/member/partnership`}
                    onClick={() => setMembersOpen(false)}
                    className="block px-3 py-3 hover:bg-gray-50"
                  >
                    {t("partnership")}
                  </Link>

                  <Link
                    href={`/${locale}/member/members_directory`}
                    onClick={() => setMembersOpen(false)}
                    className="block px-3 py-3 hover:bg-gray-50"
                  >
                    {t("members_directory")}
                  </Link>

                  </div>
                </div>

              )}

            </div>


            {/* EVENTS */}

            <div
              className="relative"
              onMouseEnter={() => window.innerWidth >= 1024 && (closeAll(), setEventsOpen(true))}
              onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setEventsOpen(false), 100)}
            >

              <button
                onClick={() => window.innerWidth < 1024 && (closeAll(), setEventsOpen(!eventsOpen))}
                className={`flex items-center gap-1 pb-1 hover:text-[#103959] ${
                  isActive(`/${locale}/events`) ? "border-b-2 border-[#103959]" : ""
                }`}
              >

                {t("events")}

                <ChevronDown size={16} className={`transition-transform ${eventsOpen ? "rotate-180" : ""}`} />

              </button>

              {eventsOpen && (

                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white border border-gray-300 w-62 p-3 divide-y divide-gray-200">

                    <Link
                      href={`/${locale}/events/upcoming_events`}
                      onClick={() => setEventsOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("upcoming_events")}
                    </Link>

                    <Link
                      href={`/${locale}/events/news`}
                      onClick={() => setEventsOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("Latest_news_past_events")}
                    </Link>
                  </div>
                </div>

              )}

            </div>

            {/* INSIGHTS */}

            <div
              className="relative"
              onMouseEnter={() => window.innerWidth >= 1024 && (closeAll(), setInsightsOpen(true))}
              onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setInsightsOpen(false), 100)}
            >

              <button
                onClick={() => window.innerWidth < 1024 && (closeAll(), setInsightsOpen(!insightsOpen))}
                className={`flex items-center gap-1 pb-1 hover:text-[#103959] ${
                  isActive(`/${locale}/insights`) ? "border-b-2 border-[#103959]" : ""
                }`}
              >

                {t("insights")}

                <ChevronDown size={16} className={`transition-transform ${insightsOpen ? "rotate-180" : ""}`} />

              </button>

              {insightsOpen && (

                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white border border-gray-300 w-62 p-3 divide-y divide-gray-200">

                    <Link
                      href={`/${locale}/insights/countries`}
                      onClick={() => setInsightsOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("countries")}
                    </Link>

                    <Link
                      href={`/${locale}/insights/publications`}
                      onClick={() => setInsightsOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("publications")}
                    </Link>

                    <Link
                      href={`/${locale}/insights/press_releases`}
                      onClick={() => setInsightsOpen(false)}
                      className="block px-3 py-3 hover:bg-gray-50"
                    >
                      {t("press_releases")}
                    </Link>
                  </div>
                </div>

              )}

            </div>

            <Link
              href={`/${locale}/contact`}
              className={`hover:text-[#103959] pb-1 ${
                isActive(`/${locale}/contact`) ? "border-b-2 border-[#103959]" : ""
              }`}
            >
              {t("contact")}
            </Link>


            {/* LANGUAGE */}

            <div
              className="relative"
              onMouseEnter={() => window.innerWidth >= 1024 && (closeAll(), setLangOpen(true))}
              onMouseLeave={() => window.innerWidth >= 1024 && setTimeout(() => setLangOpen(false), 100)}
            >

              <button
                onClick={() => window.innerWidth < 1024 && (closeAll(), setLangOpen(!langOpen))}
                className="flex items-center gap-2"
              >

                <Image src={`/flags/${locale}.svg`} alt={locale} width={22} height={14} />

                <span className="text-sm font-medium">{locale.toUpperCase()}</span>

                <ChevronDown size={16} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />

              </button>


              {langOpen && (

                <div className="absolute top-full right-0 pt-2">
                  <div className="bg-white border border-gray-300 min-w-[120px] divide-y divide-gray-200">

                    {languages.map(lang => (
                      <Link
                        key={lang}
                        href={switchLocale(lang)}
                        scroll={false}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full"
                      >
                        <Image src={`/flags/${lang}.svg`} alt={lang} width={20} height={14}/>
                        {lang.toUpperCase()}
                      </Link>
                    ))}

                  </div>
                </div>

              )}

            </div>

          </nav>

          <Link
            href={`/${locale}/join`}
            className="ml-6 bg-[#022038] text-white px-6 py-3 font-medium hover:opacity-90 transition"
          >
            {t("join")}
          </Link>

          </div>


          {/* MOBILE BUTTON */}

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden">

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


          <div className="px-6 pt-6 overflow-y-auto h-[calc(100vh-80px)]">

            <nav className="flex flex-col text-gray-800 font-medium divide-y divide-gray-200">

              {/* HOME */}

              <Link
                href={`/${locale}`}
                onClick={() => setMobileOpen(false)}
                className={`py-4 hover:text-[#103959] ${pathname === `/${locale}` ? "text-[#103959] border-b-2 border-[#103959]" : ""}`}
              >
                {t("home")}
              </Link>

              {/* ABOUT */}

              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`w-full flex items-center justify-between py-4 hover:text-[#103959] ${isActive(`/${locale}/about`) ? "text-[#103959]" : ""}`}
                >
                  {t("about")}
                  <ChevronDown size={16} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                </button>

                {aboutOpen && (
                  <div className="bg-gray-50 border border-gray-200 mb-2 divide-y divide-gray-200">
                    <Link href={`/${locale}/about/mission_vision`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("mission_vision")}
                    </Link>
                    <Link href={`/${locale}/about/ambassadors`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("ambassadors")}
                    </Link>
                    <Link href={`/${locale}/about/institutional_engagement`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("institutional_engagement")}
                    </Link>
                    <Link href={`/${locale}/about/governance`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("governance")}
                    </Link>
                    <Link href={`/${locale}/about/legal_status_policies`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("legal_status_policies")}
                    </Link>
                  </div>
                )}
              </div>

              {/* MEMBERS */}

              <div>
                <button
                  onClick={() => setMembersOpen(!membersOpen)}
                  className={`w-full flex items-center justify-between py-4 hover:text-[#103959] ${isActive(`/${locale}/members`) ? "text-[#103959]" : ""}`}
                >
                  {t("members")}
                  <ChevronDown size={16} className={`transition-transform ${membersOpen ? "rotate-180" : ""}`} />
                </button>

                {membersOpen && (
                  <div className="bg-gray-50 border border-gray-200 mb-2 divide-y divide-gray-200">
                    <Link href={`/${locale}/member/become_a_member`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("become_a_member")}
                    </Link>
                    <Link href={`/${locale}/member/partnership`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("partnership")}
                    </Link>
                    <Link href={`/${locale}/member/members_directory`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("members_directory")}
                    </Link>
                  </div>
                )}
              </div>

              {/* EVENTS */}

              <div>
                <button
                  onClick={() => setEventsOpen(!eventsOpen)}
                  className={`w-full flex items-center justify-between py-4 hover:text-[#103959] ${isActive(`/${locale}/events`) ? "text-[#103959]" : ""}`}
                >
                  {t("events")}
                  <ChevronDown size={16} className={`transition-transform ${eventsOpen ? "rotate-180" : ""}`} />
                </button>

                {eventsOpen && (
                  <div className="bg-gray-50 border border-gray-200 mb-2 divide-y divide-gray-200">
                    <Link href={`/${locale}/events/upcoming_events`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("upcoming_events")}
                    </Link>
                    <Link href={`/${locale}/events/news`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("Latest_news_past_events")}
                    </Link>
                  </div>
                )}
              </div>

              {/* INSIGHTS */}

              <div>
                <button
                  onClick={() => setInsightsOpen(!insightsOpen)}
                  className={`w-full flex items-center justify-between py-4 hover:text-[#103959] ${isActive(`/${locale}/insights`) ? "text-[#103959]" : ""}`}
                >
                  {t("insights")}
                  <ChevronDown size={16} className={`transition-transform ${insightsOpen ? "rotate-180" : ""}`} />
                </button>

                {insightsOpen && (
                  <div className="bg-gray-50 border border-gray-200 mb-2 divide-y divide-gray-200">
                    <Link href={`/${locale}/insights/countries`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("countries")}
                    </Link>
                    <Link href={`/${locale}/insights/publications`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("publications")}
                    </Link>
                    <Link href={`/${locale}/insights/press_releases`} onClick={() => setMobileOpen(false)} className="block px-4 py-3 hover:bg-gray-100">
                      {t("press_releases")}
                    </Link>
                  </div>
                )}
              </div>

              {/* CONTACT */}

              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileOpen(false)}
                className={`py-4 hover:text-[#103959] ${isActive(`/${locale}/contact`) ? "text-[#103959] border-b-2 border-[#103959]" : ""}`}
              >
                {t("contact")}
              </Link>

            </nav>

            {/* MOBILE LANGUAGE */}

            <div className="mt-6 pb-4 border-t border-gray-200 pt-4">

              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-3 text-gray-800 font-medium"
              >

                <Image src={`/flags/${locale}.svg`} alt={locale} width={22} height={14} />

                {locale.toUpperCase()}

                <ChevronDown size={16} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />

              </button>

              {langOpen && (

                <div className="mt-3 bg-gray-50 border border-gray-200 divide-y divide-gray-200">

                  {languages.map(lang => (
                    <Link
                      key={lang}
                      href={switchLocale(lang)}
                      scroll={false}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    >
                      <Image src={`/flags/${lang}.svg`} alt={lang} width={22} height={14} />
                      {lang.toUpperCase()}
                    </Link>
                  ))}

                </div>

              )}

            </div>

            <Link
              href={`/${locale}/join`}
              onClick={() => setMobileOpen(false)}
              className="mt-4 mb-8 block w-full bg-[#022038] text-white text-center py-3 font-medium hover:opacity-90 transition"
            >
              {t("join")}
            </Link>

          </div>

        </div>

      )}

    </header>
  )
}
