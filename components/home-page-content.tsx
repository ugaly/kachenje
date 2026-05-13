"use client"

import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Stats } from "@/components/stats"
import { CaseStudies } from "@/components/case-studies"
import { Attorneys } from "@/components/attorneys"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HomePageContent() {
  return (
    <main className="min-h-0">
      <Hero />
      <div className="sticky top-0 z-50 shadow-sm">
        <Header embedded />
      </div>

      <div className="pb-12 lg:pb-16">
        <Stats />
      </div>
      <div className="pt-6 pb-0 lg:pt-8 lg:pb-0">
        <CaseStudies />
      </div>
      <div className="pb-12 lg:pb-16">
        <Attorneys />
      </div>

      <section className="border-t border-border bg-muted/40 py-12 lg:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-6 font-serif text-3xl text-foreground lg:text-4xl xl:text-5xl">
            Ready to Work Together?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            Let us help you navigate the legal landscape with confidence. Our team is ready to provide the expert guidance you need.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/contact">
              <Button className="rounded-full bg-primary px-10 py-6 text-primary-foreground hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="rounded-full border-foreground/20 px-10 py-6 hover:bg-foreground/5">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
