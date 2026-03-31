"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Phone, Scale, GraduationCap, Briefcase, Globe, Award, ChevronRight, Filter, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { attorneys, categories, type Attorney } from "@/lib/attorneys-data"

export function AttorneysListing() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null)
  const [filteredAttorneys, setFilteredAttorneys] = useState(attorneys)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredAttorneys(attorneys)
    } else {
      setFilteredAttorneys(attorneys.filter(a => a.categories.includes(selectedCategory)))
    }
  }, [selectedCategory])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedAttorney) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedAttorney])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Our Attorneys</span>
            </nav>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Meet Our Legal Team
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Our team of experienced legal professionals is dedicated to providing exceptional legal services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 lg:py-8 bg-secondary border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Desktop Filter - Improved Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Filter by Practice Area</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">{filteredAttorneys.length} Attorneys</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-background border border-border text-foreground hover:border-accent hover:text-accent hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filter */}
          <div className="lg:hidden">
            <div className="flex items-center gap-3 mb-3">
              <Filter className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Filter by Practice Area</span>
            </div>
            
            <button
              className="flex items-center justify-between w-full px-4 py-3 bg-background border border-border rounded-lg"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="text-sm font-medium">{selectedCategory}</span>
              <ChevronRight className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 pt-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category)
                          setIsFilterOpen(false)
                        }}
                        className={`px-4 py-2 text-sm rounded-full transition-all ${
                          selectedCategory === category
                            ? 'bg-primary text-white'
                            : 'bg-background border border-border text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredAttorneys.map((attorney, index) => (
                <motion.div
                  key={attorney.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedAttorney(attorney)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-secondary">
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={attorney.image}
                        alt={attorney.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading={index < 4 ? "eager" : "lazy"}
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Eye Icon - Top Right */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-white transition-colors">
                          <Eye className="h-5 w-5 text-primary group-hover:text-primary" />
                        </div>
                      </div>
                      
                      {/* Hover Overlay Content - Bottom Categories */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex flex-wrap gap-2">
                          {attorney.categories.slice(0, 2).map((cat) => (
                            <span key={cat} className="px-2 py-1 text-xs bg-white/90 backdrop-blur-sm text-primary rounded font-medium">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="p-5 text-center border-t-2 border-transparent group-hover:border-accent transition-colors">
                      <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {attorney.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {attorney.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredAttorneys.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No attorneys found in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCategory("All")}
              >
                View All Attorneys
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Attorney Detail Modal */}
      <AnimatePresence>
        {selectedAttorney && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedAttorney(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-background rounded-2xl shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAttorney(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left Column - Image & Quick Info */}
                <div className="lg:col-span-1 bg-primary p-8 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-6 ">
                    <Image
                      src={selectedAttorney.image}
                      alt={selectedAttorney.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'top' }}
                    />
                  </div>
                  
                  <h2 className="font-serif text-2xl text-white mb-2">
                    {selectedAttorney.name}
                  </h2>
                  <p className="text-accent mb-6">{selectedAttorney.role}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <a 
                      href={`mailto:${selectedAttorney.email}`}
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5 text-accent" />
                      <span className="text-sm">{selectedAttorney.email}</span>
                    </a>
                    <a 
                      href={`tel:${selectedAttorney.phone}`}
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <Phone className="h-5 w-5 text-accent" />
                      <span className="text-sm">{selectedAttorney.phone}</span>
                    </a>
                  </div>
                  
                  {/* Languages */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-white/60 mb-3">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedAttorney.languages.map((lang) => (
                        <span key={lang} className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Admissions */}
                  {selectedAttorney.admissions.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center gap-2 text-white/60 mb-3">
                        <Award className="h-4 w-4" />
                        <span className="text-sm">Admissions</span>
                      </div>
                      <ul className="space-y-2">
                        {selectedAttorney.admissions.map((admission) => (
                          <li key={admission} className="text-sm text-white/80">
                            {admission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2 p-8">
                  {/* Bio */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                      <Scale className="h-5 w-5 text-accent" />
                      About
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedAttorney.bio}
                    </p>
                  </div>
                  
                  {/* Practice Areas */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedAttorney.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="px-4 py-2 text-sm bg-secondary text-foreground rounded-lg border border-border"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Education */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-accent" />
                      Education
                    </h3>
                    <ul className="space-y-3">
                      {selectedAttorney.education.map((edu) => (
                        <li key={edu} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                          <span className="text-muted-foreground">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Experience */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Experience
                    </h3>
                    <ul className="space-y-3">
                      {selectedAttorney.experience.map((exp) => (
                        <li key={exp} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                          <span className="text-muted-foreground">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Categories */}
                  {selectedAttorney.categories.length > 0 && (
                    <div className="pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">Practice Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedAttorney.categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                              setSelectedCategory(cat)
                              setSelectedAttorney(null)
                            }}
                            className="px-3 py-1 text-sm bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
