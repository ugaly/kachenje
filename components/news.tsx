
// import Image from "next/image"
// import Link from "next/link"
// import { MessageSquare, ChevronRight, Calendar, PlayCircle } from "lucide-react"
// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
// import { blogPosts } from "@/lib/blog-data"

// export function News() {
//   // Get the first 3 blog posts
//   const newsItems = blogPosts.slice(0, 3)

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">Latest Updates</span>
//           <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
//             Recent News
//           </h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto">
//             Stay informed with the latest legal insights, industry updates, and news from Kachenje Law Firm. Our experts share valuable knowledge to help you navigate legal matters.
//           </p>
//         </div>

//         {/* News Grid - Equal sized cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {newsItems.map((item, index) => (
//             <article
//               key={item.slug}
//               className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
//             >
//               {/* Image or Video Container with fixed aspect ratio */}
//               {index === 1 ? (
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <button className="relative aspect-[16/10] w-full group focus:outline-none">
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         fill
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         loading={index === 0 ? "eager" : "lazy"}
//                       />
//                       <span className="absolute inset-0 flex items-center justify-center bg-black/40">
//                         <PlayCircle className="w-16 h-16 text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform" />
//                       </span>
//                     </button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-3xl w-full p-0 bg-black flex items-center justify-center aspect-video">
//                     <iframe
//                       width="800"
//                       height="450"
//                       src="https://www.youtube.com/embed/occycDAXmAA?si=jB9lc-bv5-Or9sUB&autoplay=1"
//                       title="YouTube video player"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       referrerPolicy="strict-origin-when-cross-origin"
//                       allowFullScreen
//                       className="w-full h-[250px] md:h-[450px] rounded-lg"
//                     ></iframe>
//                   </DialogContent>
//                 </Dialog>
//               ) : index === 2 ? (
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <button className="relative aspect-[16/10] w-full group focus:outline-none">
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         fill
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         loading={index === 0 ? "eager" : "lazy"}
//                       />
//                       <span className="absolute inset-0 flex items-center justify-center bg-black/40">
//                         <PlayCircle className="w-16 h-16 text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform" />
//                       </span>
//                     </button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-3xl w-full p-0 bg-black flex items-center justify-center aspect-video">
//                     <iframe
//                       width="800"
//                       height="450"
//                       src="https://www.youtube.com/embed/CQAIlXAypLs?si=ieFNrQ_aUlNDci4y&autoplay=1"
//                       title="YouTube video player"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       referrerPolicy="strict-origin-when-cross-origin"
//                       allowFullScreen
//                       className="w-full h-[250px] md:h-[450px] rounded-lg"
//                     ></iframe>
//                   </DialogContent>
//                 </Dialog>
//               ) : (
//                 <Link href={`/blog/${item.slug}`} className="block">
//                   <div className="relative aspect-[16/10] overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading={index === 0 ? "eager" : "lazy"}
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
//                         {item.categories[0]}
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               )}
              
//               {/* Content */}
//               <div className="p-6">
//                 {/* Meta */}
//                 <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
//                   <span className="flex items-center gap-1">
//                     <Calendar className="h-3.5 w-3.5" />
//                     {new Date(item.publishedAt).toLocaleDateString('en-US', { 
//                       month: 'short', 
//                       day: 'numeric', 
//                       year: 'numeric' 
//                     })}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <MessageSquare className="h-3.5 w-3.5" />
//                     {Math.floor(Math.random() * 10) + 1}
//                   </span>
//                 </div>
                
//                 {/* Title */}
//                 <Link href={`/blog/${item.slug}`}>
//                   <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
//                     {item.title}
//                   </h3>
//                 </Link>
                
//                 {/* Excerpt */}
//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                   {item.excerpt}
//                 </p>
                
//                 {/* Read More Link */}
//                 <Link 
//                   href={`/blog/${item.slug}`}
//                   className="inline-flex items-center text-accent text-sm font-medium hover:gap-2 gap-1 transition-all"
//                 >
//                   Read More <ChevronRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <Link 
//             href="/blog"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wider hover:bg-primary/90 transition-colors"
//           >
//             VIEW ALL NEWS
//             <ChevronRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>

//       {/* Partners Logos */}
//       <div className="container mx-auto px-4 mt-16">
//         <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <div key={i} className="h-12 w-32 bg-muted-foreground/20 rounded" />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MessageSquare, ChevronRight, Calendar, PlayCircle } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { blogPosts } from "@/lib/blog-data"

const commentCounts = [10, 1, 6]

export function News() {
  const [isMobile, setIsMobile] = useState(false)

  // Simple mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get the first 3 blog posts
  const newsItems = blogPosts.slice(0, 3)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header - No animations */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">Latest Updates</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Recent News
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest legal insights, industry updates, and news from Kachenje Law Firm. Our experts share valuable knowledge to help you navigate legal matters.
          </p>
        </div>

        {/* News Grid - Simple grid, no hover effects on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.slug}
              className="bg-white rounded-lg overflow-hidden border border-border"
              style={{ 
                transition: isMobile ? 'all 0.3s ease' : 'none',
                boxShadow: isMobile ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {/* Image or Video Container */}
              {index === 1 ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative aspect-16/10 w-full group focus:outline-none">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                        quality={75}
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <PlayCircle className="w-16 h-16 text-white/90 drop-shadow-lg" />
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl w-full p-0 bg-black flex items-center justify-center aspect-video">
                    <iframe
                      width="800"
                      height="450"
                      src="https://www.youtube.com/embed/occycDAXmAA?si=jB9lc-bv5-Or9sUB&autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="h-62.5 w-full rounded-lg md:h-112.5"
                      loading="lazy"
                    ></iframe>
                  </DialogContent>
                </Dialog>
              ) : index === 2 ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative aspect-16/10 w-full group focus:outline-none">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                        quality={75}
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <PlayCircle className="w-16 h-16 text-white/90 drop-shadow-lg" />
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl w-full p-0 bg-black flex items-center justify-center aspect-video">
                    <iframe
                      width="800"
                      height="450"
                      src="https://www.youtube.com/embed/CQAIlXAypLs?si=ieFNrQ_aUlNDci4y&autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="h-62.5 w-full rounded-lg md:h-112.5"
                      loading="lazy"
                    ></iframe>
                  </DialogContent>
                </Dialog>
              ) : (
                <Link href={`/blog/${item.slug}`} className="block">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loading="eager"
                      quality={75}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
                        {item.categories[0]}
                      </span>
                    </div>
                  </div>
                </Link>
              )}
              
              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(item.publishedAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" />
                    {commentCounts[index]}
                  </span>
                </div>
                
                {/* Title - No hover color change on desktop */}
                <Link href={`/blog/${item.slug}`}>
                  <h3 className="font-serif text-xl text-foreground mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
                
                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                
                {/* Read More Link - No gap animation on desktop */}
                <Link 
                  href={`/blog/${item.slug}`}
                  className="inline-flex items-center text-accent text-sm font-medium"
                  style={{ gap: isMobile ? '4px' : '2px' }}
                >
                  Read More <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button - No hover scale effect */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium tracking-wider"
          >
            VIEW ALL NEWS
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Partners Logos - Simplified */}
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 w-32 bg-muted-foreground/20 rounded" />
          ))}
        </div>
      </div>
    </section>
  )
}