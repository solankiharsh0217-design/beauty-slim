import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Sparkles,
  Scissors,
  Smile,
  Leaf,
  HandHeart,
  Star,
  Shield,
  Calendar,
  MapPin,
  Check
} from 'lucide-react'
import './Home.css'
import heroConsultation from '../assets/generated/hero-beauty-consultation.png'
import clinicInterior from '../assets/generated/clinic-interior-reception.png'
import bodySculpting from '../assets/generated/body-sculpting-treatment.png'
import laserTreatment from '../assets/generated/laser-hair-removal-treatment.png'
import facialTreatment from '../assets/generated/facial-skincare-treatment.png'
import manicureTreatment from '../assets/generated/manicure-treatment.png'

const services = [
  {
    icon: Sparkles,
    title: 'Dimagrimento & Rimodellamento',
    description: 'Percorsi personalizzati per ridefinire il corpo con trattamenti mirati e tecnologie professionali.',
    image: bodySculpting
  },
  {
    icon: Scissors,
    title: 'Epilazione Laser',
    description: 'Trattamenti laser sicuri e progressivi per una pelle liscia, uniforme e curata tutto l\'anno.',
    image: laserTreatment
  },
  {
    icon: Smile,
    title: 'Cura del Viso',
    description: 'Protocolli avanzati per luminosita, tono e freschezza, con un approccio delicato ma efficace.',
    image: facialTreatment
  },
  {
    icon: Leaf,
    title: 'Estetica di Base',
    description: 'Manicure, pedicure e beauty care quotidiano per mantenere mani, piedi e dettagli sempre impeccabili.',
    image: manicureTreatment
  },
  {
    icon: HandHeart,
    title: 'Massaggi & Relax',
    description: 'Percorsi di benessere che combinano manualita, atmosfera e ascolto per un relax completo.',
    image: clinicInterior
  }
]

const benefits = [
  { icon: Shield, text: 'Tecnologie sicure e certificate' },
  { icon: Star, text: 'Oltre 500 clienti soddisfatti' },
  { icon: Calendar, text: 'Prima consulenza su prenotazione' }
]

const testimonials = [
  {
    name: 'Giulia M.',
    text: 'Ho trovato un percorso serio, curato e davvero personalizzato. Il centro e bellissimo e il team ti mette subito a tuo agio.',
    rating: 5
  },
  {
    name: 'Elena R.',
    text: 'Mi sono affidata a Beauty Slim per viso e laser: esperienza elegante, spiegazioni chiare e trattamenti eseguiti con grande attenzione.',
    rating: 5
  },
  {
    name: 'Laura B.',
    text: 'Un ambiente raffinato ma accogliente, con risultati visibili e un modo di lavorare molto professionale.',
    rating: 5
  }
]

export default function Home() {
  return (
    <div className="home page">
      <section className="hero">
        <div className="hero-media">
          <img
            src={heroConsultation}
            alt="Consulenza beauty personalizzata da Beauty Slim"
          />
        </div>
        <div className="hero-bg" />
        <div className="container hero-container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-intro-row">
              <p className="hero-subtitle">Beauty Slim Alessandria</p>
              <span className="hero-location">
                <MapPin size={16} />
                Via Trotti 69
              </span>
            </div>

            <h1>
              Bellezza e benessere in un&apos;atmosfera davvero curata.
            </h1>

            <p className="hero-description">
              Trattamenti per viso, corpo ed epilazione laser in un centro pensato per
              offrirti consulenza, precisione e benessere immediato.
            </p>

            <div className="hero-buttons">
              <Link to="/contatti" className="btn">Prenota Consulenza Gratuita</Link>
              <Link to="/servizi" className="btn btn-outline">Scopri i Servizi</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="hero-trust-band">
        <div className="container hero-trust-grid">
          {benefits.map((benefit) => (
            <div key={benefit.text} className="hero-trust-item">
              <benefit.icon size={20} />
              <span>{benefit.text}</span>
            </div>
          ))}
          <div className="hero-trust-quote">
            <Check size={18} />
            <p>Un centro che unisce immagine, serenita e tecnologia con uno stile piu credibile e contemporaneo.</p>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">I Nostri Servizi</p>
            <h2>Trattamenti completi per la tua bellezza</h2>
            <p>
              Ogni servizio nasce da un ascolto reale delle tue esigenze e viene costruito
              per darti risultati visibili, comfort e continuita.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <service.icon size={24} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/servizi" className="service-link">
                    Scopri di piu <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="services-cta">
            <Link to="/servizi" className="btn">
              Visualizza Tutti i Servizi
            </Link>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={clinicInterior}
                alt="Interno del centro Beauty Slim"
              />
              <div className="about-image-overlay">
                <div className="overlay-content">
                  <h3>5.0</h3>
                  <p>Esperienza percepita</p>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-subtitle">Il Nostro Centro</p>
              <h2>Esperienza e <span>professionalita</span> al tuo servizio</h2>
              <p>
                Beauty Slim nasce ad Alessandria con un team che unisce esperienza,
                cura del dettaglio e attenzione concreta alla persona.
              </p>
              <p>
                L&apos;obiettivo e offrirti un luogo bello da vivere, dove ogni trattamento
                sia spiegato bene, eseguito con precisione e inserito in un percorso
                realistico e personalizzato.
              </p>
              <ul className="features-list">
                <li>Staff con esperienza e formazione continua</li>
                <li>Tecnologie selezionate per viso, corpo e laser</li>
                <li>Trattamenti costruiti sulle tue esigenze</li>
                <li>Ambiente elegante, accogliente e ordinato</li>
                <li>Consulenza iniziale chiara e senza pressioni</li>
              </ul>
              <div className="about-buttons">
                <Link to="/chi-siamo" className="btn">
                  Leggi di Piu
                </Link>
                <Link to="/contatti" className="btn btn-outline">
                  Prenota Ora
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Atmosfera</p>
            <h2>Cosa rende diversa l&apos;esperienza</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#CDA45E" color="#CDA45E" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-name">{testimonial.name}</p>
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
            <h2>Pronta a ritrovare il tuo equilibrio estetico?</h2>
            <p>
              Prenota una consulenza gratuita e scopri il percorso piu adatto alle tue
              esigenze con un confronto chiaro, professionale e senza impegno.
            </p>
            <div className="cta-buttons">
              <Link to="/contatti" className="btn btn-large">
                Prenota Consulenza Gratuita
              </Link>
              <Link to="tel:0131234173" className="btn btn-outline-light">
                Chiamaci Ora
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
