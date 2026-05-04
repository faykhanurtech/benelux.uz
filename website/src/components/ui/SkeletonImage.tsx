"use client"

import { useState } from "react"
import NextImage, { ImageProps } from "next/image"

export default function SkeletonImage({ className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && (
        <span
          aria-hidden
          className="absolute inset-0 bg-gray-200 animate-pulse"
        />
      )}
      <NextImage
        {...props}
        className={`transition-opacity duration-500${loaded ? " opacity-100" : " opacity-0"}${className ? " " + className : ""}`}
        onLoad={(e) => {
          setLoaded(true)
          onLoad?.(e)
        }}
      />
    </>
  )
}
