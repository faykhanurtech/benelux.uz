"use client"

import { useTranslations } from "next-intl"

export default function Contact() {

  const t = useTranslations("contact-contact")

  return (

    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}

          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {t("title")}
            </h2>

            <p className="text-gray-600 mb-10 max-w-md">
              {t("description")}
            </p>


            {/* PHONE */}

            <div className="mb-8">

              <h3 className="font-semibold text-lg mb-1">
                {t("phone_title")}
              </h3>

              <p className="text-gray-700">
                +998 99 996-16-96
              </p>

            </div>


            {/* EMAIL */}

            <div className="mb-8">

              <h3 className="font-semibold text-lg mb-1">
                {t("email_title")}
              </h3>

              <p className="text-gray-700">
                info@benelux.uz
              </p>

            </div>


            {/* ADDRESS */}

            <div>

              <h3 className="font-semibold text-lg mb-1">
                {t("address_title")}
              </h3>

              <p className="text-gray-700 max-w-md">
                Республика Узбекистан, 100047, город Ташкент, Мирабадский район,
                проспект Амира Темура, дом 4.
              </p>

            </div>

          </div>



          {/* RIGHT SIDE */}

          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("form_title")}
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              {t("form_description")}
            </p>


            <form className="space-y-6">

              {/* ROW */}

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder={t("first_name")}
                  className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#022038]"
                />

                <input
                  type="text"
                  placeholder={t("last_name")}
                  className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#022038]"
                />

              </div>


              {/* ROW */}

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="email"
                  placeholder={t("email")}
                  className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#022038]"
                />

                <input
                  type="text"
                  placeholder={t("phone")}
                  className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#022038]"
                />

              </div>


              {/* MESSAGE */}

              <textarea
                placeholder={t("message")}
                rows={5}
                className="border border-gray-300 px-4 py-3 w-full outline-none focus:border-[#022038]"
              ></textarea>


              {/* BUTTON */}

              <button
                type="submit"
                className="bg-[#022038] text-white px-8 py-3 font-medium hover:opacity-90 transition"
              >
                {t("send")}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  )

}
