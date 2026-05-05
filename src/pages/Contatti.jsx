import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react'

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
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -top-64 -left-64" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/8 blur-[80px] bottom-20 -right-40" />
      </div>

      <section className="relative pt-40 pb-20 text-center overflow-hidden bg-[#16120e]">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(205,164,94,0.25), transparent 60%)'}} />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Contatti</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Inizia il tuo<br /><span className="text-primary italic">percorso oggi</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Siamo qui per ascoltare le tue esigenze. Compila il form o contattaci — risponderemo entro poche ore.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-[#16120e]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="organic-card p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon size={20} className="text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                {item.details.map(d => (
                  <p key={d} className="text-muted-foreground text-xs">{d}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-[#16120e]">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block text-center">Scrivici</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Prenota la tua <span className="text-primary italic">consulenza</span>
            </h2>
            
            {submitted ? (
              <div className="organic-card p-8 text-center">
                <p className="text-foreground">Grazie! Verrai reindirizzato su WhatsApp per completare la richiesta.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Il tuo nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    name="phone"
                    placeholder="Il tuo telefono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="La tua email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
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
                  name="message"
                  placeholder="Raccontaci le tue esigenze..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Invia Richiesta <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hai domande? <span className="text-primary italic">Chiamaci</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Siamo disponibili per chiarire ogni tuo dubbio.
            </p>
            <a
              href="tel:0131234173"
              className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all inline-flex items-center gap-2"
            >
              <Phone size={14} /> 0131 234173
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}