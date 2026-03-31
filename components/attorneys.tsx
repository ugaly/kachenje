import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { attorneys as allAttorneys } from "@/lib/attorneys-data"

// Show first 4 attorneys on homepage
const featuredAttorneys = allAttorneys.slice(0, 4)

export function Attorneys() {
  return (
    <section className="bg-secondary">
      {/* Header */}
      <div className="pt-16 lg:pt-20 pb-16 lg:pb-20 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground italic">
              Meet Our Qualified Attorneys
            </h2>
            <div className="lg:border-l lg:border-border lg:pl-12">
              <p className="text-muted-foreground lg:text-lg mb-6">
                Our team of experienced legal professionals is dedicated to providing exceptional legal services tailored to your needs. With expertise across multiple practice areas, we deliver results.
              </p>
              <Link href="/attorneys">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
                  VIEW ALL ATTORNEYS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Attorneys Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {featuredAttorneys.slice(0, 4).map((attorney) => (
          <Link href="/attorneys" key={attorney.id} className="group cursor-pointer">
            <div className="relative h-80 lg:h-96 xl:h-[550px] overflow-hidden">
              <Image
                src={attorney.image}
                alt={attorney.name}
                fill
                style={{objectPosition: 'top'}}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="bg-background py-6 lg:py-8 px-4 text-center border-t-2 border-transparent group-hover:border-accent transition-colors">
              <h3 className="font-serif text-lg lg:text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                {attorney.name}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                {attorney.role}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
