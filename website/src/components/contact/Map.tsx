"use client"

export default function Map() {

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="w-full h-[420px] overflow-hidden">

          <iframe
            src="https://www.google.com/maps?q=41.311081,69.279737&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </section>

  )

}
