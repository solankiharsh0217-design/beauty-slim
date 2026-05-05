import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  Scissors,
  Smile,
  Leaf,
  HandHeart,
  Dumbbell,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import './Servizi.css'
import bodySculpting from '../assets/generated/body-sculpting-treatment.png'
import laserTreatment from '../assets/generated/laser-hair-removal-treatment.png'
import facialTreatment from '../assets/generated/facial-skincare-treatment.png'
import manicureTreatment from '../assets/generated/manicure-treatment.png'
import clinicInterior from '../assets/generated/clinic-interior-reception.png'

const services = [
  {
    category: 'Dimagrimento & Rimodellamento',
    icon: Sparkles,
    description: 'Percorsi su misura per silhouette, tonicita e ridefinizione del corpo con una lettura attenta delle tue esigenze.',
    image: bodySculpting,
    items: [
      'Consulenza iniziale personalizzata',
      'Percorsi rimodellanti progressivi',
      'Valutazione delle aree da trattare',
      'Tecnologie corpo mirate',
      'Supporto costante durante il percorso',
      'Obiettivi realistici e misurabili'
    ]
  },
  {
    category: 'Epilazione Laser',
    icon: Scissors,
    description: 'Un servizio pensato per offrirti comfort, continuita e una pelle piu uniforme, seduta dopo seduta.',
    image: laserTreatment,
    items: [
      'Laser professionale per viso e corpo',
      'Valutazione personalizzata della pelle',
      'Protocollo progressivo e sicuro',
      'Sedute organizzate con chiarezza',
      'Indicazioni pre e post trattamento',
      'Risultati visibili nel tempo'
    ]
  },
  {
    category: 'Cura del Viso',
    icon: Smile,
    description: 'Trattamenti studiati per dare luminosita, equilibrio e freschezza al viso, con un approccio delicato e professionale.',
    image: facialTreatment,
    items: [
      'Pulizia viso e protocolli glow',
      'Trattamenti anti-age e tono',
      'Routine calibrata sulle esigenze reali',
      'Idratazione e nutrimento mirati',
      'Peeling professionali selezionati',
      'Momento di relax e cura completa'
    ]
  },
  {
    category: 'Estetica di Base',
    icon: Leaf,
    description: 'Servizi fondamentali, eseguiti con precisione e gusto, per mantenere ogni dettaglio sempre curato.',
    image: manicureTreatment,
    items: [
      'Manicure classica e semipermanente',
      'Pedicure estetica e curativa',
      'Cura di mani e piedi',
      'Definizione e ordine nei dettagli',
      'Trattamenti beauty ricorrenti',
      'Ambiente pulito e rilassante'
    ]
  },
  {
    category: 'Massaggi & Relax',
    icon: HandHeart,
    description: 'Un’esperienza orientata al rilassamento, all’ascolto e al recupero del benessere fisico e mentale.',
    image: clinicInterior,
    items: [
      'Manualita rilassanti',
      'Atmosfera calma e privata',
      'Percorsi benessere su appuntamento',
      'Focus su comfort e distensione',
      'Abbinamento con altri trattamenti',
      'Esperienza curata nei dettagli'
    ]
  },
  {
    category: 'Trattamenti Speciali',
    icon: Dumbbell,
    description: 'Interventi mirati per obiettivi specifici, integrati in una proposta coerente e costruita su misura.',
    image: bodySculpting,
    items: [
      'Azioni mirate su aree specifiche',
      'Tecnologie selezionate',
      'Percorsi combinati viso e corpo',
      'Ridefinizione e tonicita',
      'Supporto nella continuita del trattamento',
      'Pianificazione personalizzata'
    ]
  }
]

const whyChooseUs = [
  'Prima consulenza conoscitiva su prenotazione',
  'Percorsi personalizzati per ogni cliente',
  'Tecnologie professionali selezionate',
  'Team attento, ordinato e qualificato',
  'Ambiente elegante e rassicurante',
  'Focus su risultati progressivi e realistici'
]

export default function Servizi() {
  return (
    <div className="servizi page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="section-subtitle">I Nostri Servizi</p>
            <h1>Trattamenti completi per la tua bellezza</h1>
            <p>
              Offriamo una selezione di trattamenti per viso, corpo, laser ed estetica
              quotidiana, costruiti per accompagnarti in un percorso curato e coerente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                className={`service-category ${index % 2 === 1 ? 'reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                viewport={{ once: true }}
              >
                <div className="service-category-image">
                  <img src={service.image} alt={service.category} />
                </div>
                <div className="service-category-content">
                  <div className="category-header">
                    <div className="category-icon">
                      <service.icon size={28} />
                    </div>
                    <div>
                      <h2>{service.category}</h2>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <ul className="category-items">
                    {service.items.map((item) => (
                      <li key={item}>
                        <CheckCircle size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contatti" className="btn">
                    Prenota Questo Servizio <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Perche Sceglierci</p>
            <h2>Un metodo piu chiaro, piu curato, piu coerente</h2>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                className="why-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={24} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Pronta a iniziare il tuo percorso?</h2>
            <p>
              Prenota una consulenza e scopri quale combinazione di trattamenti puo
              accompagnarti meglio, con equilibrio tra risultato, comfort e continuita.
            </p>
            <Link to="/contatti" className="btn">
              Prenota Consulenza Gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
