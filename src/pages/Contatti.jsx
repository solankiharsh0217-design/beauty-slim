import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, title: 'Indirizzo', details: ['Via Trotti, 69', '15121 Alessandria'] },
  { icon: Phone, title: 'Telefono', details: ['0131 234173', '348 6243991'] },
  { icon: Mail, title: 'Email', details: ['info@beautyslim.it'] },
  { icon: Clock, title: 'Orari', details: ['Lun-Ven: 10:00 - 20:00', 'Sab: 10:00 - 14:00'] },
]

const faqs = [
  { q: 'Quanto dura la prima consulenza?', a: 'Circa 30-45 minuti: il tempo necessario per ascoltare le tue esigenze e costruire un primo orientamento.' },
  { q: 'I trattamenti sono dolorosi?', a: 'La maggior parte dei trattamenti è delicata. Nel laser si percepisce solo una lieve sensazione di calore.' },
  { q: 'Quando si iniziano a vedere i risultati?', a: 'Dipende dal trattamento e dal punto di partenza: alcuni effetti si notano presto, altri richiedono maggiore continuità.' },
  { q: 'Offrite pagamenti rateali?', a: "Sì, proponiamo diverse soluzioni per agevolare l'accesso ai percorsi più completi." },
  { q: 'Devo prenotare la prima visita?', a: 'Sì, la consulenza iniziale è sempre su prenotazione così possiamo dedicarti il tempo necessario senza fretta.' },
  { q: 'I trattamenti sono adatti a tutti i tipi di pelle?', a: 'Prima di ogni percorso effettuiamo una valutazione personalizzata per assicurarci che il trattamento sia adatto alle tue caratteristiche.' },
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
      {/* Hero */}
      <section className="bg-background pt-40 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(205,164,94,0.2), transparent 60%)' }} />
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Contatti</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-secondary mb-5 leading-tight">
              Inizia il tuo<br /><span className="text-primary italic">percorso oggi</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
              Siamo qui per ascoltare le tue esigenze. Compila il form o contattaci su WhatsApp — risponderemo entro poche ore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Parliamo di te</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-secondary mb-4 leading-tight">
                Raccontaci cosa<br /><span className="text-primary italic">vorresti migliorare</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                Ti ricontatteremo per confermare l'appuntamento e orientarti verso il percorso più adatto — <strong className="text-secondary">senza impegno e senza pressioni</strong>.
              </p>
              <div className="space-y-5 mb-8">
                {contactInfo.map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1 text-sm">{item.title}</h4>
                      {item.details.map(d => <p key={d} className="text-gray-500 text-sm">{d}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-card p-6 rounded-2xl border border-primary/20">
                <p className="text-secondary font-semibold mb-2 text-sm">Preferisci un contatto diretto?</p>
                <p className="text-gray-500 text-sm mb-4">Scrivici su WhatsApp e ti risponderemo subito.</p>
                <a
                  href="https://wa.me/393486243991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  Scrivici su WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="bg-card rounded-3xl p-12 text-center border border-border">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-secondary mb-3">Grazie per la tua richiesta!</h3>
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                    Ti abbiamo reindirizzato su WhatsApp. Il nostro team ti risponderà al più presto.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-dark transition-all">
                    <ArrowRight size={16} /> Invia un'altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 space-y-5 border border-border">
                  <h3 className="font-playfair text-xl font-bold text-secondary mb-1">Prenota la tua consulenza</h3>
                  <p className="text-gray-500 text-sm mb-2">Gratuita, senza impegno, in circa 30 minuti.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Nome Completo *</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        placeholder="Il tuo nome"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm transition-all text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Telefono *</label>
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        placeholder="Il tuo numero"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm transition-all text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Email</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="La tua email (opzionale)"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Servizio di Interesse *</label>
                    <select
                      name="service" value={formData.service} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm transition-all text-foreground"
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="dimagrimento">Dimagrimento & Rimodellamento</option>
                      <option value="epilazione">Epilazione Laser</option>
                      <option value="viso">Cura del Viso</option>
                      <option value="estetica">Estetica di Base</option>
                      <option value="massaggi">Massaggi & Relax</option>
                      <option value="manicure">Manicure & Pedicure</option>
                      <option value="altro">Altro / Non so ancora</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Messaggio</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} rows="4"
                      placeholder="Descrivi brevemente cosa vorresti affrontare..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm resize-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all hover:shadow-lg hover:-translate-y-0.5">
                    <Send size={16} />
                    Invia e Apri WhatsApp
                  </button>
                  <p className="text-center text-muted-foreground text-xs">Verrai reindirizzata su WhatsApp per completare l'invio.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Domande Frequenti</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Dubbi comuni <span className="text-primary italic">prima di iniziare</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="bg-background p-7 rounded-2xl shadow-sm hover:shadow-md transition-all border border-border"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={13} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-secondary text-sm">{faq.q}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-9">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-0">
        <div className="max-w-7xl mx-auto px-5 pb-0">
          <div className="rounded-3xl overflow-hidden shadow-xl">
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