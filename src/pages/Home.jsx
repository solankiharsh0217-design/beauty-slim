import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Sparkles, Scissors, Smile, Leaf, HandHeart,
  Star, Check, Phone
} from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import WaveDivider from '../components/WaveDivider'

const IMAGES = {
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
  manicure: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/369154dc2_manicure-treatment.png',
  massage: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ce9cfd52_generated_image.png',
}

const services = [
  { icon: Sparkles, title: 'Dimagrimento', description: 'Percorsi personalizzati per ridefinire il corpo.', image: IMAGES.body },
  { icon: Scissors, title: 'Epilazione Laser', description: 'Trattamenti laser sicuri per una pelle liscia.', image: IMAGES.laser },
  { icon: Smile, title: 'Cura del Viso', description: 'Protocolli avanzati per luminosità e freschezza.', image: IMAGES.facial },
  { icon: Leaf, title: 'Estetica Base', description: 'Manicure, pedicure e beauty care.', image: IMAGES.manicure },
  { icon: HandHeart, title: 'Massaggi', description: 'Percorsi di benessere per un relax completo.', image: IMAGES.massage },
]

const testimonials = [
  { name: 'Giulia M.', text: 'Ho trovato un percorso serio e personalizzato. Il centro è bellissimo!', rating: 5 },
  { name: 'Elena R.', text: 'Esperienza elegante con spiegazioni chiare e grande attenzione.', rating: 5 },
  { name: 'Laura B.', text: 'Ambiente raffinato e accogliente, risultati visibili.', rating: 5 },
]

const AmbientGlow = () => (
  <>
    <div className="ambient-glow ambient-glow-1" />
    <div className="ambient-glow ambient-glow-2" />
  </>
)

export default function Home() {
  return (
    <div className="font-poppins relative">
      <AmbientGlow />

      {/* Floating blob decors */}
      <div className="blob-circle w-[500px] h-[500px] -top-40 -left-40 opacity-60 float-gentle" />
      <div className="blob-circle w-[350px] h-[350px] bottom-40 -right-20 opacity-35 float-gentle float-d2" />
      <div className="blob-circle w-[280px] h-[280px] top-1/2 left-1/3 opacity-25 float-gentle float-d1" />

      {/* ── Hero ── */}
      <HeroSlider />

      {/* ── Services ── */}
      <section className="relative py-24 bg-[#16120e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.22em] text-xs uppercase mb-3 block">
              I Nostri Servizi
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground leading-tight mb-3">
              Trattamenti pensati <span className="text-primary italic">per te</span>
            </h2>
            <div className="wave-ornament" />
            <p className="text-muted-foreground max-w-xl mx-auto text-base mt-5">
              Ogni servizio nasce da un ascolto reale. Costruiamo percorsi su misura.
            </p>
          </motion.div>

          <div className="spa-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: index * 0.09 }}
              >
                <div className="spa-card group text-center flex flex-col items-center py-8 px-5 h-full">
                  {/* Circular image */}
                  <div className="oval-img-wrap mb-4">
                    <img src={service.image} alt={service.title} />
                  </div>
                  {/* Icon badge */}
                  <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center mb-3">
                    <service.icon size={15} className="text-primary" />
                  </div>
                  <h3 className="font-playfair text-base font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <Link
                    to="/servizi"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs hover:gap-3 transition-all duration-300"
                  >
                    Scopri <ArrowRight size={11} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave between services and about */}
      <WaveDivider color="#0f0c0a" />

      {/* ── About / Center ── */}
      <section className="relative py-28 bg-[#0f0c0a] overflow-hidden">
        {/* Decorative floating rings */}
        <div className="absolute top-16 right-16 w-64 h-64 pointer-events-none hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-primary/10 ring-ripple" />
          <div className="absolute inset-0 rounded-full border border-primary/10 ring-ripple ring-ripple-d1" />
          <div className="absolute inset-0 rounded-full border border-primary/10 ring-ripple ring-ripple-d2" />
        </div>
        <div className="absolute bottom-24 left-10 w-40 h-40 pointer-events-none hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-primary/8 ring-ripple float-d2" />
          <div className="absolute inset-0 rounded-full border border-primary/8 ring-ripple ring-ripple-d1 float-d2" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="feature-oval aspect-[4/5] shadow-2xl">
                <img src={IMAGES.clinic} alt="Beauty Slim" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 to-transparent" />
              </div>
              {/* Years badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl shadow-primary/20">
                <div className="font-playfair text-2xl font-bold text-white leading-none">10+</div>
                <div className="text-white/80 text-[9px] uppercase tracking-widest mt-0.5">Anni</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-medium tracking-[0.22em] text-xs uppercase mb-4 block">
                Il Nostro Centro
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                Dove la cura diventa{' '}
                <span className="text-primary italic">esperienza</span>
              </h2>
              <div className="wave-ornament mb-6" style={{ margin: '0 0 1.5rem 0' }} />
              <p className="text-muted-foreground text-base mb-7 leading-relaxed">
                Beauty Slim nasce ad Alessandria con un team che unisce esperienza,
                cura del dettaglio e attenzione alla persona.
              </p>

              <ul className="space-y-3.5 mb-9">
                {['Staff con esperienza', 'Tecnologie selezionate', 'Trattamenti su misura', 'Consulenza senza pressioni'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check size={13} className="text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 flex-wrap">
                <Link to="/chi-siamo"
                  className="px-7 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5">
                  Scopri di più
                </Link>
                <Link to="/contatti"
                  className="px-7 py-3 border border-primary/50 text-primary rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-all">
                  Prenota Ora
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave between about and testimonials */}
      <WaveDivider color="#16120e" flip />

      {/* ── Testimonials ── */}
      <section className="relative py-24 bg-[#16120e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.22em] text-xs uppercase mb-3 block">
              Testimonianze
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3">
              Cosa dicono di <span className="text-primary italic">noi</span>
            </h2>
            <div className="wave-ornament" />
          </motion.div>

          <div className="spa-grid">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-card p-7 flex flex-col gap-4 h-full">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="#CDA45E" color="#CDA45E" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-foreground/80 text-sm leading-relaxed italic flex-1">
                    "{t.text}"
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/12">
                    <div className="w-9 h-9 avatar-circle bg-primary/20 shrink-0">
                      <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                    </div>
                    <span className="font-semibold text-foreground text-sm">{t.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.body} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/85" />
        </div>

        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-primary/8 ring-ripple" />
          <div className="absolute w-[350px] h-[350px] rounded-full border border-primary/10 ring-ripple ring-ripple-d1" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.22em] text-xs uppercase mb-4 block">
              Inizia Oggi
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Pronta a ritrovare il tuo
              <br />
              <span className="text-primary italic">equilibrio?</span>
            </h2>
            <div className="wave-ornament mb-7" style={{ margin: '0.75rem auto 1.75rem' }} />
            <p className="text-white/65 text-base mb-8">
              Prenota una consulenza gratuita — senza impegno.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contatti"
                className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                Prenota Consulenza
              </Link>
              <a href="tel:0131234173"
                className="px-8 py-3.5 border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
                <Phone size={14} /> Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
