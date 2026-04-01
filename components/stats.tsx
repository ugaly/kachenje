// import { Scale, UserCheck, Gavel } from "lucide-react"

// const stats = [
//   { value: 30, suffix: "%", label: "Cases Success" },
//   { value: 15, suffix: "%", label: "Countersuits Filed" },
//   { value: 122, suffix: "+", label: "Happy Clients" },
//   { value: 38, suffix: "%", label: "Cases Dismissed" },
// ]

// const services = [
//   {
//     icon: Scale,
//     title: "Case Investigation",
//     description: "Thorough analysis of your legal matter with detailed research and evidence gathering to build a strong foundation for your case.",
//   },
//   {
//     icon: UserCheck,
//     title: "Request an Attorney",
//     description: "Connect with our experienced legal professionals who specialize in your specific area of law for personalized representation.",
//   },
//   {
//     icon: Gavel,
//     title: "Get Legal Help",
//     description: "Access comprehensive legal support from consultation through resolution with our client-focused approach and dedicated team.",
//   },
// ]

// export function Stats() {
//   return (
//     <section>
//       <div
//         className="relative py-16 lg:py-24"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)), url('https://images.pexels.com/photos/6077964/pexels-photo-6077964.jpeg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container mx-auto px-4 lg:px-8 xl:px-16">
//           <div className="max-w-3xl">
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic leading-tight mb-4 lg:mb-6">
//               Delivering Justice with Integrity &amp; Excellence
//             </h2>
//             <p className="text-white/70 mb-12 lg:text-lg">
//               Our track record reflects our commitment to achieving favorable outcomes for our clients through dedicated legal expertise and strategic advocacy.
//             </p>

//             <div className="grid grid-cols-2 gap-0 max-w-md">
//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.label}
//                   className={`py-6 ${
//                     index % 2 === 0 ? 'pr-8 border-r border-white/20' : 'pl-8'
//                   } ${
//                     index < 2 ? 'border-b border-white/20' : ''
//                   }`}
//                 >
//                   <div className="mb-2 text-4xl font-light text-white md:text-5xl">
//                     {stat.value}{stat.suffix}
//                   </div>
//                   <div className="text-sm text-white/60">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3">
//         {services.map((service, index) => (
//           <div 
//             key={service.title}
//             className={`py-12 lg:py-16 px-8 lg:px-12 flex items-start gap-6 ${
//               index === 0 ? 'bg-secondary' : index === 1 ? 'bg-muted' : 'bg-secondary'
//             }`}
//           >
//             <div className="flex-shrink-0">
//               <service.icon className="h-14 w-14 lg:h-16 lg:w-16 text-accent" strokeWidth={1} />
//             </div>
//             <div>
//               <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }











// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Scale, UserCheck, Gavel } from "lucide-react"

// /* ================= DATA ================= */

// const stats = [
//   { value: 30, suffix: "%", label: "Cases Success" },
//   { value: 15, suffix: "%", label: "Countersuits Filed" },
//   { value: 122, suffix: "+", label: "Happy Clients" },
//   { value: 38, suffix: "%", label: "Cases Dismissed" },
// ]

// const services = [
//   {
//     icon: Scale,
//     title: "Case Investigation",
//     description:
//       "Thorough analysis of your legal matter with detailed research and evidence gathering to build a strong foundation for your case.",
//   },
//   {
//     icon: UserCheck,
//     title: "Request an Attorney",
//     description:
//       "Connect with our experienced legal professionals who specialize in your specific area of law for personalized representation.",
//   },
//   {
//     icon: Gavel,
//     title: "Get Legal Help",
//     description:
//       "Access comprehensive legal support from consultation through resolution with our client-focused approach and dedicated team.",
//   },
// ]

// /* ================= COUNTER ================= */

// function AnimatedCounter({
//   value,
//   suffix,
//   duration = 2000,
// }: {
//   value: number
//   suffix: string
//   duration?: number
// }) {
//   const [count, setCount] = useState(0)
//   const ref = useRef<HTMLDivElement | null>(null)
//   const animated = useRef(false)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting || animated.current) return
//         animated.current = true

//         let startTime: number | null = null

//         const animate = (time: number) => {
//           if (!startTime) startTime = time
//           const progress = time - startTime

//           const current = Math.min(value, (progress / duration) * value)
//           setCount(Math.floor(current))

//           if (progress < duration) {
//             requestAnimationFrame(animate)
//           } else {
//             setCount(value)
//           }
//         }

//         requestAnimationFrame(animate)
//       },
//       { threshold: 0.4 }
//     )

//     observer.observe(el)
//     return () => observer.disconnect()
//   }, [value, duration])

//   return (
//     <div className="text-4xl md:text-5xl font-light text-white mb-2" ref={ref}>
//       {count}
//       {suffix}
//     </div>
//   )
// }

// /* ================= MAIN COMPONENT ================= */

