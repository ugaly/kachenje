import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { PracticeAreas } from "@/components/practice-areas"
import { Stats } from "@/components/stats"
import { CaseStudies } from "@/components/case-studies"
import { Attorneys } from "@/components/attorneys"
import { Testimonials } from "@/components/testimonials"
import { News } from "@/components/news"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <PracticeAreas />
      <Stats />
      <CaseStudies />
      <Attorneys />
      <Testimonials />
      <News />

      {/* CTA Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl text-foreground lg:text-4xl xl:text-5xl">
              Ready to Work Together?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Let us help you navigate the legal landscape with confidence. Our team is ready to provide the expert guidance you need.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="bg-accent px-8 py-6 text-accent-foreground hover:bg-accent/90">
                  Contact Us
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-primary px-8 py-6 text-primary hover:bg-primary hover:text-white"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
