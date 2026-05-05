import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ec85e685_hero-beauty-consultation.png',
    headline: ['Bellezza che', 'trasforma.'],
    sub: 'Trattamenti viso, corpo ed epilazione laser in un centro elegante ad Alessandria.',
  },
  {
    image: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
    headline: ['Cura del viso,', 'luce naturale.'],
    sub: 'Protocolli avanzati per luminosità, tono e freschezza con un approccio delicato.',
  },
  {
    image: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
    headline: ['Rimodellamento', 'su misura.'],
    sub: 'Percorsi personalizzati per ridefinire il corpo con tecnologie professionali.',
  },
  {
    image: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ce9cfd52_generated_image.png',
    headline: ['Relax totale,', 'benessere vero.'],
    sub: 'Massaggi e trattamenti per ritrovare equilibrio, leggerezza e serenità.',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent(prev => (prev + 1) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background slides ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.3, ease: 'easeInOut' }}
        >
          <img src={slides[current].image} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl pt-24 pb-16">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-[0.22em] text-[11px] uppercase">
              Beauty Slim · Alessandria
            </span>
          </motion.div>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h-${current}`}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              {slides[current].headline[0]}{' '}
              <span className="italic text-primary">{slides[current].headline[1]}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Wave ornament */}
          <motion.div
            className="wave-ornament mb-6"
            style={{ margin: '0 0 1.5rem 0' }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`p-${current}`}
              className="text-white/70 text-base leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              {slides[current].sub}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
            >
              Prenota Consulenza Gratuita
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/35 text-white rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Scopri i Servizi
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap gap-5 pt-7 border-t border-white/12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.6 }}
          >
            {[
              { icon: Shield, text: 'Tecnologie certificate' },
              { icon: Star, text: '500+ clienti soddisfatte' },
              { icon: MapPin, text: 'Via Trotti 69, Alessandria' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-white/60 text-xs">
                <b.icon size={13} className="text-primary shrink-0" />
                <span>{b.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Navigation arrows ── */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary/80 hover:border-primary/50 transition-all duration-300"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary/80 hover:border-primary/50 transition-all duration-300"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-white/35 hover:bg-white/65'
            }`}
          />
        ))}
      </div>

      {/* ── Wave transition to next section ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path
            d="M0,40 C160,80 320,0 480,40 C640,80 800,0 960,40 C1120,80 1280,10 1440,40 L1440,80 L0,80 Z"
            fill="#F0EADE"
          />
        </svg>
      </div>
    </section>
  )
}