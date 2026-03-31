"use client"

import { Button } from "@/components/ui/button"
import { Globe, Users, Newspaper } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "LOREM IPSUM DOLOR CONSECTETUR",
  },
  {
    icon: Users,
    title: "Join Our Team",
    description: "LOREM IPSUM DOLOR CONSECTETUR",
  },
  {
    icon: Newspaper,
    title: "Press Releases",
    description: "LOREM IPSUM DOLOR CONSECTETUR",
  },
]

export function Hero() {
  return (
    <section className="relative flex flex-col">
      {/* Hero Background */}
      <div
        className="relative flex items-center min-h-[70vh] lg:min-h-[75vh]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url('https://images.pexels.com/photos/6077381/pexels-photo-6077381.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 pt-24 lg:pt-28 pb-16 lg:pb-20">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 lg:mb-8">
              Licensed Law Firm in Tanzania.
            </h1>
            <p className="text-white/80 text-lg lg:text-xl mb-8 lg:mb-10 max-w-lg lg:max-w-xl">
              Experienced legal practitioners providing tailored solutions with requisite skills and expertise for today&apos;s legal needs.
            </p>
            <Button
              variant="outline"
              className="border-accent text-foreground bg-accent hover:bg-accent/90 rounded-full px-8 lg:px-10 py-6 lg:py-7 text-sm lg:text-base font-medium tracking-wider"
            >
              MEET OUR TEAM
            </Button>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex items-center gap-4 lg:gap-6 py-6 lg:py-8 px-6 lg:px-8 ${index !== features.length - 1 ? 'md:border-r border-white/10' : ''
                  }`}
              >
                <div className="flex-shrink-0">
                  <feature.icon className="h-10 w-10 lg:h-12 lg:w-12 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg lg:text-xl text-white">{feature.title}</h3>
                  <p className="text-xs lg:text-sm text-white/60 tracking-wider">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
