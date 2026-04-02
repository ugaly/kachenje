"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { QrCode, X, Mail, Phone, Scale, GraduationCap, Briefcase, Globe, Award } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import { attorneys as allAttorneys, type Attorney } from "@/lib/attorneys-data"

// Show first 4 attorneys on homepage
const featuredAttorneys = allAttorneys.slice(0, 4)

// Card component for homepage attorneys - Moved outside of the main component
function AttorneyCard({ attorney, onClick }: { attorney: Attorney; onClick: () => void }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    const node = ref.current
    if (!node) return
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsFocused(entry.isIntersecting && entry.intersectionRatio > 0.5),
      { threshold: [0.5] }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [isMobile])

  return (
    <div ref={ref} className="relative group cursor-pointer" onClick={onClick}>
      {/* QR code icon for Nzaro Nuhu Kachenje */}
      {attorney.id === "nzaro-kachenje" && (
        <Dialog>
          <DialogTrigger asChild>
            <button
              className={
                isMobile
                  ? "absolute top-4 left-4 z-20 bg-white/80 hover:bg-accent p-2 rounded-full shadow transition-colors opacity-100 pointer-events-auto"
                  : "absolute top-4 left-4 z-20 bg-white/80 hover:bg-accent p-2 rounded-full shadow transition-colors opacity-0 group-hover:opacity-100 pointer-events-auto"
              }
              aria-label="Show QR code"
              onClick={e => { e.stopPropagation(); }}
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
      <div className="relative h-[550px] lg:h-[550px] xl:h-[550px] overflow-hidden">
        <Image
          src={attorney.image}
          alt={attorney.name}
          fill
          style={{objectPosition: 'top'}}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={
            isMobile
              ? `object-cover grayscale${isFocused ? ' grayscale-0' : ''} transition-all duration-500`
              : 'object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
          }
        />
        <div className={
          isMobile
            ? `absolute inset-0 bg-black/20${isFocused ? ' bg-black/0' : ''} transition-colors`
            : 'absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors'
        } />
      </div>
      <div className="bg-background py-6 lg:py-8 px-4 text-center border-t-2 border-transparent group-hover:border-accent transition-colors">
        <h3 className="font-serif text-lg lg:text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
          {attorney.name}
        </h3>
        <p className="text-sm lg:text-base text-muted-foreground">
          {attorney.role}
        </p>
      </div>
    </div>
  )
}

export function Attorneys() {
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null)

  useEffect(() => {
    if (selectedAttorney) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedAttorney])

  return (
    <>
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
            <AttorneyCard key={attorney.id} attorney={attorney} onClick={() => setSelectedAttorney(attorney)} />
          ))}
        </div>
      </section>

      {/* Attorney Detail Modal */}
      <AnimatePresence>
        {selectedAttorney && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedAttorney(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-background rounded-2xl shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAttorney(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left Column - Image & Quick Info */}
                <div className="lg:col-span-1 bg-primary p-8 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                    <Image
                      src={selectedAttorney.image}
                      alt={selectedAttorney.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'top' }}
                    />
                  </div>

                  <h2 className="font-serif text-2xl text-white mb-2">
                    {selectedAttorney.name}
                  </h2>
                  <p className="text-accent mb-6">{selectedAttorney.role}</p>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <a
                      href={`mailto:${selectedAttorney.email}`}
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5 text-accent" />
                      <span className="text-sm">{selectedAttorney.email}</span>
                    </a>
                    <a
                      href={`tel:${selectedAttorney.phone}`}
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <Phone className="h-5 w-5 text-accent" />
                      <span className="text-sm">{selectedAttorney.phone}</span>
                    </a>
                  </div>

                  {/* Languages */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-white/60 mb-3">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedAttorney.languages.map((lang) => (
                        <span key={lang} className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Admissions */}
                  {selectedAttorney.admissions.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center gap-2 text-white/60 mb-3">
                        <Award className="h-4 w-4" />
                        <span className="text-sm">Admissions</span>
                      </div>
                      <ul className="space-y-2">
                        {selectedAttorney.admissions.map((admission) => (
                          <li key={admission} className="text-sm text-white/80">
                            {admission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2 p-8">
                  {/* Bio */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                      <Scale className="h-5 w-5 text-accent" />
                      About
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedAttorney.bio}
                    </p>
                  </div>

                  {/* Practice Areas */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedAttorney.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="px-4 py-2 text-sm bg-secondary text-foreground rounded-lg border border-border"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-accent" />
                      Education
                    </h3>
                    <ul className="space-y-3">
                      {selectedAttorney.education.map((edu) => (
                        <li key={edu} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                          <span className="text-muted-foreground">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Experience
                    </h3>
                    <ul className="space-y-3">
                      {selectedAttorney.experience.map((exp) => (
                        <li key={exp} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                          <span className="text-muted-foreground">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Categories */}
                  {selectedAttorney.categories.length > 0 && (
                    <div className="pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">Practice Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedAttorney.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}











// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
// import { QrCode } from "lucide-react"
// import { QRCodeSVG } from "qrcode.react"
// import { attorneys as allAttorneys } from "@/lib/attorneys-data"

// // Show first 4 attorneys on homepage
// const featuredAttorneys = allAttorneys.slice(0, 4)

// // Card component for homepage attorneys - Ultra lightweight
// function AttorneyCard({ attorney, index }: { attorney: any; index: number }) {
//   const [isMobile, setIsMobile] = useState(false)

//   // Simple mobile detection
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024)
//     checkMobile()
//     window.addEventListener('resize', checkMobile, { passive: true })
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   return (
//     <div className="relative">
//       {/* QR code icon for Nzaro Nuhu Kachenje */}
//       {attorney.id === "nzaro-kachenje" && (
//         <Dialog>
//           <DialogTrigger asChild>
//             <button
//               className={`
//                 absolute top-4 left-4 z-20 bg-white/80 hover:bg-accent p-2 rounded-full shadow
//                 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
//                 pointer-events-auto
//               `}
//               aria-label="Show QR code"
//               onClick={e => e.stopPropagation()}
//               type="button"
//             >
//               <QrCode className="w-6 h-6 text-accent" />
//             </button>
//           </DialogTrigger>
//           <DialogContent className="flex flex-col items-center gap-4 max-w-xs p-8 rounded-2xl bg-white/60 backdrop-blur-xl shadow-2xl border-2 border-accent">
//             <div className="flex flex-col items-center gap-2 w-full">
//               <DialogTitle className="text-2xl font-serif text-primary mb-2">Scan QR Code</DialogTitle>
//               <span className="text-accent-foreground text-sm mb-2">Get more details about Nzaro Nuhu Kachenje</span>
//             </div>
//             <div className="rounded-xl bg-white p-3 shadow-lg border border-accent">
//               <QRCodeSVG value="https://card-seven-pearl.vercel.app/13E8FD" size={180} fgColor="#1a1a2e" bgColor="#fff" level="H" includeMargin={true} />
//             </div>
//             <div className="flex flex-col items-center gap-1 mt-2">
//               <span className="font-semibold text-primary">Nzaro Nuhu Kachenje</span>
//               <span className="text-xs text-muted-foreground">Managing Partner</span>
//             </div>
//             <div className="mt-4 text-center text-sm text-muted-foreground">
//               <span className="block font-medium text-accent mb-1">Point your camera or QR app</span>
//               <span>to instantly view the digital business card.</span>
//             </div>
//           </DialogContent>
//         </Dialog>
//       )}
      
//       <Link href="/attorneys">
//         <div className="relative h-[550px] lg:h-[550px] xl:h-[550px] overflow-hidden bg-gray-100">
//           <Image
//             src={attorney.image}
//             alt={attorney.name}
//             fill
//             style={{ objectPosition: 'top' }}
//             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//             className="object-cover"
//             loading={index < 2 ? "eager" : "lazy"}
//             quality={75}
//             priority={index < 2}
//           />
//           <div className="absolute inset-0 bg-black/30" />
//         </div>
        
//         <div className="bg-background py-6 lg:py-8 px-4 text-center border-t border-border">
//           <h3 className="font-serif text-lg lg:text-xl text-foreground mb-1">
//             {attorney.name}
//           </h3>
//           <p className="text-sm lg:text-base text-muted-foreground">
//             {attorney.role}
//           </p>
//         </div>
//       </Link>
//     </div>
//   )
// }

// export function Attorneys() {
//   const [isMobile, setIsMobile] = useState(false)

//   // Simple mobile detection
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024)
//     checkMobile()
//     window.addEventListener('resize', checkMobile, { passive: true })
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   return (
//     <section className="bg-secondary">
//       {/* Header */}
//       <div className="pt-16 lg:pt-20 pb-16 lg:pb-20 border-b border-border">
//         <div className="container mx-auto px-4 lg:px-8 xl:px-16">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground italic">
//               Meet Our Qualified Attorneys
//             </h2>
//             <div className="lg:border-l lg:border-border lg:pl-12">
//               <p className="text-muted-foreground lg:text-lg mb-6">
//                 Our team of experienced legal professionals is dedicated to providing exceptional legal services tailored to your needs. With expertise across multiple practice areas, we deliver results.
//               </p>
//               <Link href="/attorneys">
//                 <Button className="bg-accent text-accent-foreground rounded-full px-6">
//                   VIEW ALL ATTORNEYS
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Attorneys Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//         {featuredAttorneys.map((attorney, index) => (
//           <AttorneyCard key={attorney.id} attorney={attorney} index={index} />
//         ))}
//       </div>
//     </section>
//   )
// }