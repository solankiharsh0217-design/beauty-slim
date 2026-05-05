import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Scissors, Smile, Leaf, HandHeart, Dumbbell, ArrowRight, Phone } from 'lucide-react'

const IMAGES = {
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
  manicure: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/369154dc2_manicure-treatment.png',
  massage: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ce9cfd52_generated_image.png',
}

const services = [
  {
    category: 'Dimagrimento & Rimodellamento',
    icon: Sparkles,
    image: IMAGES.body,
    description: 'Percorsi su misura per silhouette, tonicità e ridefinizione del corpo.',
    items: ['Consulenza iniziale personalizzata', 'Percorsi rimodellanti progressivi', 'Valutazione delle aree da trattare', 'Tecnologie corpo mirate'],
  },
  {
    category: 'Epilazione Laser',
    icon: Scissors,
    image: IMAGES.laser,
    description: 'Comfort, continuità e una pelle più uniforme, seduta dopo seduta.',
    items: ['Laser professionale per viso e corpo', 'Valutazione personalizzata della pelle', 'Protocollo progressivo e sicuro', 'Indicazioni pre e post trattamento'],
  },
  {
    category: 'Cura del Viso',
    icon: Smile,
    image: IMAGES.facial,
    description: 'Luminosità, equilibrio e freschezza al viso con approccio delicato.',
    items: ['Pulizia viso e protocolli glow', 'Trattamenti anti-age e tono', 'Routine calibrata sulle esigenze', 'Idratazione e nutrimento mirati'],
  },
  {
    category: 'Estetica di Base',
    icon: Leaf,
    image: IMAGES.manicure,
    description: 'Servizi fondamentali eseguiti con precisione e cura per ogni dettaglio.',
    items: ['Manicure classica e semipermanente', 'Pedicure estetica e curativa', 'Cura di mani e piedi', 'Trattamenti beauty ricorrenti'],
  },
  {
    category: 'Massaggi & Relax',
    icon: HandHeart,
    image: IMAGES.massage,
    description: 'Rilassamento, ascolto e recupero del benessere fisico e mentale.',
    items: ['Manualità rilassanti', 'Atmosfera calma e privata', 'Percorsi benessere su appuntamento', 'Focus su comfort e distensione'],
  },
  {
    category: 'Trattamenti Speciali',
    icon: Dumbbell,
    image: IMAGES.body,
    description: 'Interventi mirati per obiettivi specifici, integrati in una proposta coerente.',
    items: ['Azioni mirate su aree specifiche', 'Tecnologie selezionate', 'Percorsi combinati viso e corpo', 'Pianificazione personalizzata'],
  },
]

const AmbientGlow = () => (
  <>
    <div className="ambient-glow ambient-glow-1" />
    <div className="ambient-glow ambient-glow-2" />
  </>
)

export default function Servizi() {
  return (
    <div className="font-poppins relative">
      <AmbientGlow />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.facial} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#16120e]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase mb-4 block">I Nostri Servizi</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Trattamenti per la tua<br /><span className="text-primary italic">bellezza completa</span>
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Offriamo una selezione di trattamenti per viso, corpo, laser ed estetica quotidiana.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 bg-[#16120e]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">I Nostri Servizi</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tutti i nostri <span className="text-primary italic">trattamenti</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Scopri la gamma completa dei nostri servizi.
            </p>
          </motion.div>

          <div className="circle-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="circle-card group h-full overflow-hidden">
                  <div className="relative h-36 sm:h-40 soft-curve">
                    <img
                      src={service.image}
                      alt={service.category}
                      className="w-full h-full object-cover soft-curve-img"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 w-8 h-8 circle-card-sm bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon size={14} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-playfair text-base font-semibold text-foreground mb-1">{service.category}</h3>
                    <p className="text-muted-foreground text-xs mb-2 line-clamp-2">{service.description}</p>
                    <Link
                      to="/contatti"
                      className="inline-flex items-center gap-1 text-primary font-medium text-xs"
                    >
                      Prenota <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.body} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Prenota Ora</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pronta a iniziare<br />
              <span className="text-primary italic">il tuo percorso?</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Prenota una consulenza e scopri quale combinazione di trattamenti può accompagnarti meglio.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contatti"
                className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all"
              >
                Prenota Consulenza
              </Link>
              <a
                href="tel:0131234173"
                className="px-8 py-3.5 border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all"
              >
                <Phone size={14} className="inline mr-1.5" /> Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}