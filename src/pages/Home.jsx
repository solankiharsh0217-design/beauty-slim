import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Sparkles, Scissors, Smile, Leaf, HandHeart,
  Star, Check, Phone
} from 'lucide-react'
import HeroSlider from '../components/HeroSlider'

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
  { icon: Leaf, title: 'Estetica Base', description: 'Manicure, pedicure e beauty care quotidiano.', image: IMAGES.manicure },
  { icon: HandHeart, title: 'Massaggi', description: 'Percorsi di benessere per un relax completo.', image: IMAGES.massage },
]

const testimonials = [
  { name: 'Giulia M.', text: 'Ho trovato un percorso serio e personalizzato. Il centro è bellissimo!', rating: 5 },
  { name: 'Elena R.', text: 'Esperienza elegante con spiegazioni chiare e grande attenzione.', rating: 5 },
  { name: 'Laura B.', text: 'Ambiente raffinato e accogliente, risultati visibili.', rating: 5 },
]

const WaveDivider = ({ color = '#0c0a08', flipped = false }) => (
  <div className={`wave-divider ${flipped ? 'wave-divider-bottom' : 'wave-divider-top'}`} style={{ color }}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.63,250.45-.09C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-shape" />
    </svg>
  </div>
)

export default function Home() {
  return (
    <div className="font-poppins relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -top-64 -left-64 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/8 blur-[80px] bottom-20 -right-40 animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <HeroSlider />

      <section className="relative py-32 bg-gradient-to-b from-[#16120e] to-[#0c0a08]">
        <WaveDivider color="#0c0a08" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">I Nostri Servizi</span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Trattamenti pensati <span className="text-primary italic">per te</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
              Ogni servizio nasce da un ascolto reale. Costruiamo percorsi su misura per darti risultati visibili.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="organic-card group h-full">
                  <div className="relative h-56 overflow-hidden soft-curve">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon size={18} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-playfair text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
                    <Link
                      to="/servizi"
                      className="inline-flex items-center gap-1.5 text-primary font-medium text-sm group-hover:gap-2.5 transition-all duration-300"
                    >
                      Scopri <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <WaveDivider color="#0c0a08" flipped />
      </section>

      <section className="relative py-32 bg-[#16120e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative soft-curve overflow-hidden aspect-[4/5] shadow-2xl">
                <img src={IMAGES.clinic} alt="Beauty Slim" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 bg-primary px-8 py-6 soft-curve text-center soft-shadow"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="font-playfair text-4xl font-bold text-white">10+</div>
                <div className="text-white/80 text-xs mt-1 uppercase tracking-wider">Anni</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Il Nostro Centro</span>
              <h2 className="font-playfair text-5xl font-bold text-foreground mb-8 leading-tight">
                Dove la cura diventa <span className="text-primary italic">esperienza</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Beauty Slim nasce ad Alessandria con un team che unisce esperienza, cura del dettaglio e attenzione concreta alla persona.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Staff con esperienza e formazione continua',
                  'Tecnologie selezionate per viso e corpo',
                  'Trattamenti su misura per te',
                  'Consulenza iniziale senza pressioni',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check size={18} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <Link to="/chi-siamo" className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all">
                  Scopri di più
                </Link>
                <Link to="/contatti" className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all">
                  Prenota Ora
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-gradient-to-b from-[#16120e] to-[#0c0a08]">
        <WaveDivider color="#0c0a08" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Testimonianze</span>
            <h2 className="font-playfair text-5xl font-bold text-foreground">
              Cosa dicono di <span className="text-primary italic">noi</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className="organic-card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#CDA45E" color="#CDA45E" />
                  ))}
                </div>
                <p className="text-foreground/80 text-base leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-center gap-3 pt-3 border-t border-primary/15">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <span className="font-semibold text-foreground text-sm">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.body} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Inizia Oggi</span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Pronta a ritrovare il tuo<br />
              <span className="text-primary italic">equilibrio?</span>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-10">
              Prenota una consulenza gratuita — senza impegno.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contatti"
                className="group px-10 py-5 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 soft-shadow"
              >
                Prenota Consulenza <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:0131234173"
                className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all"
              >
                <Phone size={18} className="inline mr-2" /> Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}