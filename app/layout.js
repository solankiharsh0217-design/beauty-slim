import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PromosBanner from '@/components/PromosBanner'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata = {
  title: 'Beauty Slim | Centro Estetico & Benessere – Alessandria',
  description: 'Beauty Slim ad Alessandria: trattamenti viso e corpo, epilazione laser, rimodellamento, massaggi ed estetica di base. Consulenza gratuita. Via Trotti 69.',
  keywords: 'centro estetico Alessandria, epilazione laser Alessandria, trattamenti viso corpo, Beauty Slim, benessere Alessandria, rimodellamento corpo',
  authors: [{ name: 'Beauty Slim' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Beauty Slim | Centro Estetico & Benessere – Alessandria',
    description: 'Trattamenti viso, corpo ed epilazione laser ad Alessandria. Consulenza gratuita, percorsi personalizzati. Via Trotti 69.',
    url: 'https://beautyslim.it',
    locale: 'it_IT',
  },
  other: {
    'geo.region': 'IT-AL',
    'geo.placename': 'Alessandria',
  },
  alternates: {
    canonical: 'https://beautyslim.it',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <PromosBanner />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
