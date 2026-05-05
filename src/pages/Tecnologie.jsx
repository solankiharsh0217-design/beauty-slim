import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Thermometer, Zap, Scan, Droplets, CheckCircle, ArrowRight } from 'lucide-react'
import './Tecnologie.css'
import bodySculpting from '../assets/generated/body-sculpting-treatment.png'
import laserTreatment from '../assets/generated/laser-hair-removal-treatment.png'
import facialTreatment from '../assets/generated/facial-skincare-treatment.png'
import clinicInterior from '../assets/generated/clinic-interior-reception.png'

const technologies = [
  {
    icon: Thermometer,
    title: 'QQN System',
    subtitle: 'Percorsi corpo con supporto tecnologico',
    description: 'Una tecnologia pensata per accompagnare i percorsi di rimodellamento con maggiore continuita, comfort e metodo.',
    image: bodySculpting,
    features: [
      'Approccio progressivo al trattamento',
      'Supporto nei percorsi corpo',
      'Comfort durante la seduta',
      'Lavoro su obiettivi mirati',
      'Esperienza ordinata e guidata',
      'Integrazione con altri protocolli'
    ]
  },
  {
    icon: Zap,
    title: 'Infrabaldan 3.0',
    subtitle: 'Tecnologia avanzata per il corpo',
    description: 'Uno strumento orientato al lavoro su silhouette, tonicita e definizione, inserito in percorsi costruiti su misura.',
    image: clinicInterior,
    features: [
      'Ridefinizione di aree mirate',
      'Percorsi personalizzati',
      'Supporto alla tonicita',
      'Integrazione con trattamenti corpo',
      'Metodo calibrato sulle esigenze',
      'Continuita nel tempo'
    ]
  },
  {
    icon: Scan,
    title: 'Laser Diodo',
    subtitle: 'Epilazione progressiva e professionale',
    description: 'Un servizio laser pensato per offrirti precisione, continuita e maggiore serenita durante tutto il percorso.',
    image: laserTreatment,
    features: [
      'Protocollo per viso e corpo',
      'Valutazione iniziale accurata',
      'Indicazioni chiare tra una seduta e l’altra',
      'Maggiore uniformita della pelle',
      'Comfort durante il trattamento',
      'Percorso organizzato e progressivo'
    ]
  },
  {
    icon: Droplets,
    title: 'Slim Press',
    subtitle: 'Benessere e drenaggio',
    description: 'Un trattamento pensato per alleggerire, riequilibrare e accompagnare i percorsi corpo con una sensazione di comfort diffuso.',
    image: facialTreatment,
    features: [
      'Sensazione di leggerezza',
      'Supporto ai percorsi corpo',
      'Momento di rilassamento guidato',
      'Integrazione con altri protocolli',
      'Trattamento non invasivo',
      'Esperienza ordinata e confortevole'
    ]
  }
]

export default function Tecnologie() {
  return (
    <div className="tecnologie page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="section-subtitle">Le Nostre Tecnologie</p>
            <h1>Attrezzature di ultima generazione</h1>
            <p>
              Utilizziamo tecnologie selezionate per rendere ogni percorso piu preciso,
              piu confortevole e piu coerente con gli obiettivi di chi si affida a noi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="tech-section">
        <div className="container">
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="tech-image">
                  <img src={tech.image} alt={tech.title} />
                </div>
                <div className="tech-content">
                  <div className="tech-icon">
                    <tech.icon size={32} />
                  </div>
                  <p className="tech-subtitle">{tech.subtitle}</p>
                  <h2>{tech.title}</h2>
                  <p className="tech-description">{tech.description}</p>
                  <ul className="tech-features">
                    {tech.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">I Vantaggi</p>
            <h2>Perche scegliere il nostro approccio</h2>
          </div>
          <div className="benefits-grid">
            <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>Sicurezza e chiarezza</h3>
              <p>Tecnologie selezionate e spiegate con un linguaggio semplice, prima di iniziare ogni percorso.</p>
            </motion.div>
            <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              <h3>Comfort durante la seduta</h3>
              <p>Ogni trattamento e pensato per farti sentire accompagnata, mai spaesata o sotto pressione.</p>
            </motion.div>
            <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
              <h3>Integrazione tra servizi</h3>
              <p>Le tecnologie non vivono da sole: vengono inserite in un percorso coerente con i tuoi obiettivi reali.</p>
            </motion.div>
            <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <h3>Personalizzazione</h3>
              <p>Ogni seduta viene calibrata sul tuo punto di partenza, sui tempi e sul risultato che desideri ottenere.</p>
            </motion.div>
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
            <h2>Vuoi capire quale tecnologia fa per te?</h2>
            <p>
              Prenota una consulenza gratuita: ti spiegheremo con chiarezza quale percorso
              puo adattarsi meglio alle tue esigenze e ai tuoi obiettivi.
            </p>
            <div className="cta-buttons">
              <Link to="/contatti" className="btn">
                Prenota Consulenza <ArrowRight size={18} />
              </Link>
              <Link to="/servizi" className="btn btn-outline">
                Visualizza Servizi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
