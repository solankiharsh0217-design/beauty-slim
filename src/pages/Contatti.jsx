import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import WaveDivider from '../components/WaveDivider'

const contactInfo = [
  { icon: MapPin, title: 'Indirizzo', details: ['Via Trotti, 69', '15121 Alessandria'] },
  { icon: Phone, title: 'Telefono', details: ['0131 234173', '348 6243991'] },
  { icon: Mail, title: 'Email', details: ['info@beautyslim.it'] },
  { icon: Clock, title: 'Orari', details: ['Lun-Ven: 10:00 - 20:00', 'Sab: 10:00 - 14:00'] },
]

export default function Contatti() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Ciao! Mi chiamo ${formData.name}. Sono interessata al servizio: ${formData.service}. Il mio numero è ${formData.phone}. ${formData.message}`
    window.open(`https://wa.me/393486243991?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="font-poppins">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden bg-[#16120e]">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(205,164,94,0.25), transparent 60%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Contatti</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              Inizia il tuo<br /><span className="text-primary italic">percorso oggi</span>
            </h1>
            <div className="wave-ornament mb-5" style={{ margin: '0 auto 1.25rem' }} />
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Siamo qui per ascoltare le tue esigenze. Compila il form o contattaci — risponderemo entro poche ore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="relative py-16 bg-[#16120e]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="info-card p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
                  <item.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                {item.details.map(d => (
                  <p key={d} className="text-muted-foreground text-xs leading-relaxed">{d}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#0f0c0a" />

      {/* ── Form ── */}
      <section className="relative py-28 bg-[#0f0c0a]">
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block text-center">
              Scrivici
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
              Prenota la tua <span className="text-primary italic">consulenza</span>
            </h2>
            <div className="wave-ornament mb-8" style={{ margin: '0.75rem auto 2rem' }} />

            {submitted ? (
              <div className="spa-card p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-primary" />
                </div>
                <p className="text-foreground text-base">
                  Grazie! Verrai reindirizzata su WhatsApp per completare la richiesta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name" placeholder="Il tuo nome"
                    value={formData.name} onChange={handleChange} required
                    className="px-4 py-3 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                  <input
                    name="phone" placeholder="Il tuo telefono"
                    value={formData.phone} onChange={handleChange} required
                    className="px-4 py-3 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <input
                  name="email" type="email" placeholder="La tua email"
                  value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                />
                <select
                  name="service" value={formData.service} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-2xl bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="Dimagrimento">Dimagrimento & Rimodellamento</option>
                  <option value="Epilazione Laser">Epilazione Laser</option>
                  <option value="Cura del Viso">Cura del Viso</option>
                  <option value="Estetica Base">Estetica di Base</option>
                  <option value="Massaggi">Massaggi & Relax</option>
                  <option value="Altro">Altro</option>
                </select>
                <textarea
                  name="message" placeholder="Raccontaci le tue esigenze..."
                  value={formData.message} onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                />
                <button type="submit"
                  className="w-full px-6 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
                  Invia Richiesta <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Call CTA ── */}
      <section className="relative py-24 bg-[#0f0c0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              Hai domande? <span className="text-primary italic">Chiamaci</span>
            </h2>
            <div className="wave-ornament mb-7" style={{ margin: '0.75rem auto 1.75rem' }} />
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Siamo disponibili per chiarire ogni tuo dubbio.
            </p>
            <a href="tel:0131234173"
              className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
              <Phone size={14} /> 0131 234173
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}