import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Scissors, Smile, Leaf, HandHeart, Dumbbell, CheckCircle, ArrowRight } from 'lucide-react'

const IMAGES = {
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
  manicure: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/369154dc2_manicure-treatment.png',
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
  massage: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ce9cfd52_generated_image.png',
}

const services = [
  {
    category: 'Dimagrimento & Rimodellamento', icon: Sparkles, image: IMAGES.body,
    description: 'Percorsi su misura per silhouette, tonicità e ridefinizione del corpo con una lettura attenta delle tue esigenze.',
    items: ['Consulenza iniziale personalizzata','Percorsi rimodellanti progressivi','Valutazione delle aree da trattare','Tecnologie corpo mirate','Supporto costante durante il percorso','Obiettivi realistici e misurabili'],
  },
  {
    category: 'Epilazione Laser', icon: Scissors, image: IMAGES.laser,
    description: 'Un servizio pensato per offrirti comfort, continuità e una pelle più uniforme, seduta dopo seduta.',
    items: ['Laser professionale per viso e corpo','Valutazione personalizzata della pelle','Protocollo progressivo e sicuro','Sedute organizzate con chiarezza','Indicazioni pre e post trattamento','Risultati visibili nel tempo'],
  },
  {
    category: 'Cura del Viso', icon: Smile, image: IMAGES.facial,
    description: 'Trattamenti studiati per dare luminosità, equilibrio e freschezza al viso, con un approccio delicato e professionale.',
    items: ['Pulizia viso e protocolli glow','Trattamenti anti-age e tono','Routine calibrata sulle esigenze reali','Idratazione e nutrimento mirati','Peeling professionali selezionati','Momento di relax e cura completa'],
  },
  {
    category: 'Estetica di Base', icon: Leaf, image: IMAGES.manicure,
    description: 'Servizi fondamentali, eseguiti con precisione e gusto, per mantenere ogni dettaglio sempre curato.',
    items: ['Manicure classica e semipermanente','Pedicure estetica e curativa','Cura di mani e piedi','Definizione e ordine nei dettagli','Trattamenti beauty ricorrenti','Ambiente pulito e rilassante'],
  },
  {
    category: 'Massaggi & Relax', icon: HandHeart, image: IMAGES.massage,
    description: "Un'esperienza orientata al rilassamento, all'ascolto e al recupero del benessere fisico e mentale.",
    items: ['Manualità rilassanti','Atmosfera calma e privata','Percorsi benessere su appuntamento','Focus su comfort e distensione','Abbinamento con altri trattamenti','Esperienza curata nei dettagli'],
  },
  {
    category: 'Trattamenti Speciali', icon: Dumbbell, image: IMAGES.body,
    description: 'Interventi mirati per obiettivi specifici, integrati in una proposta coerente e costruita su misura.',
    items: ['Azioni mirate su aree specifiche','Tecnologie selezionate','Percorsi combinati viso e corpo','Ridefinizione e tonicità','Supporto nella continuità del trattamento','Pianificazione personalizzata'],
  },
]

const whyChooseUs = [
  'Prima consulenza conoscitiva su prenotazione',
  'Percorsi personalizzati per ogni cliente',
  'Tecnologie professionali selezionate',
  'Team attento, ordinato e qualificato',
  'Ambiente elegante e rassicurante',
  'Focus su risultati progressivi e realistici',
]

export default function Servizi() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="relative pt-40 pb-24 text-center overflow-hidden bg-[#faf8f6]">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(ellipse at 60% 0%, rgba(205,164,94,0.2), transparent 60%)'}} />
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">I Nostri Servizi</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-secondary mb-5 leading-tight">
              Trattamenti per la tua<br /><span className="text-primary italic">bellezza completa</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
              Offriamo una selezione di trattamenti per viso, corpo, laser ed estetica quotidiana, costruiti per accompagnarti in un percorso curato e coerente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              style={{ direction: index % 2 === 1 ? 'rtl' : 'ltr' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              viewport={{ once: true }}
            >
              <div style={{ direction: 'ltr' }} className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src={service.image} alt={service.category} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div style={{ direction: 'ltr' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-primary text-xs uppercase tracking-[0.15em] font-medium">Trattamento</span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-secondary mb-3 leading-tight">{service.category}</h2>
                <p className="text-gray-500 leading-relaxed mb-7 text-[15px]">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-secondary">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle size={13} className="text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contatti" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-dark transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  Prenota Questo Servizio <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Perché Sceglierci</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Un metodo <span className="text-primary italic">più curato</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} className="text-primary" />
                </div>
                <span className="text-secondary font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="max-w-2xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-4xl font-bold mb-4">Pronta a iniziare<br /><span className="text-primary italic">il tuo percorso?</span></h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza e scopri quale combinazione di trattamenti può accompagnarti meglio.
            </p>
            <Link to="/contatti" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all hover:-translate-y-1 hover:shadow-xl">
              Prenota Consulenza Gratuita <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}