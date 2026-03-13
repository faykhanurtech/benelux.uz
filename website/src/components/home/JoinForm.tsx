"use client"

import { useTranslations } from "next-intl"

export default function JoinForm() {

  const t = useTranslations("join_form")

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#022038] text-white p-12 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}

            <div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {t("title")}
              </h2>

              <p className="text-gray-300 text-lg">
                {t("text")}
              </p>

            </div>


            {/* FORM */}

            <form className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder={t("name")}
                className="col-span-1 bg-gray-100 text-black px-4 py-3 outline-none"
              />

              <input
                type="tel"
                placeholder={t("phone")}
                className="col-span-1 bg-gray-100 text-black px-4 py-3 outline-none"
              />

              <input
                type="text"
                placeholder={t("company")}
                className="col-span-1 bg-gray-100 text-black px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder={t("email")}
                className="col-span-1 bg-gray-100 text-black px-4 py-3 outline-none"
              />

                <button
                    type="submit"
                    className="col-span-2 border border-white text-white py-3 font-medium hover:bg-white hover:text-black transition"
                    >
                    {t("button")}
                </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  )

}