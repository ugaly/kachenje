"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { QrCode } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import { attorneys as allAttorneys } from "@/lib/attorneys-data"

// Show first 4 attorneys on homepage
const featuredAttorneys = allAttorneys.slice(0, 4)

// Card component for homepage attorneys - Ultra lightweight
function AttorneyCard({ attorney, index }: { attorney: any; index: number }) {
  const [isMobile, setIsMobile] = useState(false)

  // Simple mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative">
      {/* QR code icon for Nzaro Nuhu Kachenje */}
      {attorney.id === "nzaro-kachenje" && (
        <Dialog>
          <DialogTrigger asChild>
            <button
              className={`
                absolute top-4 left-4 z-20 bg-white/80 hover:bg-accent p-2 rounded-full shadow
                ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                pointer-events-auto
              `}
              aria-label="Show QR code"
              onClick={e => e.stopPropagation()}
              type="button"
            >
              <QrCode className="w-6 h-6 text-accent" />
            </button>
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center gap-4 max-w-xs p-8 rounded-2xl bg-white/60 backdrop-blur-xl shadow-2xl border-2 border-accent">
            <div className="flex flex-col items-center gap-2 w-full">
              <DialogTitle className="text-2xl font-serif text-primary mb-2">Scan QR Code</DialogTitle>
              <span className="text-accent-foreground text-sm mb-2">Get more details about Nzaro Nuhu Kachenje</span>
            </div>
            <div className="rounded-xl bg-white p-3 shadow-lg border border-accent">
              <QRCodeSVG value="https://card-seven-pearl.vercel.app/13E8FD" size={180} fgColor="#1a1a2e" bgColor="#fff" level="H" includeMargin={true} />
            </div>
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="font-semibold text-primary">Nzaro Nuhu Kachenje</span>
              <span className="text-xs text-muted-foreground">Managing Partner</span>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <span className="block font-medium text-accent mb-1">Point your camera or QR app</span>
              <span>to instantly view the digital business card.</span>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      <Link href="/attorneys">
        <div className="relative h-[550px] lg:h-[550px] xl:h-[550px] overflow-hidden bg-gray-100">
          <Image
            src={attorney.image}
            alt={attorney.name}
            fill
            style={{ objectPosition: 'top' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            loading={index < 2 ? "eager" : "lazy"}
            quality={75}
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="bg-background py-6 lg:py-8 px-4 text-center border-t border-border">
          <h3 className="font-serif text-lg lg:text-xl text-foreground mb-1">
            {attorney.name}
          </h3>
          <p className="text-sm lg:text-base text-muted-foreground">
            {attorney.role}
          </p>
        </div>
      </Link>
    </div>
  )
}

export function Attorneys() {
  const [isMobile, setIsMobile] = useState(false)

  // Simple mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
                <Button className="bg-accent text-accent-foreground rounded-full px-6">
                  VIEW ALL ATTORNEYS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Attorneys Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {featuredAttorneys.map((attorney, index) => (
          <AttorneyCard key={attorney.id} attorney={attorney} index={index} />
        ))}
      </div>
    </section>
  )
}