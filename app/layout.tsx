import type { Metadata } from 'next'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
// import { Analytics } from '@vercel/analytics/next'
import { AppShell } from '@/components/app-shell'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: '--font-sans'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Kachenje Law Firm | Professional Legal Services',
  description: 'We are certified law specialists providing expert legal services in civil, criminal, family, and business law with over 27 years of experience.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${playfair.variable} font-sans antialiased`}>
        <AppShell>{children}</AppShell>
        <Script id="tawk-to-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69ccfc22b8aa781c3b30eb94/1jl4bhq4c';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
