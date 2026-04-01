// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { ChevronRight, MapPin, Phone, Mail, Clock, Send, CheckCircle, Building, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const contactInfo = [
//   {
//     icon: MapPin,
//     title: "Our Office",
//     details: ["PPF Tower, 7th Floor", "Corner of Ohio Street/Garden Avenue", "P.O. Box 105254, Dar es Salaam, Tanzania"]
//   },
//   {
//     icon: Phone,
//     title: "Phone Numbers",
//     details: ["+255 22 211 5729", "+255 754 285 547", "+255 784 285 547"]
//   },
//   {
//     icon: Mail,
//     title: "Email Address",
//     details: ["info@kachenje.co.tz", "legal@kachenje.co.tz"]
//   },
//   {
//     icon: Clock,
//     title: "Working Hours",
//     details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"]
//   }
// ]

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     service: ""
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1500))
    
//     setIsSubmitting(false)
//     setIsSubmitted(true)
    
//     // Reset after showing success
//     setTimeout(() => {
//       setIsSubmitted(false)
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//         service: ""
//       })
//     }, 3000)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }))
//   }

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative pt-48 pb-24 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="https://images.pexels.com/photos/6077861/pexels-photo-6077861.jpeg"
//             alt="Contact Us"
//             fill
//             loading="eager"
//             className="object-cover opacity-20"
//           />
//         </div>
//         <div className="container mx-auto px-4 relative z-10">
//           <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
//             <Link href="/" className="hover:text-white transition-colors">Home</Link>
//             <ChevronRight className="h-4 w-4" />
//             <span className="text-white">Contact Us</span>
//           </nav>
//           <h1 className="font-serif text-4xl lg:text-5xl text-white">
//             Contact Us
//           </h1>
//           <p className="text-white/70 mt-4 max-w-2xl">
//             Get in touch with our experienced legal team. We&apos;re here to provide professional guidance and support for all your legal needs.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-16 bg-secondary">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={info.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow group"
//               >
//                 <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
//                   <info.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
//                 </div>
//                 <h3 className="font-serif text-lg text-foreground mb-3">{info.title}</h3>
//                 <div className="space-y-1">
//                   {info.details.map((detail, i) => (
//                     <p key={i} className="text-sm text-muted-foreground">{detail}</p>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Contact Section */}
//       <section className="py-16 lg:py-24 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
//                 Send Us a Message
//               </h2>
//               <p className="text-muted-foreground mb-8">
//                 Fill out the form below and our team will get back to you within 24 hours.
//               </p>

//               {isSubmitted ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
//                 >
//                   <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//                   <h3 className="font-serif text-2xl text-green-700 mb-2">Thank You!</h3>
//                   <p className="text-green-600">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
//                         placeholder="+255 XXX XXX XXX"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">
//                         Service Required
//                       </label>
//                       <select
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-white"
//                       >
//                         <option value="">Select a Service</option>
//                         <option value="corporate">Corporate Services</option>
//                         <option value="banking">Banking & Finance</option>
//                         <option value="real-estate">Real Estate</option>
//                         <option value="employment">Employment Law</option>
//                         <option value="litigation">Litigation</option>
//                         <option value="intellectual-property">Intellectual Property</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Subject *
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
//                       placeholder="How can we help you?"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Your Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
//                       placeholder="Please describe your legal matter..."
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <span className="animate-spin mr-2">
//                           <svg className="h-5 w-5" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                           </svg>
//                         </span>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="mr-2 h-5 w-5" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </motion.div>

//             {/* Map & Additional Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="space-y-8"
//             >
//               {/* Map */}
//               <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8567421!2d39.2833!3d-6.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0b1c4b5555%3A0x0!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Office Location"
//                 />
//               </div>

//               {/* Quick Contact Card */}
//               <div className="bg-primary rounded-lg p-8 text-white">
//                 <h3 className="font-serif text-2xl mb-6">Quick Contact</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Building className="h-5 w-5 text-accent" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1">Main Office</h4>
//                       <p className="text-white/70 text-sm">PPF Tower, 7th Floor, Dar es Salaam</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Phone className="h-5 w-5 text-accent" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1">Call Us</h4>
//                       <p className="text-white/70 text-sm">+255 22 211 5729</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Mail className="h-5 w-5 text-accent" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1">Email Us</h4>
//                       <p className="text-white/70 text-sm">info@kachenje.co.tz</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Globe className="h-5 w-5 text-accent" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1">Website</h4>
//                       <p className="text-white/70 text-sm">www.kachenje.co.tz</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Emergency Contact */}
//               <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
//                 <h4 className="font-serif text-lg text-foreground mb-2">Need Urgent Legal Assistance?</h4>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   For urgent legal matters, please call our emergency line directly.
//                 </p>
//                 <a 
//                   href="tel:+255754285547" 
//                   className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
//                 >
//                   <Phone className="h-4 w-4" />
//                   +255 754 285 547
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-secondary">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="font-serif text-3xl text-foreground mb-4">
//             Ready to Work Together?
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Schedule a consultation with our experienced attorneys to discuss your legal needs and explore how we can help you achieve your goals.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/attorneys">
//               <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6">
//                 Meet Our Team
//               </Button>
//             </Link>
//             <Link href="/practice-areas">
//               <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6">
//                 View Our Services
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }





