// "use client"

// import { useState, useEffect, useCallback, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { Search, X, ArrowRight, Clock, TrendingUp, Users, Scale, FileText, Phone, ChevronRight } from "lucide-react"
// import { practiceAreasData } from "@/lib/practice-areas-data"
// import { attorneys } from "@/lib/attorneys-data"
// import { blogPosts } from "@/lib/blog-data"

// interface SearchModalProps {
//   isOpen: boolean
//   onClose: () => void
// }

// // Quick links for default view
// const quickLinks = [
//   { title: "About Us", href: "/about", icon: Users, description: "Learn about our firm" },
//   { title: "Practice Areas", href: "/practice-areas", icon: Scale, description: "Explore our services" },
//   { title: "Our Attorneys", href: "/attorneys", icon: Users, description: "Meet our legal team" },
//   { title: "Blog & Insights", href: "/blog", icon: FileText, description: "Latest legal news" },
//   { title: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch" },
// ]

// // Popular searches
// const popularSearches = [
//   "Corporate Law",
//   "Real Estate",
//   "Banking",
//   "Arbitration",
//   "Employment Law",
//   "Intellectual Property",
// ]

// type SearchResult = {
//   type: "practice" | "attorney" | "blog" | "page"
//   title: string
//   description: string
//   href: string
//   image?: string
//   category?: string
// }

// export function SearchModal({ isOpen, onClose }: SearchModalProps) {
//   const [query, setQuery] = useState("")
//   const [results, setResults] = useState<SearchResult[]>([])
//   const [recentSearches, setRecentSearches] = useState<string[]>([])
//   const inputRef = useRef<HTMLInputElement>(null)

//   // Load recent searches from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("recentSearches")
//     if (saved) {
//       setRecentSearches(JSON.parse(saved))
//     }
//   }, [])

//   // Focus input when modal opens
//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       setTimeout(() => inputRef.current?.focus(), 100)
//     }
//   }, [isOpen])

//   // Search function
//   const performSearch = useCallback((searchQuery: string) => {
//     if (!searchQuery.trim()) {
//       setResults([])
//       return
//     }

//     const q = searchQuery.toLowerCase()
//     const searchResults: SearchResult[] = []

//     // Search practice areas
//     practiceAreasData.forEach((area) => {
//       const titleMatch = area.title?.toLowerCase().includes(q)
//       const descMatch = area.shortDescription?.toLowerCase().includes(q) || area.fullDescription?.toLowerCase().includes(q)
//       const servicesMatch = area.keyServices?.some((s) => s.toLowerCase().includes(q))
      
//       if (titleMatch || descMatch || servicesMatch) {
//         searchResults.push({
//           type: "practice",
//           title: area.title,
//           description: area.shortDescription || "View practice area details",
//           href: `/practice-areas/${area.slug}`,
//           category: "Practice Area",
//         })
//       }
//     })

//     // Search attorneys
//     attorneys.forEach((attorney) => {
//       if (
//         attorney.name.toLowerCase().includes(q) ||
//         attorney.role.toLowerCase().includes(q) ||
//         attorney.categories.some((c) => c.toLowerCase().includes(q))
//       ) {
//         searchResults.push({
//           type: "attorney",
//           title: attorney.name,
//           description: attorney.role,
//           href: "/attorneys",
//           image: attorney.image,
//           category: "Attorney",
//         })
//       }
//     })

//     // Search blog posts
//     blogPosts.forEach((post) => {
//       if (
//         post.title.toLowerCase().includes(q) ||
//         post.excerpt.toLowerCase().includes(q) ||
//         post.categories.some((c) => c.toLowerCase().includes(q)) ||
//         post.tags.some((t) => t.toLowerCase().includes(q))
//       ) {
//         searchResults.push({
//           type: "blog",
//           title: post.title,
//           description: post.excerpt.slice(0, 100) + "...",
//           href: `/blog/${post.slug}`,
//           image: post.image,
//           category: "Blog Post",
//         })
//       }
//     })

//     // Search pages
//     const pages = [
//       { title: "About Us", description: "Learn about Kachenje Law Firm", href: "/about" },
//       { title: "Contact Us", description: "Get in touch with our team", href: "/contact" },
//       { title: "Our Attorneys", description: "Meet our qualified legal team", href: "/attorneys" },
//       { title: "Practice Areas", description: "Explore our legal services", href: "/practice-areas" },
//       { title: "Blog", description: "Latest news and insights", href: "/blog" },
//     ]

