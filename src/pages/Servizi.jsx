import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Scissors, Smile, Leaf, HandHeart, Dumbbell, CheckCircle, ArrowRight } from 'lucide-react'

const IMAGES = {
  body: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
  laser: 'https://images.unsplash.com/photo-1598524374912-f5fd5e6b6d55?w=600&q=80',
  facial: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  manicure: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  clinic: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
}

const services = [
  {
    category: 'Dimagrimento & Rimodellamento', icon: Sparkles, image: IMAGES.body,
    description: 'Percorsi su misura per silhouette, tonicita e ridefinizione del corpo con una lettura attenta delle tue esigenze.',
    items: ['Consulenza iniziale personalizzata','Percorsi rimodellanti progressivi','Valutazione delle aree da trattare','Tecnologie corpo mirate','Supporto costante durante il percorso','Obiettivi realistici e misurabili'],
  },
  {
    category: 'Epilazione Laser', icon: Scissors, image: IMAGES.laser,
    description: 'Un servizio pensato per offrirti comfort, continuita e una pelle piu uniforme, seduta dopo seduta.',
    items: ['Laser professionale per viso e corpo','Valutazione personalizzata della pelle','Protocollo progressivo e sicuro','Sedute organizzate con chiarezza','Indicazioni pre e post trattamento','Risultati visibili nel tempo'],
  },
  {
    category: 'Cura del Viso', icon: Smile, image: IMAGES.facial,
    description: 'Trattamenti studiati per dare luminosita, equilibrio e freschezza al viso, con un approccio delicato e professionale.',
    items: ['Pulizia viso e protocolli glow','Trattamenti anti-age e tono','Routine calibrata sulle esigenze reali','Idratazione e nutrimento mirati','Peeling professionali selezionati','Momento di relax e cura completa'],
  },
  {
    category: 'Estetica di Base', icon: Leaf, image: IMAGES.manicure,
    description: 'Servizi fondamentali, eseguiti con precisione e gusto, per mantenere ogni dettaglio sempre curato.',
    items: ['Manicure classica e semipermanente','Pedicure estetica e curativa','Cura di mani e piedi','Definizione e ordine nei dettagli','Trattamenti beauty ricorrenti','Ambiente pulito e rilassante'],
  },
  {
    category: 'Massaggi & Relax', icon: HandHeart, image: IMAGES.clinic,
    description: "Un'esperienza orientata al rilassamento, all'ascolto e al recupero del benessere fisico e mentale.",
    items: ['Manualita rilassanti','Atmosfera calma e privata','Percorsi benessere su appuntamento','Focus su comfort e distensione','Abbinamento con altri trattamenti','Esperienza curata nei dettagli'],
  },
  {
    category: 'Trattamenti Speciali', icon: Dumbbell, image: IMAGES.body,
    description: 'Interventi mirati per obiettivi specifici, integrati in una proposta coerente e costruita su misura.',
    items: ['Azioni mirate su aree specifiche','Tecnologie selezionate','Percorsi combinati viso e corpo','Ridefinizione e tonicita','Supporto nella continuita del trattamento','Pianificazione personalizzata'],
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
      <section className="bg-gradient-to-br from-[#fbf8f3] to-[#f3ece3] pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at top center, rgba(201,168,124,0.3), transparent 50%)'}} />
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">I Nostri Servizi</p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-5">Trattamenti completi per la tua bellezza</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Offriamo una selezione di trattamenti per viso, corpo, laser ed estetica quotidiana, costruiti per accompagnarti in un percorso curato e coerente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              style={{ direction: index % 2 === 1 ? 'rtl' : 'ltr' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              viewport={{ once: true }}
            >
              <div style={{ direction: 'ltr' }} className="rounded-2xl overflow-hidden shadow-lg">
                <img src={service.image} alt={service.category} className="w-full h-80 object-cover" />
              </div>
              <div style={{ direction: 'ltr' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <service.icon size={26} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-playfair text-2xl font-bold text-secondary">{service.category}</h2>
                    <p className="text-gray-500 mt-1 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                  {service.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contatti" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
                  Prenota Questo Servizio <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Perche Sceglierci</p>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Un metodo piu chiaro, piu curato, piu coerente</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={24} className="text-primary shrink-0" />
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
            <h2 className="font-playfair text-4xl font-bold mb-4">Pronta a iniziare il tuo percorso?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza e scopri quale combinazione di trattamenti puo accompagnarti meglio, con equilibrio tra risultato, comfort e continuita.
            </p>
            <Link to="/contatti" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
              Prenota Consulenza Gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}