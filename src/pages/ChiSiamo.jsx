import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Heart, Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react'
import './ChiSiamo.css'
import clinicInterior from '../assets/generated/clinic-interior-reception.png'
import heroConsultation from '../assets/generated/hero-beauty-consultation.png'

const features = [
  {
    icon: Award,
    title: 'Esperienza consolidata',
    description: 'Una base professionale costruita negli anni, con attenzione ai dettagli e alle persone.'
  },
  {
    icon: Users,
    title: 'Team presente e qualificato',
    description: 'Un approccio curato, ordinato e costante in ogni fase del trattamento.'
  },
  {
    icon: Heart,
    title: 'Ascolto e personalizzazione',
    description: 'Ogni percorso parte da esigenze reali, obiettivi chiari e aspettative ben allineate.'
  },
  {
    icon: Sparkles,
    title: 'Tecnologie e atmosfera',
    description: 'Strumenti selezionati e un ambiente elegante per rendere l’esperienza piu serena e completa.'
  }
]

const stats = [
  { number: '500+', label: 'Clienti Soddisfatti' },
  { number: '10+', label: 'Anni di Esperienza' },
  { number: '6', label: 'Aree di Trattamento' },
  { number: '5.0', label: 'Percezione di Qualita' }
]

export default function ChiSiamo() {
  return (
    <div className="chi-siamo page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="section-subtitle">Chi Siamo</p>
            <h1>Il tuo centro benessere ad Alessandria</h1>
            <p>
              Beauty Slim e uno spazio dedicato alla bellezza e al benessere, dove stile,
              ascolto e precisione convivono in un’esperienza piu curata e piu rassicurante.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={clinicInterior} alt="Reception del centro Beauty Slim" />
              <div className="about-image-card">
                <img src={heroConsultation} alt="Consulenza Beauty Slim" />
              </div>
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-subtitle">La Nostra Storia</p>
              <h2>Passione e <span>professionalita</span> al tuo servizio</h2>
              <p>
                Beauty Slim nasce ad Alessandria con la volonta di offrire un luogo in cui
                la cura della persona non sia soltanto un trattamento, ma un’esperienza
                coerente, ordinata e piacevole da vivere.
              </p>
              <p>
                Il nostro modo di lavorare mette insieme consulenza, atmosfera, tecnologie
                selezionate e una relazione piu attenta, per accompagnarti con maggiore
                chiarezza verso i tuoi obiettivi estetici e di benessere.
              </p>
              <p>
                Ogni dettaglio del centro e stato pensato per creare una sensazione di calma,
                riservatezza e fiducia, dal primo incontro fino alla continuita del percorso.
              </p>
              <ul className="features-list">
                {features.map((feature) => (
                  <li key={feature.title}>
                    <div className="feature-icon">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">I Nostri Valori</p>
            <h2>Cosa ci guida ogni giorno</h2>
          </div>
          <div className="values-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <div className="location-grid">
            <motion.div
              className="location-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-subtitle">Dove Siamo</p>
              <h2>Vieni a trovarci</h2>
              <p className="location-desc">
                Il centro si trova in Via Trotti 69 ad Alessandria, in una posizione
                comoda da raggiungere per concederti un momento di cura in piena tranquillita.
              </p>
              <div className="location-details">
                <div className="location-item">
                  <MapPin size={22} />
                  <div>
                    <h4>Indirizzo</h4>
                    <p>Via Trotti, 69 - 15121 Alessandria</p>
                  </div>
                </div>
                <div className="location-item">
                  <Phone size={22} />
                  <div>
                    <h4>Telefono</h4>
                    <p>0131 234173</p>
                    <p>348 6243991</p>
                  </div>
                </div>
                <div className="location-item">
                  <Mail size={22} />
                  <div>
                    <h4>Email</h4>
                    <p>info@beautyslim.it</p>
                  </div>
                </div>
                <div className="location-item">
                  <Clock size={22} />
                  <div>
                    <h4>Orari</h4>
                    <p>Lunedi - Venerdi: 10:00 - 20:00</p>
                    <p>Sabato: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
              <Link to="/contatti" className="btn">
                Prenota una Visita
              </Link>
            </motion.div>

            <motion.div
              className="location-map"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.425788538769!2d8.611557315242093!3d44.91122527338317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478775a1063f6305%3A0x9584703136adee8e!2sVia%20Trotti%2C%2069%2C%2015121%20Alessandria%20AL!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
            <h2>Pronta a conoscerci di persona?</h2>
            <p>
              Prenota una consulenza gratuita e scopri come possiamo costruire insieme
              un percorso piu adatto ai tuoi obiettivi di bellezza e benessere.
            </p>
            <div className="cta-buttons">
              <Link to="/contatti" className="btn">
                Prenota Consulenza
              </Link>
              <Link to="tel:0131234173" className="btn btn-outline">
                Chiamaci
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