//     pages.forEach((page) => {
//       if (page.title.toLowerCase().includes(q) || page.description.toLowerCase().includes(q)) {
//         searchResults.push({
//           type: "page",
//           title: page.title,
//           description: page.description,
//           href: page.href,
//           category: "Page",
//         })
//       }
//     })

//     setResults(searchResults.slice(0, 8))
//   }, [])

//   // Handle search input
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       performSearch(query)
//     }, 200)
//     return () => clearTimeout(timer)
//   }, [query, performSearch])

//   // Save to recent searches
//   const handleResultClick = (title: string) => {
//     const updated = [title, ...recentSearches.filter((s) => s !== title)].slice(0, 5)
//     setRecentSearches(updated)
//     localStorage.setItem("recentSearches", JSON.stringify(updated))
//     onClose()
//   }

//   // Handle popular search click
//   const handlePopularClick = (term: string) => {
//     setQuery(term)
//   }

//   // Close on escape
//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose()
//     }
//     window.addEventListener("keydown", handleEscape)
//     return () => window.removeEventListener("keydown", handleEscape)
//   }, [onClose])

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case "practice":
//         return <Scale className="h-4 w-4" />
//       case "attorney":
//         return <Users className="h-4 w-4" />
//       case "blog":
//         return <FileText className="h-4 w-4" />
//       default:
//         return <ArrowRight className="h-4 w-4" />
//     }
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
//             onClick={onClose}
//           />

//           {/* Modal */}
//           <motion.div
//             initial={{ opacity: 0, y: -20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -20, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-3xl z-50 px-4"
//           >
//             <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//               {/* Search Input */}
//               <div className="relative border-b border-border">
//                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search practice areas, attorneys, blog posts..."
//                   className="w-full pl-14 pr-14 py-5 text-lg bg-transparent focus:outline-none placeholder:text-muted-foreground/60"
//                 />
//                 <button
//                   onClick={onClose}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-secondary rounded-full transition-colors"
//                 >
//                   <X className="h-5 w-5 text-muted-foreground" />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="max-h-[60vh] overflow-y-auto">
//                 {query ? (
//                   // Search Results
//                   <div className="p-4">
//                     {results.length > 0 ? (
//                       <div className="space-y-2">
//                         <p className="text-xs text-muted-foreground px-2 mb-3">
//                           {results.length} results for &quot;{query}&quot;
//                         </p>
//                         {results.map((result, index) => (
//                           <Link
//                             key={`${result.type}-${index}`}
//                             href={result.href}
//                             onClick={() => handleResultClick(result.title)}
//                             className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary transition-colors group"
//                           >
//                             {result.image ? (
//                               <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
//                                 <Image
//                                   src={result.image}
//                                   alt={result.title}
//                                   fill
//                                   className="object-cover"
//                                 />
//                               </div>
//                             ) : (
//                               <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                                 {getTypeIcon(result.type)}
//                               </div>
//                             )}
//                             <div className="flex-1 min-w-0">
//                               <div className="flex items-center gap-2 mb-1">
//                                 <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent-foreground rounded-full">
//                                   {result.category}
//                                 </span>
//                               </div>
//                               <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
//                                 {result.title}
//                               </h4>
//                               <p className="text-sm text-muted-foreground line-clamp-1">
//                                 {result.description}
//                               </p>
//                             </div>
//                             <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
//                           </Link>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="text-center py-12">
//                         <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
//                         <p className="text-muted-foreground">No results found for &quot;{query}&quot;</p>
//                         <p className="text-sm text-muted-foreground/60 mt-1">
//                           Try different keywords or browse our sections below
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   // Default Content
//                   <div className="p-6">
//                     {/* Recent Searches */}
//                     {recentSearches.length > 0 && (
//                       <div className="mb-8">
//                         <div className="flex items-center gap-2 mb-4">
//                           <Clock className="h-4 w-4 text-muted-foreground" />
//                           <h3 className="text-sm font-medium text-muted-foreground">Recent Searches</h3>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                           {recentSearches.map((term) => (
//                             <button
//                               key={term}
//                               onClick={() => setQuery(term)}
//                               className="px-3 py-1.5 text-sm bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
//                             >
//                               {term}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Popular Searches */}
//                     <div className="mb-8">
//                       <div className="flex items-center gap-2 mb-4">
//                         <TrendingUp className="h-4 w-4 text-accent" />
//                         <h3 className="text-sm font-medium text-muted-foreground">Popular Searches</h3>
//                       </div>
//                       <div className="flex flex-wrap gap-2">
//                         {popularSearches.map((term) => (
//                           <button
//                             key={term}
//                             onClick={() => handlePopularClick(term)}
//                             className="px-4 py-2 text-sm border border-border hover:border-accent hover:text-accent rounded-full transition-colors"
//                           >
//                             {term}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div className="mb-6">
//                       <h3 className="text-sm font-medium text-muted-foreground mb-4">Quick Links</h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                         {quickLinks.map((link) => (
//                           <Link
//                             key={link.href}
//                             href={link.href}
//                             onClick={onClose}
//                             className="flex items-center gap-4 p-4 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors group"
//                           >
//                             <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
//                               <link.icon className="h-5 w-5" />
//                             </div>
//                             <div>
//                               <h4 className="font-medium text-foreground">{link.title}</h4>
//                               <p className="text-xs text-muted-foreground">{link.description}</p>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Featured Practice Areas */}
//                     <div>
//                       <h3 className="text-sm font-medium text-muted-foreground mb-4">Featured Practice Areas</h3>
//                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                         {practiceAreasData.slice(0, 6).map((area) => (
//                           <Link
//                             key={area.slug}
//                             href={`/practice-areas/${area.slug}`}
//                             onClick={onClose}
//                             className="relative group overflow-hidden rounded-xl aspect-[4/3]"
//                           >
//                             <Image
//                               src={`https://images.unsplash.com/photo-${area.slug === 'arbitration' ? '1589829545856-d10d557cf95f' : area.slug === 'banking-financial-institutions' ? '1454165804606-c3d57bc86b40' : area.slug === 'conveyancing' ? '1560518883-ce09059eeffa' : area.slug === 'corporate-secretarial' ? '1507679799987-c73779587ccf' : area.slug === 'corporate-services' ? '1486406146926-c627a92ad1ab' : '1450101499163-c8848c66ca85'}?w=400&q=80`}
//                               alt={area.title}
//                               fill
//                               className="object-cover group-hover:scale-110 transition-transform duration-500"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                             <div className="absolute bottom-0 left-0 right-0 p-3">
//                               <h4 className="text-white text-sm font-medium line-clamp-2">{area.title}</h4>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Footer */}
//               <div className="border-t border-border px-6 py-3 bg-secondary/30">
//                 <div className="flex items-center justify-between text-xs text-muted-foreground">
//                   <span>Press <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">ESC</kbd> to close</span>
//                   <span>Press <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">Enter</kbd> to search</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   )
// }