// export function Stats() {
//   return (
//     <section>
//       {/* ================= STATS SECTION ================= */}
//       <div className="relative py-14 lg:py-20">
//         {/* Background (FIXED & STABLE) */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.3)),
//               url('https://images.pexels.com/photos/6077964/pexels-photo-6077964.jpeg?auto=compress&cs=tinysrgb&w=1600')
//             `,
//             backgroundSize: "cover", // ✅ perfect fit
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         />

//         {/* Content */}
//         <div className="relative container mx-auto px-4 lg:px-8 xl:px-12">
//           <div className="max-w-3xl">
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic leading-tight mb-4 lg:mb-6">
//               Delivering Justice with Integrity & Excellence
//             </h2>

//             <p className="text-white/70 mb-10 lg:text-lg">
//               Our track record reflects our commitment to achieving favorable
//               outcomes for our clients through dedicated legal expertise and
//               strategic advocacy.
//             </p>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 max-w-md">
//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.label}
//                   className={`py-5 ${
//                     index % 2 === 0
//                       ? "pr-6 border-r border-white/20"
//                       : "pl-6"
//                   } ${index < 2 ? "border-b border-white/20" : ""}`}
//                 >
//                   <AnimatedCounter
//                     value={stat.value}
//                     suffix={stat.suffix}
//                   />

//                   <div className="text-sm text-white/60">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= SERVICES ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-3">
//         {services.map((service, index) => (
//           <div
//             key={service.title}
//             className={`py-10 lg:py-14 px-6 lg:px-10 flex items-start gap-5 ${
//               index === 1 ? "bg-muted" : "bg-secondary"
//             }`}
//           >
//             {/* Icon */}
//             <div className="flex-shrink-0">
//               <service.icon
//                 className="h-12 w-12 lg:h-14 lg:w-14 text-accent"
//                 strokeWidth={1}
//               />
//             </div>

//             {/* Text */}
//             <div>
//               <h3 className="font-serif text-lg lg:text-xl text-foreground mb-2">
//                 {service.title}
//               </h3>

//               <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }






// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Scale, UserCheck, Gavel } from "lucide-react"

// /* ================= DATA ================= */

// const stats = [
//   { value: 30, suffix: "%", label: "Cases Success" },
//   { value: 15, suffix: "%", label: "Countersuits Filed" },
//   { value: 122, suffix: "+", label: "Happy Clients" },
//   { value: 38, suffix: "%", label: "Cases Dismissed" },
// ]

// const services = [
//   {
//     icon: Scale,
//     title: "Case Investigation",
//     description:
//       "Thorough analysis of your legal matter with detailed research and evidence gathering to build a strong foundation for your case.",
//   },
//   {
//     icon: UserCheck,
//     title: "Request an Attorney",
//     description:
//       "Connect with our experienced legal professionals who specialize in your specific area of law for personalized representation.",
//   },
//   {
//     icon: Gavel,
//     title: "Get Legal Help",
//     description:
//       "Access comprehensive legal support from consultation through resolution with our client-focused approach and dedicated team.",
//   },
// ]

// /* ================= COUNTER ================= */

// function AnimatedCounter({
//   value,
//   suffix,
//   duration = 2000,
// }: {
//   value: number
//   suffix: string
//   duration?: number
// }) {
//   const [count, setCount] = useState(0)
//   const ref = useRef<HTMLDivElement | null>(null)
//   const animated = useRef(false)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting || animated.current) return
//         animated.current = true

//         let startTime: number | null = null

//         const animate = (time: number) => {
//           if (!startTime) startTime = time
//           const progress = time - startTime

//           const current = Math.min(value, (progress / duration) * value)
//           setCount(Math.floor(current))

//           if (progress < duration) {
//             requestAnimationFrame(animate)
//           } else {
//             setCount(value)
//           }
//         }

//         requestAnimationFrame(animate)
//       },
//       { threshold: 0.4 }
//     )

//     observer.observe(el)
//     return () => observer.disconnect()
//   }, [value, duration])

//   return (
//     <div ref={ref} className="text-4xl md:text-5xl font-light text-white mb-2">
//       {count}
//       {suffix}
//     </div>
//   )
// }

// /* ================= MAIN COMPONENT ================= */

// export function Stats() {
//   const bgRef = useRef<HTMLDivElement | null>(null)

//   // ✅ Smooth parallax
//   useEffect(() => {
//     const el = bgRef.current
//     if (!el) return

//     let ticking = false

//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           const offset = window.scrollY * 0.15
//           el.style.backgroundPosition = `center ${-offset}px`
//           ticking = false
//         })
//         ticking = true
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <section>
//       {/* ================= STATS ================= */}
//       <div className="relative py-14 lg:py-20 overflow-hidden">
        
//         {/* Background Image */}
//         <div
//           ref={bgRef}
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "url('https://images.pexels.com/photos/6077964/pexels-photo-6077964.jpeg?auto=compress&cs=tinysrgb&w=1600')",
//             backgroundSize: "cover",
//             backgroundPosition: "center 0px",
//             backgroundRepeat: "no-repeat",
//           }}
//         />

