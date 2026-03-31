"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Kachenje Law Firm provided exceptional representation for our company during a complex merger. Their expertise in corporate law and attention to detail made the entire process seamless.",
    name: "James Mwangi",
    handle: "CEO, TechVentures Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote: "The team at Kachenje demonstrated outstanding professionalism in handling our real estate transactions. Their knowledge of Tanzanian property law is truly impressive.",
    name: "Sarah Kimaro",
    handle: "Managing Director, Property Holdings",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    quote: "Their commitment to understanding our business needs and providing tailored legal solutions has made them our trusted legal partner for all corporate matters.",
    name: "Michael Okonkwo",
    handle: "CFO, East Africa Investments",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex(index)
        setIsAnimating(false)
      }, 300)
    }
  }

  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Image */}
        <div 
          className="relative h-64 lg:h-auto"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8112000/pexels-photo-8112000.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Right - Testimonial Content */}
        <div className="bg-primary py-16 lg:py-24 px-8 lg:px-16 xl:px-24">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-12">
            Client&apos;s Testimonial
          </h2>

          <div className="relative">
            <Quote className="h-8 w-8 lg:h-10 lg:w-10 text-accent mb-6" />
            
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8">
                {testimonials[activeIndex].quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-medium">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[activeIndex].handle}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-white w-6' : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
