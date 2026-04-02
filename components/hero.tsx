// "use client"

// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { Globe, Users, Newspaper } from "lucide-react"

// const features = [
//   {
//     icon: Globe,
//     title: "Global Coverage",
//     description: "Serving clients across Tanzania and beyond.",
//   },
//   {
//     icon: Users,
//     title: "Join Our Team",
//     description: "Grow your legal career with us.",
//   },
//   {
//     icon: Newspaper,
//     title: "Press Releases",
//     description: "Latest news and firm announcements.",
//   },
// ]

// export function Hero() {
//   return (
//     <section className="relative flex flex-col">
//       {/* Hero Background */}
//       <div
//         className="relative flex items-center min-h-[70vh] lg:min-h-[75vh]"
//         style={{
//           backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url('https://images.pexels.com/photos/6077381/pexels-photo-6077381.jpeg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center right',
//         }}
//       >
//         <div className="container mx-auto px-4 lg:px-8 xl:px-16 pt-24 lg:pt-28 pb-16 lg:pb-20">
//           <div className="max-w-2xl lg:max-w-3xl">
//             <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 lg:mb-8">
//               Licensed Law Firm in Tanzania.
//             </h1>
//             <p className="text-white/80 text-lg lg:text-xl mb-8 lg:mb-10 max-w-lg lg:max-w-xl">
//               Experienced legal practitioners providing tailored solutions with requisite skills and expertise for today&apos;s legal needs.
//             </p>
//             <Link href="/attorneys">
//               <Button
//                 variant="outline"
//                 className="border-accent text-foreground bg-accent hover:bg-accent/90 rounded-full px-8 lg:px-10 py-6 lg:py-7 text-sm lg:text-base font-medium tracking-wider"
//               >
//                 MEET OUR TEAM
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Features Bar */}
//       <div className="bg-primary text-primary-foreground">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.title}
//                 className={`flex items-center gap-4 lg:gap-6 py-6 lg:py-8 px-6 lg:px-8 ${index !== features.length - 1 ? 'md:border-r border-white/10' : ''
//                   }`}
//               >
//                 <div className="flex-shrink-0">
//                   <feature.icon className="h-10 w-10 lg:h-12 lg:w-12 text-accent" />
//                 </div>
//                 <div>
//                   <h3 className="font-serif text-lg lg:text-xl text-white">{feature.title}</h3>
//                   <p className="text-xs lg:text-sm text-white/60 tracking-wider">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


















"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Users, Newspaper } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Serving clients across Tanzania and beyond.",
  },
  {
    icon: Users,
    title: "Join Our Team",
    description: "Grow your legal career with us.",
  },
  {
    icon: Newspaper,
    title: "Press Releases",
    description: "Latest news and firm announcements.",
  },
]

export function Hero() {
  const images = useMemo(
    () => [
      "https://images.pexels.com/photos/6077381/pexels-photo-6077381.jpeg",
      "https://images.pexels.com/photos/6077162/pexels-photo-6077162.jpeg",
      "https://images.pexels.com/photos/3869646/pexels-photo-3869646.jpeg",
      "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg",
    ],
    [],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const update = () => setReduceMotion(mediaQuery.matches)
    update()

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update)
    } else {
      mediaQuery.addListener(update)
    }

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length)
    }, 7000)

    return () => {
      window.clearInterval(id)
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", update)
      } else {
        mediaQuery.removeListener(update)
      }
    }
  }, [images.length])

  return (
    <section className="relative flex flex-col">
      {/* Hero Background */}
      <div className="relative flex items-center min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
        {/* Background images (cross-fade) */}
        <div className="absolute inset-0">
          {images.map((src, idx) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={src + idx}
              className={[
                "absolute inset-0 bg-cover bg-center",
                reduceMotion
                  ? "transition-none"
                  : "transition-opacity duration-1000 ease-in-out",
                idx === activeIndex ? "opacity-100" : "opacity-0",
              ].join(" ")}
              style={{
                backgroundImage: `url('${src}')`,
                backgroundPosition: "center right",
              }}
            />
          ))}

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 xl:px-16 pt-24 lg:pt-28 pb-16 lg:pb-20">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 lg:mb-8">
              Licensed Law Firm in Tanzania.
            </h1>
            <p className="text-white/80 text-lg lg:text-xl mb-8 lg:mb-10 max-w-lg lg:max-w-xl">
              Experienced legal practitioners providing tailored solutions with requisite skills and expertise for today&apos;s legal needs.
            </p>
            <Link href="/attorneys">
              <Button
                variant="outline"
                className="border-accent text-foreground bg-accent hover:bg-accent/90 rounded-full px-8 lg:px-10 py-6 lg:py-7 text-sm lg:text-base font-medium tracking-wider"
              >
                MEET OUR TEAM
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex items-center gap-4 lg:gap-6 py-6 lg:py-8 px-6 lg:px-8 ${index !== features.length - 1 ? 'md:border-r border-white/10' : ''
                  }`}
              >
                <div className="flex-shrink-0">
                  <feature.icon className="h-10 w-10 lg:h-12 lg:w-12 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg lg:text-xl text-white">{feature.title}</h3>
                  <p className="text-xs lg:text-sm text-white/60 tracking-wider">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
