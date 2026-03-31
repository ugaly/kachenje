"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Scale, 
  Target, 
  Users, 
  Globe, 
  Award,
  Briefcase,
  BookOpen,
  Lightbulb,
  Shield,
  Handshake,
  ChevronRight,
  Building2,
  Gavel
} from "lucide-react"
import { Button } from "@/components/ui/button"

const timelineEvents = [
  {
    year: "2018",
    title: "Foundation",
    description: "Kachenje Law Firm was established by experienced legal practitioners united to form a leading edge boutique law firm in Tanzania.",
    icon: Building2,
  },
  {
    year: "2019",
    title: "Growth & Recognition",
    description: "Expanded our practice areas and attained reasonable ranks in the corporate law regime, serving both local and international clients.",
    icon: Award,
  },
  {
    year: "2020",
    title: "Sector Specialization",
    description: "Developed specialized expertise across banking, energy, mining, real estate, and intellectual property sectors.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "International Partnerships",
    description: "Strengthened cross-border capabilities, providing guidance on international investments and regulatory approvals.",
    icon: Globe,
  },
  {
    year: "2024",
    title: "Excellence Continues",
    description: "Recognized for tailor-made solutions and client-centric approach, continuing to set standards in legal excellence.",
    icon: Gavel,
  },
]

const whyUsItems = [
  {
    icon: BookOpen,
    title: "In-depth Knowledge",
    description: "We combine a thorough understanding of Tanzanian law with practical insights into local markets, regulatory frameworks, and business practices. This enables us to provide advice that is both legally sound and commercially realistic.",
  },
  {
    icon: Target,
    title: "Sector-focused Expertise",
    description: "Our team has specialised experience across multiple sectors, including banking and finance, energy, mining, oil and gas, real estate, intellectual property, corporate services, employment and arbitration.",
  },
  {
    icon: Users,
    title: "Client Centric Approach",
    description: "We prioritize our clients' objectives, providing proactive guidance and strategic solutions. We focus on understanding your business, the risks, and your goals to deliver outcomes that are practical, timely and aligned with your interests.",
  },
  {
    icon: Shield,
    title: "Comprehensive Services",
    description: "From corporate structuring and regulatory compliance to dispute resolution and commercial transactions, we offer integrated services. Our clients receive end-to-end support under one roof, ensuring efficiency and consistency.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description: "We serve both domestic and international clients, providing guidance on cross-border investments, regulatory approvals, and complex commercial arrangements. Our experience ensures global best practices are applied locally.",
  },
]

const coreValues = [
  { icon: Scale, title: "Integrity", description: "Upholding the highest ethical standards in all our dealings" },
  { icon: Lightbulb, title: "Innovation", description: "Embracing modern solutions for complex legal challenges" },
  { icon: Award, title: "Excellence", description: "Delivering exceptional quality in every engagement" },
  { icon: Users, title: "Collaboration", description: "Working together with clients to achieve shared goals" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8112000/pexels-photo-8112000.jpeg"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-accent">About Us</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              About Kachenje Law Firm
            </h1>
            <p className="text-white/80 text-lg lg:text-xl max-w-2xl">
              A leading boutique law firm providing exceptional legal services across Tanzania and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-sm font-medium tracking-wider uppercase">Who We Are</span>
              <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mt-4 mb-6">
                A Leading Boutique Law Firm in Tanzania
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a duly registered and licensed law firm in Tanzania. Our firm encompasses experienced legal practitioners who united to form a leading edge boutique law firm of its own kind in its jurisdiction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bestowed with the requisite experience, skills and attitude, our lawyers are best positioned to provide the most adequate and relevant legal services in today&apos;s world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Within a brief period of our establishment, we have attained reasonable ranks in the corporate law regime; been specifically recognized for our tailor made solutions to our esteemed customers&apos; needs.
              </p>
              <Link href="/attorneys">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6">
                  Meet Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                  alt="Kachenje Law Firm Office"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-lg shadow-2xl">
                <div className="text-4xl font-light mb-2">6+</div>
                <div className="text-sm text-white/70">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">Our Journey</span>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mt-4">
              Milestones of Excellence
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`bg-background p-8 rounded-lg shadow-lg border border-border ${
                      index % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'
                    } max-w-md`}>
                      <span className="text-accent font-serif text-2xl">{event.year}</span>
                      <h3 className="font-serif text-xl text-foreground mt-2 mb-3">{event.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-lg">
                    <event.icon className="h-7 w-7 text-accent" />
                  </div>
                  
                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mt-4 mb-6">
              Your Trusted Legal Partner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choosing the right legal partner can make all the difference in navigating Tanzania&apos;s complex business regulatory environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 rounded-lg border border-border bg-background hover:bg-primary hover:border-primary transition-all duration-300 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-14 h-14 bg-secondary group-hover:bg-accent/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground group-hover:text-white mb-4 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">Our Foundation</span>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-white mt-4">
              Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-white/10 group-hover:bg-accent rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                  <value.icon className="h-9 w-9 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let us help you navigate the legal landscape with confidence. Our team is ready to provide the expert guidance you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/practice-areas">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6">
                  Our Practice Areas
                </Button>
              </Link>
              <Link href="/attorneys">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6">
                  Meet Our Attorneys
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
