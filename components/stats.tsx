"use client"

import { useState, useEffect, useRef } from "react"
import { Scale, UserCheck, Gavel } from "lucide-react"

const stats = [
  { value: 30, suffix: "%", label: "Cases Success" },
  { value: 15, suffix: "%", label: "Countersuits Filed" },
  { value: 122, suffix: "+", label: "Happy Clients" },
  { value: 38, suffix: "%", label: "Cases Dismissed" },
]

const services = [
  {
    icon: Scale,
    title: "Case Investigation",
    description: "Thorough analysis of your legal matter with detailed research and evidence gathering to build a strong foundation for your case.",
  },
  {
    icon: UserCheck,
    title: "Request an Attorney",
    description: "Connect with our experienced legal professionals who specialize in your specific area of law for personalized representation.",
  },
  {
    icon: Gavel,
    title: "Get Legal Help",
    description: "Access comprehensive legal support from consultation through resolution with our client-focused approach and dedicated team.",
  },
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = value / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-light text-white mb-2">
      {count}{suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section>
      {/* Stats Section with Background */}
      <div 
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%), url('https://images.pexels.com/photos/6077964/pexels-photo-6077964.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic leading-tight mb-4 lg:mb-6">
              Delivering Justice with Integrity &amp; Excellence
            </h2>
            <p className="text-white/70 mb-12 lg:text-lg">
              Our track record reflects our commitment to achieving favorable outcomes for our clients through dedicated legal expertise and strategic advocacy.
            </p>
            
            {/* Stats Grid - 2 rows x 2 columns */}
            <div className="grid grid-cols-2 gap-0 max-w-md">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`py-6 ${
                    index % 2 === 0 ? 'pr-8 border-r border-white/20' : 'pl-8'
                  } ${
                    index < 2 ? 'border-b border-white/20' : ''
                  }`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className={`py-12 lg:py-16 px-8 lg:px-12 flex items-start gap-6 ${
              index === 0 ? 'bg-secondary' : index === 1 ? 'bg-muted' : 'bg-secondary'
            }`}
          >
            <div className="flex-shrink-0">
              <service.icon className="h-14 w-14 lg:h-16 lg:w-16 text-accent" strokeWidth={1} />
            </div>
            <div>
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
