import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import './Contatti.css'

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Ciao! Mi chiamo ${formData.name}. Sono interessata al servizio: ${formData.service}. Il mio numero e ${formData.phone}. ${formData.message}`
    const whatsappUrl = `https://wa.me/393486243991?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Indirizzo',
      details: ['Via Trotti, 69', '15121 Alessandria']
    },
    {
      icon: Phone,
      title: 'Telefono',
      details: ['0131 234173', '348 6243991']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@beautyslim.it']
    },
    {
      icon: Clock,
      title: 'Orari',
      details: ['Lun-Ven: 10:00 - 20:00', 'Sab: 10:00 - 14:00']
    }
  ]

  return (
    <div className="contatti page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="section-subtitle">Contatti</p>
            <h1>Prenota la tua prima seduta</h1>
            <p>
              Siamo qui per ascoltare le tue esigenze e aiutarti a capire da dove iniziare.
              Puoi compilare il form oppure contattarci direttamente su WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Parliamo di te</h2>
              <p>
                Raccontaci cosa vorresti trattare. Ti ricontatteremo per confermare
                l&apos;appuntamento e orientarti verso il percorso piu adatto.
              </p>

              <div className="contact-items">
                {contactInfo.map((item) => (
                  <div key={item.title} className="contact-item">
                    <div className="contact-icon">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      {item.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-cta">
                <p>Preferisci un contatto diretto?</p>
                <a
                  href="https://wa.me/393486243991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  Scrivici su WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={60} />
                  <h3>Grazie per la tua richiesta!</h3>
                  <p>
                    Ti abbiamo reindirizzato su WhatsApp per completare l&apos;invio.
                    Il nostro team ti rispondera al piu presto.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn">
                    Invia un&apos;altra richiesta
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nome Completo *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telefono *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo numero"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="La tua email (opzionale)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Servizio di Interesse *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="dimagrimento">Dimagrimento & Rimodellamento</option>
                      <option value="epilazione">Epilazione Laser</option>
                      <option value="viso">Cura del Viso</option>
                      <option value="estetica">Estetica di Base</option>
                      <option value="massaggi">Massaggi & Relax</option>
                      <option value="manicure">Manicure & Pedicure</option>
                      <option value="altro">Altro / Non so</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Raccontaci cosa vorresti trattare</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Descrivi brevemente cosa vorresti affrontare..."
                    />
                  </div>

                  <button type="submit" className="btn btn-submit">
                    <Send size={18} />
                    Invia Messaggio
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Domande Frequenti</p>
            <h2>Dubbi comuni prima di iniziare</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Quanto dura la prima consulenza?</h4>
              <p>Circa 30-45 minuti: il tempo necessario per ascoltare le tue esigenze e costruire un primo orientamento.</p>
            </div>
            <div className="faq-item">
              <h4>I trattamenti sono dolorosi?</h4>
              <p>La maggior parte dei trattamenti e delicata. Nel laser si percepisce solo una lieve sensazione di calore.</p>
            </div>
            <div className="faq-item">
              <h4>Quando si iniziano a vedere i risultati?</h4>
              <p>Dipende dal trattamento e dal punto di partenza: alcuni effetti si notano presto, altri richiedono maggiore continuita.</p>
            </div>
            <div className="faq-item">
              <h4>Offrite pagamenti rateali?</h4>
              <p>Si, proponiamo diverse soluzioni per agevolare l&apos;accesso ai percorsi piu completi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.425788538769!2d8.611557315242093!3d44.91122527338317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478775a1063f6305%3A0x9584703136adee8e!2sVia%20Trotti%2C%2069%2C%2015121%20Alessandria%20AL!5e0!3m2!1sit!2sit!4v1"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
