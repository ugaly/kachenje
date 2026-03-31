"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Mail, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchModal } from "@/components/search-modal"

const practiceAreas = [
  { name: "Arbitration", slug: "arbitration" },
  { name: "Banking and Financial Institutions", slug: "banking-financial-institutions" },
  { name: "Conveyancing", slug: "conveyancing" },
  { name: "Corporate Secretarial Services", slug: "corporate-secretarial" },
  { name: "Corporate Services", slug: "corporate-services" },
  { name: "Employment and Labour", slug: "employment-labour" },
  { name: "Energy, Mining, Oil and Gas", slug: "energy-mining-oil-gas" },
  { name: "Insolvency and Debt Recovery", slug: "insolvency-debt-recovery" },
  { name: "Intellectual Property", slug: "intellectual-property" },
  { name: "Labour Migration Services", slug: "labour-migration" },
  { name: "Real Estate", slug: "real-estate" },
]

const navItems = [
  { name: "HOME", href: "/", hasDropdown: false },
  { name: "PRACTICE AREAS", href: "/practice-areas", hasDropdown: true, items: practiceAreas },
  { name: "ATTORNEYS", href: "/attorneys", hasDropdown: false },
  { name: "ABOUT US", href: "/about", hasDropdown: false },
  { name: "BLOG", href: "/blog", hasDropdown: false },
  { name: "CONTACT", href: "/contact", hasDropdown: false },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Reset mobile dropdown when menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileDropdown(null)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:888-123-4567" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-3 w-3" />
                Call Us: 888-123-4567
              </a>
              <a href="mailto:info@kachenje.co.tz" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-3 w-3" />
                Email Us: info@kachenje.co.tz
              </a>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-accent transition-colors" aria-label="Google Plus">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 10.4h3.6c-.1 1.5-.7 2.7-1.6 3.5-.9.8-2.1 1.2-3.4 1.2-1.4 0-2.6-.5-3.5-1.5-1-1-1.5-2.2-1.5-3.6s.5-2.6 1.5-3.6c1-.9 2.1-1.4 3.5-1.4 1.3 0 2.4.4 3.3 1.2l-1.3 1.3c-.5-.5-1.2-.8-2-.8-.9 0-1.6.3-2.2.9-.6.6-.9 1.4-.9 2.4s.3 1.8.9 2.4c.6.6 1.4.9 2.2.9.6 0 1.1-.1 1.5-.3.6-.3 1-.7 1.2-1.3H7.8v-1.3zm12.2.8v-1.6h-1.6v1.6h-1.6v1.6h1.6v1.6h1.6v-1.6h1.6v-1.6h-1.6z"/></svg>
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="Vimeo">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.4 7.03c-.1 2.2-1.63 5.2-4.6 9-.32.4-3.1 4.97-5.73 4.97-1.67 0-3.07-1.53-3.57-4.1-.63-3.33-1.33-5.83-2.1-7.5-.6-1.33-1.26-2-2-2-.16 0-.7.33-1.63 1l-1-1.27 3.5-3.1c1.5-1.33 2.7-2.03 3.6-2.1 1.9-.2 3.07 1.1 3.5 3.9.47 3.03.8 4.93 1 5.7.53 2.47 1.13 3.7 1.8 3.7.5 0 1.26-.8 2.26-2.4.97-1.6 1.5-2.83 1.57-3.67.13-1.4-.4-2.1-1.6-2.1-.57 0-1.17.13-1.8.4 1.2-3.9 3.47-5.8 6.83-5.7 2.5.07 3.67 1.7 3.5 4.87z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a1a2e]/95 backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0 block transition-all duration-300">
              <img
                src="https://kachenje.co.tz/img/logo-big.png"
                alt="Kachenje Law Firm"
                style={{ height: isScrolled ? '40px' : '56px', width: 'auto' }}
                className={`transition-all duration-300 ${isScrolled ? 'brightness-0 invert' : ''}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={item.href}>
                    <Button 
                      variant="ghost" 
                      className="text-white hover:text-accent hover:bg-transparent font-medium text-sm tracking-wide"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                    </Button>
                  </Link>
                  
                  {/* Mega Dropdown for Practice Areas */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white shadow-2xl border border-border/50 min-w-[320px] p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="mb-4 pb-3 border-b border-border">
                          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                            Our Practice Areas
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {practiceAreas.map((subItem) => (
                            <Link
                              key={subItem.slug}
                              href={`/practice-areas/${subItem.slug}`}
                              className="group flex items-center py-2.5 px-3 text-sm text-muted-foreground hover:text-accent hover:bg-secondary/50 transition-all border-l-2 border-transparent hover:border-accent"
                            >
                              <span className="group-hover:translate-x-1 transition-transform">
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-border">
                          <Link 
                            href="/practice-areas" 
                            className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                          >
                            View All Practice Areas →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-transparent">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-accent hover:bg-transparent"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border shadow-xl">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-border">
                    <div
                      className="flex items-center justify-between cursor-pointer select-none"
                      onClick={() => {
                        if (item.hasDropdown) {
                          setMobileDropdown(mobileDropdown === item.name ? null : item.name)
                        } else {
                          setMobileMenuOpen(false)
                        }
                      }}
                    >
                      <span className="py-3 text-foreground hover:text-accent font-medium text-base tracking-wide block w-full">
                        {item.name}
                      </span>
                      {item.hasDropdown && (
                        <ChevronDown className={`h-5 w-5 transition-transform ${mobileDropdown === item.name ? 'rotate-180 text-accent' : ''}`} />
                      )}
                    </div>
                    {item.hasDropdown && mobileDropdown === item.name && (
                      <div className="pl-4 pb-2 animate-in fade-in slide-in-from-top-2 duration-200 bg-muted/40 rounded-b">
                        {practiceAreas.map((subItem) => (
                          <Link
                            key={subItem.slug}
                            href={`/practice-areas/${subItem.slug}`}
                            className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                        <Link
                          href="/practice-areas"
                          className="block py-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Practice Areas →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href="tel:888-123-4567" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us: 888-123-4567
                  </a>
                  <a href="mailto:info@kachenje.co.tz" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Us: info@kachenje.co.tz
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
