"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Scale, Building2, Home, FileText, Briefcase, Users, 
  Zap, TrendingDown, Lightbulb, Plane, Building,
  ChevronRight, ArrowRight, Check, Phone, Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Scale, Building2, Home, FileText, Briefcase, Users,
  Zap, TrendingDown, Lightbulb, Plane, Building
}

interface PracticeArea {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  keyServices: string[]
  highlights: { label: string; value: string }[]
}

interface PracticeAreaContentProps {
  area: PracticeArea
  allAreas: PracticeArea[]
}

export function PracticeAreaContent({ area, allAreas }: PracticeAreaContentProps) {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)
  const IconComponent = iconMap[area.icon] || Scale

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
            alt="Practice Area Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/practice-areas" className="hover:text-accent transition-colors">Practice Areas</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-accent">{area.title}</span>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="hidden lg:flex h-20 w-20 rounded-lg bg-accent/20 items-center justify-center flex-shrink-0">
              <IconComponent className="h-10 w-10 text-accent" />
            </div>
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-4">{area.title}</h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl">{area.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Content - Main Details */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{area.fullDescription}</p>
              </div>

              {/* Key Services */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">Key Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.keyServices.map((service) => (
                    <div 
                      key={service}
                      className="flex items-start gap-3 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                    >
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/30 transition-colors">
                        <Check className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-primary text-white p-8 lg:p-12 rounded-lg">
                <h3 className="font-serif text-xl lg:text-2xl mb-8">Our Track Record</h3>
                <div className="grid grid-cols-3 gap-6">
                  {area.highlights.map((highlight, index) => (
                    <div 
                      key={highlight.label}
                      className={`text-center ${index < 2 ? 'border-r border-white/20' : ''}`}
                    >
                      <div className="text-3xl lg:text-4xl font-light text-accent mb-2">{highlight.value}</div>
                      <div className="text-sm text-white/60">{highlight.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 lg:p-10 bg-secondary rounded-lg border border-border">
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4">Need Legal Assistance?</h3>
                <p className="text-muted-foreground mb-6">Our team of experienced attorneys is ready to help you navigate your legal challenges.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us Now
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Inquiry
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Practice Areas Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="font-serif text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Areas of Practice
                </h3>
                <div className="space-y-1">
                  {allAreas.map((practiceArea) => {
                    const AreaIcon = iconMap[practiceArea.icon] || Scale
                    const isActive = practiceArea.slug === area.slug
                    const isHovered = hoveredArea === practiceArea.slug
                    
                    return (
                      <Link
                        key={practiceArea.slug}
                        href={`/practice-areas/${practiceArea.slug}`}
                        className={`group flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-secondary text-foreground'
                        }`}
                        onMouseEnter={() => setHoveredArea(practiceArea.slug)}
                        onMouseLeave={() => setHoveredArea(null)}
                      >
                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive 
                            ? 'bg-accent/20' 
                            : 'bg-secondary group-hover:bg-accent/20'
                        }`}>
                          <AreaIcon className={`h-5 w-5 transition-colors ${
                            isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-accent'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`block font-medium text-sm truncate ${
                            isActive ? 'text-white' : ''
                          }`}>
                            {practiceArea.title}
                          </span>
                        </div>
                        <ArrowRight className={`h-4 w-4 flex-shrink-0 transition-all ${
                          isActive 
                            ? 'text-accent opacity-100' 
                            : 'text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent'
                        } ${isHovered && !isActive ? 'translate-x-1' : ''}`} />
                      </Link>
                    )
                  })}
                </div>

                {/* Contact Card */}
                <div className="mt-8 p-6 bg-primary text-white rounded-lg">
                  <h4 className="font-serif text-lg mb-3">Get Expert Advice</h4>
                  <p className="text-white/70 text-sm mb-4">Speak with our specialists today.</p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+255123456789" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                      <Phone className="h-4 w-4" />
                      +255 123 456 789
                    </a>
                    <a href="mailto:info@kachenje.co.tz" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                      <Mail className="h-4 w-4" />
                      info@kachenje.co.tz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
