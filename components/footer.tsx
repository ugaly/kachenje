import Image from "next/image"
import Link from "next/link"

const importantLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Attorneys", href: "/attorneys" },
  { name: "Careers", href: "/careers" },
  { name: "Blog Element", href: "/blog" },
  { name: "Shop", href: "/shop" },
]

const featuredServices = [
  { name: "Business Law", href: "/practice-areas/business-law" },
  { name: "Education Law", href: "/practice-areas/education-law" },
  { name: "Family Law", href: "/practice-areas/family-law" },
  { name: "Real Estate Construction Law", href: "/practice-areas/real-estate" },
  { name: "Personal Injury Law", href: "/practice-areas/personal-injury" },
  { name: "Insurance Defence", href: "/practice-areas/insurance" },
]

export function Footer() {
  return (
    <footer className="relative">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/36207460/pexels-photo-36207460.jpeg"
          alt="Footer background"
          fill
          loading="eager"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/90" />
      </div>
      
      {/* Main Footer */}
      <div className="relative z-10 container mx-auto px-4 py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* About Us */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-6">About Us</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              We&apos;re on a mission to build a better future where justice creates good for everyone.
            </p>
            <img
              src="https://kachenje.co.tz/img/logo-big.png"
              alt="Kachenje Law Firm"
              style={{ height: '64px', width: 'auto' }}
              className="brightness-0 invert"
            />
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-6">Important Links</h3>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Services */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-6">Featured Services</h3>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm text-white/70">
              <div>
                <p className="font-medium text-white">Office Address</p>
                <p>PO Box 16122 Collins Street West</p>
                <p>Victoria 8007 Tanzania</p>
              </div>
              <div>
                <p>Phone: 888 123-4587</p>
              </div>
              <div>
                <p>Email: info@kachenje.co.tz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/70">
              Kachenje Law Firm - {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Google Plus">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 10.4h3.6c-.1 1.5-.7 2.7-1.6 3.5-.9.8-2.1 1.2-3.4 1.2-1.4 0-2.6-.5-3.5-1.5-1-1-1.5-2.2-1.5-3.6s.5-2.6 1.5-3.6c1-.9 2.1-1.4 3.5-1.4 1.3 0 2.4.4 3.3 1.2l-1.3 1.3c-.5-.5-1.2-.8-2-.8-.9 0-1.6.3-2.2.9-.6.6-.9 1.4-.9 2.4s.3 1.8.9 2.4c.6.6 1.4.9 2.2.9.6 0 1.1-.1 1.5-.3.6-.3 1-.7 1.2-1.3H7.8v-1.3zm12.2.8v-1.6h-1.6v1.6h-1.6v1.6h1.6v1.6h1.6v-1.6h1.6v-1.6h-1.6z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Vimeo">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.4 7.03c-.1 2.2-1.63 5.2-4.6 9-.32.4-3.1 4.97-5.73 4.97-1.67 0-3.07-1.53-3.57-4.1-.63-3.33-1.33-5.83-2.1-7.5-.6-1.33-1.26-2-2-2-.16 0-.7.33-1.63 1l-1-1.27 3.5-3.1c1.5-1.33 2.7-2.03 3.6-2.1 1.9-.2 3.07 1.1 3.5 3.9.47 3.03.8 4.93 1 5.7.53 2.47 1.13 3.7 1.8 3.7.5 0 1.26-.8 2.26-2.4.97-1.6 1.5-2.83 1.57-3.67.13-1.4-.4-2.1-1.6-2.1-.57 0-1.17.13-1.8.4 1.2-3.9 3.47-5.8 6.83-5.7 2.5.07 3.67 1.7 3.5 4.87z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
