import Image from "next/image"
import { getTranslations } from "next-intl/server"

type PersonKey = "chairman" | "director"

export default async function PersonalWord({ person }: { person: PersonKey }) {
  const t = await getTranslations("personal-words")

  const photo = t(`${person}.photo`)
  const pageTitle = t(`${person}.pageTitle`)
  const name = t(`${person}.name`)
  const position = t(`${person}.position`)
  const organisation = t(`${person}.organisation`)
  const texts = t.raw(`${person}.texts`) as string[]

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl">
            {pageTitle}<br />
            <span className="underline">{name}</span>
          </h1>
          <div className="flex-shrink-0">
            <Image
              src={photo}
              alt={name}
              width={160}
              height={200}
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          {texts.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <p className="font-bold">{name}</p>
          <p className="text-gray-600">{position}</p>
          <p className="text-gray-600">{organisation}</p>
        </div>

      </div>
    </section>
  )
}