"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, X, ArrowRight, Clock, TrendingUp, Users, Scale, FileText, Phone, ChevronRight, Sparkles, Star, Building, Briefcase, Newspaper, Award, Zap } from "lucide-react"
import { practiceAreasData } from "@/lib/practice-areas-data"
import { attorneys } from "@/lib/attorneys-data"
import { blogPosts } from "@/lib/blog-data"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

// Quick links for default view
const quickLinks = [
  { title: "About Us", href: "/about", icon: Users, description: "Learn about our firm", color: "from-blue-500 to-blue-600" },
  { title: "Practice Areas", href: "/practice-areas", icon: Scale, description: "Explore our services", color: "from-green-500 to-green-600" },
  { title: "Our Attorneys", href: "/attorneys", icon: Users, description: "Meet our legal team", color: "from-purple-500 to-purple-600" },
  { title: "Blog & Insights", href: "/blog", icon: FileText, description: "Latest legal news", color: "from-orange-500 to-orange-600" },
  { title: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch", color: "from-red-500 to-red-600" },
]

// Popular searches
const popularSearches = [
  "Corporate Law",
  "Real Estate",
  "Banking",
  "Arbitration",
  "Employment Law",
  "Intellectual Property",
]

// Featured content
const featuredContent = [
  { title: "Corporate Services", icon: Briefcase, href: "/practice-areas/corporate-services", description: "Expert corporate legal solutions" },
  { title: "Our Attorneys", icon: Award, href: "/attorneys", description: "Meet our experienced team" },
  { title: "Latest Insights", icon: Newspaper, href: "/blog", description: "Read our legal updates" },
]

type SearchResult = {
  type: "practice" | "attorney" | "blog" | "page"
  title: string
  description: string
  href: string
  image?: string
  category?: string
  matchScore?: number
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<(HTMLAnchorElement | null)[]>([])

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches")
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Search function with relevance scoring
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const q = searchQuery.toLowerCase()
    const searchResults: (SearchResult & { score: number })[] = []

    // Search practice areas with scoring
    practiceAreasData.forEach((area) => {
      let score = 0
      const titleMatch = area.title?.toLowerCase().includes(q)
      const descMatch = area.shortDescription?.toLowerCase().includes(q)
      const fullDescMatch = area.fullDescription?.toLowerCase().includes(q)
      const servicesMatch = area.keyServices?.some((s) => s.toLowerCase().includes(q))
      
      if (titleMatch) score += 100
      if (descMatch) score += 50
      if (fullDescMatch) score += 30
      if (servicesMatch) score += 40
      
      if (score > 0) {
        searchResults.push({
          type: "practice",
          title: area.title,
          description: area.shortDescription || "View practice area details",
          href: `/practice-areas/${area.slug}`,
          category: "Practice Area",
          score,
        })
      }
    })

    // Search attorneys with scoring
    attorneys.forEach((attorney) => {
      let score = 0
      if (attorney.name.toLowerCase().includes(q)) score += 100
      if (attorney.role.toLowerCase().includes(q)) score += 60
      if (attorney.categories.some((c) => c.toLowerCase().includes(q))) score += 50
      if (attorney.expertise.some((e) => e.toLowerCase().includes(q))) score += 40
      
      if (score > 0) {
        searchResults.push({
          type: "attorney",
          title: attorney.name,
          description: attorney.role,
          href: "/attorneys",
          image: attorney.image,
          category: "Attorney",
          score,
        })
      }
    })

    // Search blog posts with scoring
    blogPosts.forEach((post) => {
      let score = 0
      if (post.title.toLowerCase().includes(q)) score += 100
      if (post.excerpt.toLowerCase().includes(q)) score += 40
      if (post.categories.some((c) => c.toLowerCase().includes(q))) score += 50
      if (post.tags.some((t) => t.toLowerCase().includes(q))) score += 30
      
      if (score > 0) {
        searchResults.push({
          type: "blog",
          title: post.title,
          description: post.excerpt.slice(0, 100) + "...",
          href: `/blog/${post.slug}`,
          image: post.image,
          category: "Blog Post",
          score,
        })
      }
    })

    // Search pages
    const pages = [
      { title: "About Us", description: "Learn about Kachenje Law Firm", href: "/about" },
      { title: "Contact Us", description: "Get in touch with our team", href: "/contact" },
      { title: "Our Attorneys", description: "Meet our qualified legal team", href: "/attorneys" },
      { title: "Practice Areas", description: "Explore our legal services", href: "/practice-areas" },
      { title: "Blog", description: "Latest news and insights", href: "/blog" },
    ]

    pages.forEach((page) => {
      let score = 0
      if (page.title.toLowerCase().includes(q)) score += 100
      if (page.description.toLowerCase().includes(q)) score += 60
      
      if (score > 0) {
        searchResults.push({
          type: "page",
          title: page.title,
          description: page.description,
          href: page.href,
          category: "Page",
          score,
        })
      }
    })

    // Sort by score and limit
    const sorted = searchResults.sort((a, b) => b.score - a.score).slice(0, 12)
    setResults(sorted)
    setSelectedIndex(-1)
  }, [])

  // Handle search input
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query)
    }, 200)
    return () => clearTimeout(timer)
  }, [query, performSearch])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, -1))
      } else if (e.key === 'Enter' && selectedIndex >= 0 && results[selectedIndex]) {
        e.preventDefault()
        const result = results[selectedIndex]
        handleResultClick(result.title)
        window.location.href = result.href
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  // Save to recent searches
  const handleResultClick = (title: string) => {
    const updated = [title, ...recentSearches.filter((s) => s !== title)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem("recentSearches", JSON.stringify(updated))
    onClose()
  }

  // Handle popular search click
  const handlePopularClick = (term: string) => {
    setQuery(term)
  }

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "practice":
        return <Scale className="h-5 w-5" />
      case "attorney":
        return <Users className="h-5 w-5" />
      case "blog":
        return <FileText className="h-5 w-5" />
      default:
        return <ArrowRight className="h-5 w-5" />
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed top-[5%] left-1/2 -translate-x-1/2 w-full max-w-4xl z-50 px-4"
          >
            <div className="bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Search Input */}
              <div className="relative bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="absolute left-6 top-1/2 -translate-y-1/2">
                  <Search className="h-6 w-6 text-accent" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for legal services, attorneys, articles..."
                  className="w-full pl-14 pr-14 py-6 text-xl bg-transparent focus:outline-none placeholder:text-gray-400 font-medium"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                )}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <kbd className="hidden sm:block px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono text-gray-500">⌘K</kbd>
                </div>
              </div>

              {/* Content */}
              <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                {query ? (
                  // Search Results
                  <div className="p-6">
                    {results.length > 0 ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm text-gray-500">
                            Found <span className="font-semibold text-accent">{results.length}</span> results for &quot;{query}&quot;
                          </p>
                          <Sparkles className="h-4 w-4 text-accent" />
                        </div>
                        {results.map((result, index) => (
                          <Link
                            key={`${result.type}-${index}`}
                            ref={(el) => { resultsRef.current[index] = el }}
                            href={result.href}
                            onClick={() => handleResultClick(result.title)}
                            className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-200 group ${
                              selectedIndex === index 
                                ? 'bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 shadow-md' 
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            {result.image ? (
                              <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                                <Image
                                  src={result.image}
                                  alt={result.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                            ) : (
                              <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                result.type === 'practice' ? 'bg-blue-100 text-blue-600' :
                                result.type === 'attorney' ? 'bg-purple-100 text-purple-600' :
                                result.type === 'blog' ? 'bg-orange-100 text-orange-600' :
                                'bg-green-100 text-green-600'
                              }`}>
                                {getTypeIcon(result.type)}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                  result.type === 'practice' ? 'bg-blue-100 text-blue-700' :
                                  result.type === 'attorney' ? 'bg-purple-100 text-purple-700' :
                                  result.type === 'blog' ? 'bg-orange-100 text-orange-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  {result.category}
                                </span>
                                {result.matchScore && result.matchScore > 80 && (
                                  <span className="text-xs flex items-center gap-1 text-yellow-600">
                                    <Star className="h-3 w-3 fill-yellow-500" />
                                    Top match
                                  </span>
                                )}
                              </div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-accent transition-colors text-lg mb-1">
                                {result.title}
                              </h4>
                              <p className="text-sm text-gray-500 line-clamp-1">
                                {result.description}
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Search className="h-12 w-12 text-gray-300" />
                        </div>
                        <p className="text-gray-600 text-lg font-medium">No results found</p>
                        <p className="text-gray-400 mt-1">Try different keywords or browse our sections below</p>
                      </div>
                    )}
                  </div>
                ) : (
                  // Default Content - Enhanced
                  <div className="p-8">
                    {/* Welcome Message */}
                    <div className="mb-8 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
                        <Zap className="h-4 w-4 text-accent" />
                        <span className="text-sm text-accent font-medium">Search anything</span>
                      </div>
                      <h3 className="text-2xl font-serif text-gray-900">What can we help you find?</h3>
                      <p className="text-gray-500 mt-2">Search for practice areas, attorneys, or legal insights</p>
                    </div>

                    {/* Featured Content */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-accent" />
                        Featured
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {featuredContent.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={onClose}
                            className="group p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-white transition-colors">
                              <item.icon className="h-6 w-6 text-accent group-hover:text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-500">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Recent Searches</h3>
                          </div>
                          <button
                            onClick={clearRecentSearches}
                            className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                          >
                            Clear all
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recentSearches.map((term) => (
                            <button
                              key={term}
                              onClick={() => handlePopularClick(term)}
                              className="px-4 py-2 text-sm bg-gray-100 hover:bg-accent/10 hover:text-accent rounded-full transition-all duration-200"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popular Searches */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Popular Searches</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => handlePopularClick(term)}
                            className="px-5 py-2.5 text-sm border-2 border-gray-200 hover:border-accent hover:text-accent rounded-full transition-all duration-200 font-medium"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Links</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {quickLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={onClose}
                            className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-accent/50 hover:shadow-md transition-all duration-300"
                          >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <link.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 group-hover:text-accent transition-colors">{link.title}</h4>
                              <p className="text-xs text-gray-500">{link.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Featured Practice Areas Preview */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Explore Practice Areas</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {practiceAreasData.slice(0, 8).map((area) => (
                          <Link
                            key={area.slug}
                            href={`/practice-areas/${area.slug}`}
                            onClick={onClose}
                            className="group relative overflow-hidden rounded-lg aspect-[3/2]"
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                            <div className="absolute inset-0">
                              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                              <h4 className="text-white text-sm font-medium group-hover:text-accent transition-colors line-clamp-2">
                                {area.title}
                              </h4>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">↑</kbd>
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">↓</kbd>
                      <span>to navigate</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Enter</kbd>
                      <span>to select</span>
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">ESC</kbd>
                    <span>to close</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </AnimatePresence>
  )
}