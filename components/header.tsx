"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Search } from "lucide-react"
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
  { name: "OUR TEAM", href: "/our-team", hasDropdown: false },
  { name: "ABOUT US", href: "/about", hasDropdown: false },
  { name: "CONTACT", href: "/contact", hasDropdown: false },
]

type HeaderProps = {
  /** When true, header sits in page flow (e.g. below home hero) and stays solid; parent may use sticky. */
  embedded?: boolean
}

export function Header({ embedded = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) setMobileDropdown(null)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (embedded) return
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [embedded])

  const shellClass = embedded
    ? "relative z-50 w-full"
    : "fixed top-0 left-0 right-0 z-50"

  const mainBarClass = embedded
    ? "bg-primary py-3 lg:py-4"
    : `transition-all duration-300 ${
        isScrolled ? "bg-primary py-3 lg:py-4 backdrop-blur-sm" : "bg-transparent py-4"
      }`

  return (
    <header className={shellClass}>
      <div className={mainBarClass}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="block shrink-0 transition-opacity hover:opacity-90">
              <Image
                src="https://kachenje.co.tz/img/logo.png"
                alt="Kachenje Advocate"
                width={400}
                height={144}
                className="h-10 w-auto md:h-11"
                priority={embedded}
              />
            </Link>

            <nav className="hidden lg:flex flex-1 items-center justify-end gap-1 pr-4">
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
                      className="text-white hover:text-white hover:bg-white/10 font-medium text-sm tracking-wide"
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`ml-1 h-3 w-3 transition-transform ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Button>
                  </Link>

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full right-0 pt-2">
                      <div className="max-h-[min(70vh,520px)] overflow-y-auto rounded-sm border border-border bg-background p-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 min-w-[300px]">
                        <div className="mb-4 border-b border-border pb-3">
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Practice areas
                          </h3>
                        </div>
                        <div className="grid gap-1">
                          {practiceAreas.map((subItem) => (
                            <Link
                              key={subItem.slug}
                              href={`/practice-areas/${subItem.slug}`}
                              className="group border-l-2 border-transparent py-2.5 pl-3 text-sm text-muted-foreground transition-all hover:border-foreground/30 hover:bg-muted/60 hover:text-foreground"
                            >
                              <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 border-t border-border pt-3">
                          <Link
                            href="/practice-areas"
                            className="text-sm font-medium text-foreground hover:underline"
                          >
                            View all practice areas
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 min-w-11 min-h-11"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-primary">
            <div className="container mx-auto max-h-[min(70vh,calc(100dvh-8rem))] overflow-y-auto px-4 py-5">
              <nav className="flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-white/10 last:border-0">
                    {item.hasDropdown ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between py-3 text-left text-base font-medium tracking-wide text-white"
                          onClick={() =>
                            setMobileDropdown(mobileDropdown === item.name ? null : item.name)
                          }
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              mobileDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileDropdown === item.name && (
                          <div className="space-y-1 border-l border-white/15 pl-3 pb-3">
                            {practiceAreas.map((subItem) => (
                              <Link
                                key={subItem.slug}
                                href={`/practice-areas/${subItem.slug}`}
                                className="block py-2 text-sm text-white/75 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                            <Link
                              href="/practice-areas"
                              className="block py-2 text-sm font-medium text-white"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View all practice areas
                            </Link>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 text-base font-medium tracking-wide text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