//         {/* 🔥 FULL OVERLAY (Gradient Layer) */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

//         {/* Content */}
//         <div className="relative container mx-auto px-4 lg:px-8 xl:px-12">
//           <div className="max-w-3xl">
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic leading-tight mb-4 lg:mb-6">
//               Delivering Justice with Integrity & Excellence
//             </h2>

//             <p className="text-white/70 mb-10 lg:text-lg">
//               Our track record reflects our commitment to achieving favorable
//               outcomes for our clients through dedicated legal expertise and
//               strategic advocacy.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-2 max-w-md">
//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.label}
//                   className={`py-5 ${
//                     index % 2 === 0
//                       ? "pr-6 border-r border-white/20"
//                       : "pl-6"
//                   } ${index < 2 ? "border-b border-white/20" : ""}`}
//                 >
//                   <AnimatedCounter value={stat.value} suffix={stat.suffix} />
//                   <div className="text-sm text-white/60">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= SERVICES ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-3">
//         {services.map((service, index) => (
//           <div
//             key={service.title}
//             className={`py-10 lg:py-14 px-6 lg:px-10 flex items-start gap-5 ${
//               index === 1 ? "bg-muted" : "bg-secondary"
//             }`}
//           >
//             <div className="flex-shrink-0">
//               <service.icon
//                 className="h-12 w-12 lg:h-14 lg:w-14 text-accent"
//                 strokeWidth={1}
//               />
//             </div>

//             <div>
//               <h3 className="font-serif text-lg lg:text-xl text-foreground mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }






"use client"

import { useState, useEffect, useRef } from "react"
import { Scale, UserCheck, Gavel } from "lucide-react"

/* ================= DATA ================= */

const stats = [
  { value: 30, suffix: "%", label: "Cases Success" },
  { value: 15, suffix: "%", label: "Countersuits Filed" },
  { value: 122, suffix: "+", label: "Happy Clients" },
  { value: 38, suffix: "%", label: "Cases Dismissed" },
]

const services = [
  {
    icon: Scale,
    title: "Case Investigation",
    description:
      "Thorough analysis of your legal matter with detailed research and evidence gathering to build a strong foundation for your case.",
  },
  {
    icon: UserCheck,
    title: "Request an Attorney",
    description:
      "Connect with our experienced legal professionals who specialize in your specific area of law for personalized representation.",
  },
  {
    icon: Gavel,
    title: "Get Legal Help",
    description:
      "Access comprehensive legal support from consultation through resolution with our client-focused approach and dedicated team.",
  },
]

/* ================= COUNTER ================= */

function AnimatedCounter({
  value,
  suffix,
  duration = 2000,
}: {
  value: number
  suffix: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return
        animated.current = true

        let startTime: number | null = null

        const animate = (time: number) => {
          if (!startTime) startTime = time
          const progress = time - startTime
          const current = Math.min(value, (progress / duration) * value)
          setCount(Math.floor(current))

          if (progress < duration) {
            requestAnimationFrame(animate)
          } else {
            setCount(value)
          }
        }

        requestAnimationFrame(animate)
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-light text-white mb-2">
      {count}
      {suffix}
    </div>
  )
}

/* ================= MAIN COMPONENT ================= */

export function Stats() {
  const bgRef = useRef<HTMLDivElement | null>(null)

  // ✅ Parallax only on desktop, static on mobile
  useEffect(() => {
    const el = bgRef.current
    if (!el) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.innerWidth >= 768) {
            const offset = window.scrollY * 0.15
            el.style.backgroundPosition = `center ${-offset}px`
          } else {
            el.style.backgroundPosition = "center 0px"
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section>
      {/* ================= STATS ================= */}
      <div className="relative py-14 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6077964/pexels-photo-6077964.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center 0px",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* 🔥 FULL OVERLAY GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-8 xl:px-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic leading-tight mb-4 lg:mb-6">
              Delivering Justice with Integrity & Excellence
            </h2>

            <p className="text-white/70 mb-10 lg:text-lg">
              Our track record reflects our commitment to achieving favorable
              outcomes for our clients through dedicated legal expertise and
              strategic advocacy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 max-w-md">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-5 ${
                    index % 2 === 0
                      ? "pr-6 border-r border-white/20"
                      : "pl-6"
                  } ${index < 2 ? "border-b border-white/20" : ""}`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`py-10 lg:py-14 px-6 lg:px-10 flex items-start gap-5 ${
              index === 1 ? "bg-muted" : "bg-secondary"
            }`}
          >
            <div className="flex-shrink-0">
              <service.icon
                className="h-12 w-12 lg:h-14 lg:w-14 text-accent"
                strokeWidth={1}
              />
            </div>

            <div>
              <h3 className="font-serif text-lg lg:text-xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}