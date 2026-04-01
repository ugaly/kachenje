// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

// type AppShellProps = {
//   children: React.ReactNode
// }

// export function AppShell({ children }: AppShellProps) {
//   const [isLoading, setIsLoading] = useState(true)
//   const [isLeaving, setIsLeaving] = useState(false)
//   const finishedRef = useRef(false)

//   useEffect(() => {
//     if (typeof window === "undefined") return

//     const hasShown = sessionStorage.getItem("app_loader_shown") === "1"
//     if (hasShown) {
//       setIsLoading(false)
//       return
//     }

//     const finishLoading = () => {
//       if (finishedRef.current) return
//       finishedRef.current = true
//       setIsLeaving(true)

//       window.setTimeout(() => {
//         sessionStorage.setItem("app_loader_shown", "1")
//         setIsLoading(false)
//       }, 450)
//     }

//     const minimumDisplay = window.setTimeout(() => {
//       if (document.readyState === "complete") {
//         finishLoading()
//       }
//     }, 900)

//     const fallback = window.setTimeout(finishLoading, 2500)

//     if (document.readyState === "complete") {
//       finishLoading()
//     } else {
//       window.addEventListener("load", finishLoading, { once: true })
//     }

//     return () => {
//       window.clearTimeout(minimumDisplay)
//       window.clearTimeout(fallback)
//       window.removeEventListener("load", finishLoading)
//     }
//   }, [])

//   useEffect(() => {
//     if (!isLoading) return

//     document.body.style.overflow = "hidden"
//     return () => {
//       document.body.style.overflow = ""
//     }
//   }, [isLoading])

//   return (
//     <>
//       {isLoading && (
//         <div
//           className={`fixed inset-0 z-100 flex items-center justify-center bg-primary px-6 transition-opacity duration-500 ${
//             isLeaving ? "opacity-0" : "opacity-100"
//           }`}
//           aria-live="polite"
//           aria-label="Loading application"
//         >
//           <div className="flex flex-col items-center gap-5 text-center">
//             <img
//               src="https://kachenje.co.tz/img/logo.png"
//               alt="Kachenje Law Firm"
//               className="h-auto w-44 sm:w-52 md:w-60"
//             />
//             <div className="h-1.5 w-32 overflow-hidden rounded bg-white/20">
//               <div className="h-full w-full origin-left animate-pulse rounded bg-accent" />
//             </div>
//           </div>
//         </div>
//       )}

//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   )
// }



"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type AppShellProps = {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)
  const finishedRef = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const finishLoading = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      setIsLeaving(true)

      window.setTimeout(() => {
        setIsLoading(false)
      }, 800)
    }

    const minimumDisplay = window.setTimeout(finishLoading, 8000)

    const fallback = window.setTimeout(finishLoading, 8500)

    return () => {
      window.clearTimeout(minimumDisplay)
      window.clearTimeout(fallback)
    }
  }, [])

  useEffect(() => {
    if (!isLoading) return

    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <div
          className={`fixed inset-0 z-100 flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 transition-all duration-500 ${
            isLeaving ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          aria-live="polite"
          aria-label="Loading application"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            {/* Logo with glow effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full animate-ping-slow" />
              <div className="absolute inset-0 bg-accent/30 blur-xl rounded-full animate-pulse" />
              <img
                src="https://kachenje.co.tz/img/logo.png"
                alt="Kachenje Law Firm"
                className="relative h-auto w-44 sm:w-52 md:w-60 drop-shadow-2xl animate-float-slow"
              />
            </div>

            {/* Animated text */}
            <div className="space-y-2">
              <h2 className="text-white/90 text-lg sm:text-xl font-medium tracking-wide animate-pulse-slow">
                Kachenje Law Firm
              </h2>
              <p className="text-white/60 text-sm animate-fade-in-up">Delivering Justice with Excellence</p>
            </div>

            {/* Progress bar with shimmer effect */}
            <div className="w-48 sm:w-64 h-1.5 bg-white/20 rounded-full overflow-hidden relative">
              <div className="h-full w-full bg-gradient-to-r from-accent via-accent/80 to-accent rounded-full animate-progress" />
              <div className="absolute inset-0 w-20 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
            </div>

            {/* Loading dots */}
            <div className="flex gap-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 animate-fade-in" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/20 animate-fade-in delay-100" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/20 animate-fade-in delay-200" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 animate-fade-in delay-300" />
        </div>
      )}

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>

      {/* Add custom animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); opacity: 0; }
            50% { transform: translateY(-20px); opacity: 0.5; }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes ping-slow {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          
          .animate-progress {
            animation: progress 1.2s ease-out forwards;
          }
          
          .animate-shimmer {
            animation: shimmer 1.5s infinite;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 3s ease-in-out infinite;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
          
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
            opacity: 0;
          }
          
          .animate-ping-slow {
            animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-500 { animation-delay: 500ms; }
          .delay-1000 { animation-delay: 1000ms; }
        `
      }} />
    </>
  )
}