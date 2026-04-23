"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

type Props = {
  navKey: string
}

export default function AboutHero({ navKey }: Props) {
  const t = useTranslations("nav")

  return (
    <section className="relative w-full h-[300px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/about/hero1.jpg"
        alt="Benelux Chamber"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* LOGO — centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/hero.svg"
          alt="Benelux Chamber logo"
          width={120}
          height={120}
          className=""
        />
      </div>

      {/* TITLE — bottom left */}
      <div className="absolute bottom-8 left-0 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-lg">
            {t(navKey)}
          </h1>
        </div>
      </div>

    </section>
  )
}
