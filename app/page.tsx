import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { PracticeAreas } from "@/components/practice-areas"
import { Stats } from "@/components/stats"
import { CaseStudies } from "@/components/case-studies"
import { Attorneys } from "@/components/attorneys"
import { Testimonials } from "@/components/testimonials"
import { News } from "@/components/news"

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
    </>
  )
}
