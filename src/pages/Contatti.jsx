import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, title: 'Indirizzo', details: ['Via Trotti, 69', '15121 Alessandria'] },
  { icon: Phone, title: 'Telefono', details: ['0131 234173', '348 6243991'] },
  { icon: Mail, title: 'Email', details: ['info@beautyslim.it'] },
  { icon: Clock, title: 'Orari', details: ['Lun-Ven: 10:00 - 20:00', 'Sab: 10:00 - 14:00'] },
]

const faqs = [
  { q: 'Quanto dura la prima consulenza?', a: 'Circa 30-45 minuti: il tempo necessario per ascoltare le tue esigenze e costruire un primo orientamento.' },
  { q: 'I trattamenti sono dolorosi?', a: 'La maggior parte dei trattamenti e delicata. Nel laser si percepisce solo una lieve sensazione di calore.' },
  { q: 'Quando si iniziano a vedere i risultati?', a: 'Dipende dal trattamento e dal punto di partenza: alcuni effetti si notano presto, altri richiedono maggiore continuita.' },
  { q: 'Offrite pagamenti rateali?', a: "Si, proponiamo diverse soluzioni per agevolare l'accesso ai percorsi piu completi." },
]

export default function Contatti() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Ciao! Mi chiamo ${formData.name}. Sono interessata al servizio: ${formData.service}. Il mio numero e ${formData.phone}. ${formData.message}`
    window.open(`https://wa.me/393486243991?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#fbf8f3] to-[#f3ece3] pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Contatti</p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-5">Prenota la tua prima seduta</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Siamo qui per ascoltare le tue esigenze e aiutarti a capire da dove iniziare.
              Puoi compilare il form oppure contattarci direttamente su WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-playfair text-3xl font-bold text-secondary mb-4">Parliamo di te</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Raccontaci cosa vorresti trattare. Ti ricontatteremo per confermare l&apos;appuntamento e orientarti verso il percorso piu adatto.
              </p>
              <div className="space-y-6 mb-10">
                {contactInfo.map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">{item.title}</h4>
                      {item.details.map(d => <p key={d} className="text-gray-500 text-sm">{d}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-light p-6 rounded-2xl">
                <p className="text-secondary font-medium mb-4">Preferisci un contatto diretto?</p>
                <a
                  href="https://wa.me/393486243991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={20} />
                  Scrivici su WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="bg-light rounded-2xl p-12 text-center">
                  <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-secondary mb-3">Grazie per la tua richiesta!</h3>
                  <p className="text-gray-500 mb-6">
                    Ti abbiamo reindirizzato su WhatsApp per completare l&apos;invio. Il nostro team ti rispondera al piu presto.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
                    Invia un&apos;altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-light rounded-2xl p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">Nome Completo *</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        placeholder="Il tuo nome"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">Telefono *</label>
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        placeholder="Il tuo numero"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="La tua email (opzionale)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Servizio di Interesse *</label>
                    <select
                      name="service" value={formData.service} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-sm"
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
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Raccontaci cosa vorresti trattare</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} rows="4"
                      placeholder="Descrivi brevemente cosa vorresti affrontare..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-sm resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
                    <Send size={18} />
                    Invia Messaggio
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Domande Frequenti</p>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Dubbi comuni prima di iniziare</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white p-7 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-secondary mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.425788538769!2d8.611557315242093!3d44.91122527338317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478775a1063f6305%3A0x9584703136adee8e!2sVia%20Trotti%2C%2069%2C%2015121%20Alessandria%20AL!5e0!3m2!1sit!2sit!4v1"
              width="100%" height="450"
              style={{ border: 0 }}
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