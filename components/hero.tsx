"use client"

import Image from "next/image"

const HERO_BG = "https://kachenje.co.tz/img/parallax/landing.jpg"

export function Hero() {
  return (
    <section className="relative min-h-dvh w-full">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />

      <div className="relative z-10 flex min-h-dvh items-center justify-center px-6 py-16">
        <div className="inline-block max-w-[min(90vw,560px)] p-0 leading-none backdrop-blur-[3px] bg-white/25">
          <Image
            src="/assets/logo/logo-big.png"
            alt="Kachenje Advocate"
            width={560}
            height={200}
            priority
            className="block h-auto w-full max-w-[min(90vw,560px)] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
