import Link from "next/link"
import Image from "next/image"
import { 
  Scale, Building2, Home, FileText, Briefcase, Users, 
  Zap, TrendingDown, Lightbulb, Plane, Building,
  ArrowRight
} from "lucide-react"
import { practiceAreasData } from "@/lib/practice-areas-data"

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Scale, Building2, Home, FileText, Briefcase, Users,
  Zap, TrendingDown, Lightbulb, Plane, Building
}

export const metadata = {
  title: "Areas of Practice | Kachenje Law Firm",
  description: "Explore our comprehensive legal services across multiple practice areas including arbitration, banking, corporate services, and more.",
}

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
            alt="Practice Areas Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-48 lg:pt-48 pb-16 lg:pb-24">
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-4">Areas of Practice</h1>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl">
            Comprehensive legal solutions tailored to meet your business and personal needs across diverse practice areas.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {practiceAreasData.map((area) => {
              const IconComponent = iconMap[area.icon] || Scale
              
              return (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="group bg-white border border-border rounded-lg p-6 lg:p-8 hover:shadow-xl hover:border-accent/50 transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-7 w-7 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {area.shortDescription}
                  </p>
                  <div className="flex items-center text-accent font-medium text-sm">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our experienced team is ready to help you navigate complex legal challenges with tailored solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-4 font-medium transition-colors"
          >
            Contact Us Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
