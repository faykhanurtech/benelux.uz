"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Instagram, Youtube, Send } from "lucide-react"

export default function Footer() {

  const t = useTranslations("footer")
  const locale = useLocale()

  return (

    <footer className="bg-black text-white pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* LOGO + DESCRIPTION */}

          <div>

            <Image
              src="/logo-footer.svg"
              alt="Benelux Chamber"
              width={160}
              height={40}
            />

            <p className="text-white mt-4 mb-2 text-sm leading-relaxed font-light">
              +998 99 000 00 00
            </p>

            <p className="text-white mb-4 font-light text-sm">
              info@benelux.uz
            </p>

            <div className="flex gap-4 text-white text-sm">

              <Instagram size={20}/>
              <Youtube size={20}/>
              <Send size={20}/>

            </div>

          </div>


          {/* INFORMATION */}

          <div>

            <h4 className="font-semibold mb-5">
              {t("information")}
            </h4>

            <div className="flex flex-col gap-3 text-white text-sm font-light">

              <Link href="#">
                {t("agreement")}
              </Link>

              <Link href="#">
                {t("privacy")}
              </Link>

              <Link href="#">
                {t("faq")}
              </Link>

            </div>

          </div>

        {/* NAVIGATION */}

          <div>

            <h4 className="font-semibold mb-5">
              {t("navigation")}
            </h4>

            <div className="flex flex-col gap-3 text-sm text-white">

              <Link href={`/${locale}`}>
                {t("home")}
              </Link>

              <Link href={`/${locale}/about`}>
                {t("about-us")}
              </Link>

              <Link href={`/${locale}/events`}>
                {t("events")}
              </Link>

              <Link href={`/${locale}/contact`}>
                {t("contact")}
              </Link>

            </div>

          </div>


          {/* ABOUT */}

          <div>

            <h4 className="font-semibold mb-5">
              {t("about")}
            </h4>

            <div className="flex flex-col gap-3 text-white text-sm font-light">

              <Link href={`/${locale}/about`}>
                {t("about_chamber")}
              </Link>

              <Link href={`/${locale}/events`}>
                {t("events")}
              </Link>

              <Link href={`/${locale}/news`}>
                {t("news")}
              </Link>

              <Link href={`/${locale}/contact`}>
                {t("contact")}
              </Link>

            </div>

          </div>


          {/* ADDRESS */}

          <div className="text-white leading-relaxed">

            <p className="font-light text-white mb-4 font-light">
              {t("company")}
            </p>

            <p className="font-light text-gray-400 text-sm mb-4">
              {t("address")}
            </p>

            <p className="font-light text-gray-400 text-sm mb-4">
              {t("registration")}
            </p>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-gray-800 mt-12 pt-6 text-gray-400 text-sm">

          © {new Date().getFullYear()} Benelux Chamber of Commerce Uzbekistan

        </div>

      </div>

    </footer>

  )

}