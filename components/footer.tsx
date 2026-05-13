import Image from "next/image"
import Link from "next/link"

const importantLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/our-team" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Contact", href: "/contact" },
]

const featuredServices = [
  { name: "Arbitration", href: "/practice-areas/arbitration" },
  { name: "Corporate Services", href: "/practice-areas/corporate-services" },
  { name: "Real Estate", href: "/practice-areas/real-estate" },
  { name: "Employment and Labour", href: "/practice-areas/employment-labour" },
  { name: "Intellectual Property", href: "/practice-areas/intellectual-property" },
  { name: "Banking and Financial Institutions", href: "/practice-areas/banking-financial-institutions" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/36207460/pexels-photo-36207460.jpeg"
          alt=""
          fill
          loading="lazy"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-10 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-3 font-serif text-lg text-white sm:mb-4 sm:text-xl lg:mb-5 lg:text-2xl">
              About Us
            </h3>
            <p className="mb-5 max-w-prose text-sm leading-relaxed text-white/75 sm:mb-6 lg:mb-8">
              We are committed to clear counsel, disciplined advocacy, and outcomes that hold up in practice.
            </p>
            <Image
              src="/assets/logo/logo-big.png"
              alt="Kachenje Advocate"
              width={200}
              height={72}
              className="h-auto w-36 brightness-0 invert opacity-95 sm:w-40 lg:w-44"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-3 font-serif text-lg text-white sm:mb-4 sm:text-xl lg:mb-5 lg:text-2xl">Links</h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 lg:hidden">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex min-h-10 items-center rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-xs font-medium leading-tight text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="hidden space-y-2.5 lg:block lg:space-y-3">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm leading-snug text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-3 font-serif text-lg text-white sm:mb-4 sm:text-xl lg:mb-5 lg:text-2xl">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 lg:space-y-3">
              {featuredServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm leading-snug text-white/70 transition-colors hover:text-white [overflow-wrap:anywhere]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-3 font-serif text-lg text-white sm:mb-4 sm:text-xl lg:mb-5 lg:text-2xl">Contact</h3>
            <div className="grid gap-3 text-sm text-white/75 sm:max-lg:grid-cols-2 sm:max-lg:gap-x-8 lg:block lg:space-y-4">
              <div>
                <p className="font-medium text-white">Office</p>
                <p className="leading-snug">PPF Tower, 7th Floor</p>
                <p className="leading-snug">Dar es Salaam, Tanzania</p>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-medium text-white lg:hidden">Phone</p>
                  <p>
                    <a href="tel:+255222115729" className="transition-colors hover:text-white">
                      +255 22 211 5729
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white lg:hidden">Email</p>
                  <p>
                    <a href="mailto:info@kachenje.co.tz" className="break-all transition-colors hover:text-white">
                      info@kachenje.co.tz
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto flex flex-col items-stretch justify-between gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-4 sm:py-5 md:py-6">
          <p className="text-center text-xs text-white/60 sm:text-left sm:text-sm">
            Kachenje Advocate — {new Date().getFullYear()}
          </p>
          <a
            href="https://wa.me/255754285547"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-center text-xs text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white sm:inline sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
