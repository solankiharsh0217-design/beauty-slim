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

const WaveSection = ({ children, className = '' }) => (
  <section className={`relative py-24 wave-bg ${className}`}>
    {children}
  </section>
)

export default function Home() {
  return (
    <div className="font-poppins relative">
      <AmbientGlow />

      <HeroSlider />

      <WaveSection>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">I Nostri Servizi</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Trattamenti pensati <span className="text-primary italic">per te</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Ogni servizio nasce da un ascolto reale. Costruiamo percorsi su misura.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="organic-card group h-full overflow-hidden">
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-black">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon size={16} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-1.5">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                    <Link to="/servizi" className="inline-flex items-center gap-1.5 text-primary font-medium text-sm">
                      Scopri <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </WaveSection>

      <section className="relative py-24 bg-[#0f0c0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl">
                <img src={IMAGES.clinic} alt="Beauty Slim" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary px-6 py-5 rounded-2xl text-center shadow-lg">
                <div className="font-playfair text-3xl font-bold text-white">10+</div>
                <div className="text-white/80 text-xs mt-0.5 uppercase tracking-wider">Anni</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Il Nostro Centro</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Dove la cura diventa <span className="text-primary italic">esperienza</span>
              </h2>
              <p className="text-muted-foreground text-base mb-6">
                Beauty Slim nasce ad Alessandria con un team che unisce esperienza, cura del dettaglio e attenzione alla persona.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Staff con esperienza', 'Tecnologie selezionate', 'Trattamenti su misura', 'Consulenza senza pressioni'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                    <Check size={16} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-3">
                <Link to="/chi-siamo" className="px-7 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all">
                  Scopri di più
                </Link>
                <Link to="/contatti" className="px-7 py-3 border-2 border-primary text-primary rounded-full font-medium text-sm hover:bg-primary hover:text-white transition-all">
                  Prenota Ora
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveSection className="bg-[#0f0c0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Testimonianze</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Cosa dicono di <span className="text-primary italic">noi</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className="organic-card p-5 text-center"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (<Star key={i} size={14} fill="#CDA45E" color="#CDA45E" />))}
                </div>
                <p className="text-foreground/75 text-sm mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-center gap-2 pt-3 border-t border-primary/15">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">{t.name[0]}</span>
                  </div>
                  <span className="font-semibold text-foreground text-sm">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </WaveSection>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.body} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Inizia Oggi</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pronta a ritrovare il tuo<br /><span className="text-primary italic">equilibrio?</span>
            </h2>
            <p className="text-white/65 text-base mb-8">Prenota una consulenza gratuita — senza impegno.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contatti" className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all">
                Prenota Consulenza
              </Link>
              <a href="tel:0131234173" className="px-8 py-3.5 border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2">
                <Phone size={14} /> Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}