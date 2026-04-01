// "use client"

// import { useRef } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const caseStudies = [
//   {
//     image: "https://images.pexels.com/photos/34073779/pexels-photo-34073779.jpeg",
//     category: "Corporate",
//     title: "Cross-Border M&A Transaction",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
//     category: "Banking",
//     title: "Financial Regulatory Compliance",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
//     category: "Litigation",
//     title: "Commercial Dispute Resolution",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
//     category: "Real Estate",
//     title: "Property Development Deal",
//   },
// ]

// export function CaseStudies() {
//   // const scrollRef = useRef<HTMLDivElement>(null)

//   // const nextSlide = () => {
//   //   if (scrollRef.current) {
//   //     const scrollAmount = scrollRef.current.clientWidth
//   //     scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
//   //   }
//   // }

//   // const prevSlide = () => {
//   //   if (scrollRef.current) {
//   //     const scrollAmount = scrollRef.current.clientWidth
//   //     scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
//   //   }
//   // }

//   return (
//     <section className="pt-16 lg:pt-24 pb-0 bg-background overflow-hidden relative">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12 lg:mb-16">
//           <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mb-4 lg:mb-6">
//             Recent Case Studies
//           </h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto text-sm lg:text-base">
//             Explore our portfolio of successful legal matters across various practice areas. Each case demonstrates our commitment to achieving the best possible outcomes for our clients through strategic expertise and dedicated advocacy.
//           </p>
//         </div>
//       </div>

//       {/* Full Width Carousel */}
//       <div className="relative group max-w-[100vw]">
//         <div 
//           // ref={scrollRef}
//           className="flex overflow-x-auto snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {caseStudies.slice(0, 4).map((study) => (
//             <div
//               key={study.title}
//               className="relative flex-none w-full sm:w-1/2 lg:w-1/4 snap-start group cursor-pointer"
//             >
//               <div className="relative aspect-[4/5] min-h-[300px] overflow-hidden">
//                 <Image
//                   src={study.image}
//                   alt={study.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
//                   <span className="text-sm text-accent mb-2">{study.category}</span>
//                   <h3 className="font-serif text-xl lg:text-2xl text-center">{study.title}</h3>
//                   <div className="w-8 h-0.5 bg-accent mt-4" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         {/* <Button
//           variant="ghost"
//           size="icon"
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex"
//           onClick={prevSlide}
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex"
//           onClick={nextSlide}
//         >
//           <ChevronRight className="h-6 w-6" />
//         </Button> */}
//       </div>
//     </section>
//   )
// }





"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const caseStudies = [
  {
    image: "https://images.pexels.com/photos/34073779/pexels-photo-34073779.jpeg",
    category: "Corporate",
    title: "Cross-Border M&A Transaction",
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    category: "Banking",
    title: "Financial Regulatory Compliance",
  },
  {
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    category: "Litigation",
    title: "Commercial Dispute Resolution",
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    category: "Real Estate",
    title: "Property Development Deal",
  },
]

export function CaseStudies() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="pt-16 lg:pt-24 pb-0 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mb-4 lg:mb-6">
            Recent Case Studies
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm lg:text-base">
            Explore our portfolio of successful legal matters across various practice areas.
          </p>
        </div>
      </div>

      {/* Simple Horizontal Scroll - No animations */}
      <div className="overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {caseStudies.map((study, index) => (
            <div key={study.title} className="w-screen sm:w-1/2 lg:w-1/4 flex-shrink-0">
              <div className="relative aspect-[4/5] min-h-[300px] overflow-hidden bg-gray-100">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading={index < 2 ? "eager" : "lazy"}
                  quality={75}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                  <span className="text-sm text-accent mb-2">{study.category}</span>
                  <h3 className="font-serif text-xl lg:text-2xl text-center">{study.title}</h3>
                  <div className="w-8 h-0.5 bg-accent mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple scroll indicator for mobile */}
      {isMobile && (
        <div className="text-center mt-4 text-xs text-muted-foreground">
          ← Scroll to see more →
        </div>
      )}
    </section>
  )
}