"use client"

import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "next-intl"

type Member = {
  name: string
  logo: string
  paragraphs: string[]
  services: string[]
  website: string
}

function MemberLogo({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-28 h-20 flex items-center justify-center bg-gray-100 rounded text-xs text-gray-400 text-center px-2">
        {alt}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={112}
      height={80}
      className="object-contain w-28 h-20"
      onError={() => setError(true)}
    />
  )
}

export default function MembersDirectory() {
  const t = useTranslations("membersDirectory")
  const members = t.raw("members") as Member[]

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="divide-y divide-gray-200">
          {members.map((member, i) => (
            <div key={i} className="py-12 flex gap-10">

              {/* LOGO */}
              <div className="shrink-0 w-28 flex items-start pt-1">
                <MemberLogo src={member.logo} alt={member.name} />
              </div>

              {/* CONTENT */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  {t("introLabel")}
                </p>

                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  {member.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {member.services.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {member.services.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5">
                  <p className="text-xs text-gray-400 mb-1">{t("websiteLabel")}</p>
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline break-all"
                  >
                    {member.website}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
