"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, X, ArrowRight, Clock, TrendingUp, Users, Scale, FileText, Phone, ChevronRight } from "lucide-react"
import { practiceAreasData } from "@/lib/practice-areas-data"
import { attorneys } from "@/lib/attorneys-data"
import { blogPosts } from "@/lib/blog-data"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

// Quick links for default view
const quickLinks = [
  { title: "About Us", href: "/about", icon: Users, description: "Learn about our firm" },
  { title: "Practice Areas", href: "/practice-areas", icon: Scale, description: "Explore our services" },
  { title: "Our Attorneys", href: "/attorneys", icon: Users, description: "Meet our legal team" },
  { title: "Blog & Insights", href: "/blog", icon: FileText, description: "Latest legal news" },
  { title: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch" },
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

type SearchResult = {
  type: "practice" | "attorney" | "blog" | "page"
  title: string
  description: string
  href: string
  image?: string
  category?: string
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

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

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const q = searchQuery.toLowerCase()
    const searchResults: SearchResult[] = []

    // Search practice areas
    practiceAreasData.forEach((area) => {
      const titleMatch = area.title?.toLowerCase().includes(q)
      const descMatch = area.shortDescription?.toLowerCase().includes(q) || area.fullDescription?.toLowerCase().includes(q)
      const servicesMatch = area.keyServices?.some((s) => s.toLowerCase().includes(q))
      
      if (titleMatch || descMatch || servicesMatch) {
        searchResults.push({
          type: "practice",
          title: area.title,
          description: area.shortDescription || "View practice area details",
          href: `/practice-areas/${area.slug}`,
          category: "Practice Area",
        })
      }
    })

    // Search attorneys
    attorneys.forEach((attorney) => {
      if (
        attorney.name.toLowerCase().includes(q) ||
        attorney.role.toLowerCase().includes(q) ||
        attorney.categories.some((c) => c.toLowerCase().includes(q))
      ) {
        searchResults.push({
          type: "attorney",
          title: attorney.name,
          description: attorney.role,
          href: "/attorneys",
          image: attorney.image,
          category: "Attorney",
        })
      }
    })

    // Search blog posts
    blogPosts.forEach((post) => {
      if (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.categories.some((c) => c.toLowerCase().includes(q)) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        searchResults.push({
          type: "blog",
          title: post.title,
          description: post.excerpt.slice(0, 100) + "...",
          href: `/blog/${post.slug}`,
          image: post.image,
          category: "Blog Post",
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
      if (page.title.toLowerCase().includes(q) || page.description.toLowerCase().includes(q)) {
        searchResults.push({
          type: "page",
          title: page.title,
          description: page.description,
          href: page.href,
          category: "Page",
        })
      }
    })

    setResults(searchResults.slice(0, 8))
  }, [])

  // Handle search input
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query)
    }, 200)
    return () => clearTimeout(timer)
  }, [query, performSearch])

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
        return <Scale className="h-4 w-4" />
      case "attorney":
        return <Users className="h-4 w-4" />
      case "blog":
        return <FileText className="h-4 w-4" />
      default:
        return <ArrowRight className="h-4 w-4" />
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-3xl z-50 px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="relative border-b border-border">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search practice areas, attorneys, blog posts..."
                  className="w-full pl-14 pr-14 py-5 text-lg bg-transparent focus:outline-none placeholder:text-muted-foreground/60"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query ? (
                  // Search Results
                  <div className="p-4">
                    {results.length > 0 ? (
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground px-2 mb-3">
                          {results.length} results for &quot;{query}&quot;
                        </p>
                        {results.map((result, index) => (
                          <Link
                            key={`${result.type}-${index}`}
                            href={result.href}
                            onClick={() => handleResultClick(result.title)}
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary transition-colors group"
                          >
                            {result.image ? (
                              <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={result.image}
                                  alt={result.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                {getTypeIcon(result.type)}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent-foreground rounded-full">
                                  {result.category}
                                </span>
                              </div>
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                {result.title}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {result.description}
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                        <p className="text-muted-foreground">No results found for &quot;{query}&quot;</p>
                        <p className="text-sm text-muted-foreground/60 mt-1">
                          Try different keywords or browse our sections below
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  // Default Content
                  <div className="p-6">
                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <h3 className="text-sm font-medium text-muted-foreground">Recent Searches</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recentSearches.map((term) => (
                            <button
                              key={term}
                              onClick={() => setQuery(term)}
                              className="px-3 py-1.5 text-sm bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
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
                        <h3 className="text-sm font-medium text-muted-foreground">Popular Searches</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <button
                            key={term}
                            onClick={() => handlePopularClick(term)}
                            className="px-4 py-2 text-sm border border-border hover:border-accent hover:text-accent rounded-full transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-muted-foreground mb-4">Quick Links</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {quickLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={onClose}
                            className="flex items-center gap-4 p-4 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                              <link.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{link.title}</h4>
                              <p className="text-xs text-muted-foreground">{link.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Featured Practice Areas */}
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-4">Featured Practice Areas</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {practiceAreasData.slice(0, 6).map((area) => (
                          <Link
                            key={area.slug}
                            href={`/practice-areas/${area.slug}`}
                            onClick={onClose}
                            className="relative group overflow-hidden rounded-xl aspect-[4/3]"
                          >
                            <Image
                              src={`https://images.unsplash.com/photo-${area.slug === 'arbitration' ? '1589829545856-d10d557cf95f' : area.slug === 'banking-financial-institutions' ? '1454165804606-c3d57bc86b40' : area.slug === 'conveyancing' ? '1560518883-ce09059eeffa' : area.slug === 'corporate-secretarial' ? '1507679799987-c73779587ccf' : area.slug === 'corporate-services' ? '1486406146926-c627a92ad1ab' : '1450101499163-c8848c66ca85'}?w=400&q=80`}
                              alt={area.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <h4 className="text-white text-sm font-medium line-clamp-2">{area.title}</h4>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-border px-6 py-3 bg-secondary/30">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Press <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">ESC</kbd> to close</span>
                  <span>Press <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">Enter</kbd> to search</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