"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, CheckCircle, Building, Globe, MessageCircle, Linkedin, Twitter, Facebook, Instagram, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["PPF Tower, 7th Floor", "Corner of Ohio Street/Garden Avenue", "P.O. Box 105254, Dar es Salaam, Tanzania"]
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+255 22 211 5729", "+255 754 285 547", "+255 784 285 547"]
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@kachenje.co.tz", "legal@kachenje.co.tz"]
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"]
  }
]

const socialPlatforms = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    hoverColor: "hover:bg-[#128C7E]",
    url: "https://wa.me/255754285547",
    username: "+255 754 285 547",
    description: "Quick chat support"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "bg-[#0077B5]",
    hoverColor: "hover:bg-[#005582]",
    url: "https://linkedin.com/company/kachenje-law-firm",
    username: "Kachenje Law Firm",
    description: "Professional network"
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    color: "bg-[#000000]",
    hoverColor: "hover:bg-[#1DA1F2]",
    url: "https://twitter.com/kachenjelaw",
    username: "@kachenjelaw",
    description: "Latest updates"
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#0E5DBA]",
    url: "https://facebook.com/kachenjelawfirm",
    username: "Kachenje Law Firm",
    description: "Follow us"
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    hoverColor: "hover:scale-110",
    url: "https://instagram.com/kachenjelaw",
    username: "@kachenjelaw",
    description: "Visual stories"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: ""
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/6077861/pexels-photo-6077861.jpeg"
            alt="Contact Us"
            fill
            loading="eager"
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="font-serif text-4xl lg:text-5xl text-white">
            Contact Us
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Get in touch with our experienced legal team. We&apos;re here to provide professional guidance and support for all your legal needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <info.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-green-700 mb-2">Thank You!</h3>
                  <p className="text-green-600">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="+255 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-white"
                      >
                        <option value="">Select a Service</option>
                        <option value="corporate">Corporate Services</option>
                        <option value="banking">Banking & Finance</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="employment">Employment Law</option>
                        <option value="litigation">Litigation</option>
                        <option value="intellectual-property">Intellectual Property</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                      placeholder="Please describe your legal matter..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8567421!2d39.2833!3d-6.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0b1c4b5555%3A0x0!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              {/* Quick Contact Card */}
              <div className="bg-primary rounded-lg p-8 text-white">
                <h3 className="font-serif text-2xl mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Main Office</h4>
                      <p className="text-white/70 text-sm">PPF Tower, 7th Floor, Dar es Salaam</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <p className="text-white/70 text-sm">+255 22 211 5729</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-white/70 text-sm">info@kachenje.co.tz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Website</h4>
                      <p className="text-white/70 text-sm">www.kachenje.co.tz</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h4 className="font-serif text-lg text-foreground mb-2">Need Urgent Legal Assistance?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  For urgent legal matters, please call our emergency line directly.
                </p>
                <a 
                  href="tel:+255754285547" 
                  className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  +255 754 285 547
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section - New Attractive Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              Connect With Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Follow us on social media for legal insights, firm updates, and to stay connected with our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:shadow-2xl ${platform.hoverColor}`}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent" />
                
                {/* Icon Container */}
                <div className={`relative w-20 h-20 mx-auto mb-4 rounded-full ${platform.color} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                  <platform.icon className="h-10 w-10 text-white" />
                </div>

                {/* Platform Name */}
                <h3 className="font-serif text-xl text-white mb-2 relative z-10">
                  {platform.name}
                </h3>

                {/* Username/Handle */}
                <p className="text-white/70 text-sm mb-2 relative z-10">
                  {platform.username}
                </p>

                {/* Description */}
                <p className="text-white/50 text-xs relative z-10">
                  {platform.description}
                </p>

                {/* Follow Button */}
                <div className="mt-4 inline-flex items-center gap-2 text-accent text-sm font-medium bg-white/20 px-4 py-2 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  <span>Follow</span>
                  <Share2 className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
              </motion.a>
            ))}
          </div>

          {/* Social Media Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/60 text-sm">Legal Insights</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-white/60 text-sm">Community Support</div>
            </div>
          </motion.div>
        </div>

        {/* Animated particles background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shine {
            100% {
              left: 200%;
            }
          }
          .animate-shine {
            animation: shine 0.8s ease-out;
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
              opacity: 0;
            }
            50% {
              transform: translateY(-20px);
              opacity: 0.5;
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `
      }} />
    </>
  )
}