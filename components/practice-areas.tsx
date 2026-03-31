import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, Building2, FileText, Briefcase, Users, Pickaxe, CreditCard, Lightbulb, Plane, Home, Gavel } from "lucide-react"

const practiceAreas = [
  {
    icon: Gavel,
    title: "Arbitration",
    slug: "arbitration",
  },
  {
    icon: Building2,
    title: "Banking & Finance",
    slug: "banking-financial-institutions",
  },
  {
    icon: FileText,
    title: "Conveyancing",
    slug: "conveyancing",
  },
  {
    icon: Briefcase,
    title: "Corporate Services",
    slug: "corporate-services",
  },
  {
    icon: Users,
    title: "Employment & Labour",
    slug: "employment-labour",
  },
  {
    icon: Pickaxe,
    title: "Energy & Mining",
    slug: "energy-mining-oil-gas",
  },
]

export function PracticeAreas() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="lg:pr-8">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">What We Do</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Areas of Practice
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 lg:text-lg">
              We serve both domestic and international clients, providing guidance on cross-border investments, regulatory approvals, and complex commercial arrangements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 lg:text-lg font-medium">
              Trusted Partner for Local and International Clients. Our experience in international standards ensures global best practices are applied locally.
            </p>
            <Link href="/practice-areas">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-sm font-medium tracking-wider"
              >
                SEE ALL PRACTICE AREAS
              </Button>
            </Link>
          </div>

          {/* Right - Practice Area Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {practiceAreas.map((area) => (
              <Link
                key={area.title}
                href={`/practice-areas/${area.slug}`}
                className="bg-primary p-6 lg:p-8 flex items-center gap-4 hover:bg-primary/90 transition-colors cursor-pointer group"
              >
                <div className="flex-shrink-0">
                  <area.icon className="h-12 w-12 lg:h-14 lg:w-14 text-accent" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-lg lg:text-xl text-primary-foreground group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
