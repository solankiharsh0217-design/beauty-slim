import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import './Gallery.css'
import heroConsultation from '../assets/generated/hero-beauty-consultation.png'
import clinicInterior from '../assets/generated/clinic-interior-reception.png'
import bodySculpting from '../assets/generated/body-sculpting-treatment.png'
import laserTreatment from '../assets/generated/laser-hair-removal-treatment.png'
import facialTreatment from '../assets/generated/facial-skincare-treatment.png'
import manicureTreatment from '../assets/generated/manicure-treatment.png'

const galleryImages = [
  { src: facialTreatment, category: 'Trattamenti Viso' },
  { src: clinicInterior, category: 'Centro Estetico' },
  { src: bodySculpting, category: 'Dimagrimento' },
  { src: heroConsultation, category: 'Consulenza Beauty' },
  { src: manicureTreatment, category: 'Manicure & Pedicure' },
  { src: laserTreatment, category: 'Epilazione Laser' },
  { src: bodySculpting, category: 'Trattamenti Corpo' },
  { src: clinicInterior, category: 'Benessere & Atmosfera' }
]

export default function Gallery() {
  return (
    <div className="gallery page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="section-subtitle">Galleria</p>
            <h1>I nostri trattamenti in foto</h1>
            <p>
              Una selezione di immagini che racconta l&apos;atmosfera del centro, i servizi
              principali e il livello di cura con cui costruiamo ogni esperienza.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${index}`}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img src={image.src} alt={image.category} />
                <div className="gallery-overlay">
                  <span>{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="container">
          <div className="social-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Contatto diretto, senza complicazioni</h2>
              <p>
                Se vuoi informazioni su un trattamento o desideri prenotare una consulenza,
                puoi scriverci direttamente oppure chiamarci.
              </p>
              <div className="social-links">
                <a
                  href="https://wa.me/393486243991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </a>
                <a href="tel:0131234173" className="social-link social-link-alt">
                  <Phone size={24} />
                  <span>Chiamaci</span>
                </a>
              </div>
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
            <h2>Pronta a vivere l&apos;esperienza Beauty Slim?</h2>
            <p>
              Prenota una consulenza gratuita e vieni a scoprire dal vivo il nostro modo
              di lavorare, l&apos;ambiente del centro e i trattamenti piu adatti a te.
            </p>
            <Link to="/contatti" className="btn">
              Prenota Ora <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
