import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Heart, Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react'

const IMAGES = {
  clinic: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
  consultation: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
}

const features = [
  { icon: Award, title: 'Esperienza consolidata', description: 'Una base professionale costruita negli anni, con attenzione ai dettagli e alle persone.' },
  { icon: Users, title: 'Team presente e qualificato', description: 'Un approccio curato, ordinato e costante in ogni fase del trattamento.' },
  { icon: Heart, title: 'Ascolto e personalizzazione', description: "Ogni percorso parte da esigenze reali, obiettivi chiari e aspettative ben allineate." },
  { icon: Sparkles, title: 'Tecnologie e atmosfera', description: "Strumenti selezionati e un ambiente elegante per rendere l'esperienza piu serena e completa." },
]

const stats = [
  { number: '500+', label: 'Clienti Soddisfatti' },
  { number: '10+', label: 'Anni di Esperienza' },
  { number: '6', label: 'Aree di Trattamento' },
  { number: '5.0', label: 'Percezione di Qualita' },
]

export default function ChiSiamo() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#fbf8f3] to-[#f3ece3] pt-40 pb-20 text-center relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Chi Siamo</p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-5">Il tuo centro benessere ad Alessandria</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Beauty Slim e uno spazio dedicato alla bellezza e al benessere, dove stile, ascolto e precisione convivono in un&apos;esperienza piu curata e piu rassicurante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="font-playfair text-5xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={IMAGES.clinic} alt="Reception Beauty Slim" className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src={IMAGES.consultation} alt="Consulenza" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">La Nostra Storia</p>
              <h2 className="font-playfair text-4xl font-bold text-secondary mb-6">
                Passione e <span className="text-primary">professionalita</span> al tuo servizio
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Beauty Slim nasce ad Alessandria con la volonta di offrire un luogo in cui la cura della persona non sia soltanto un trattamento, ma un&apos;esperienza coerente, ordinata e piacevole da vivere.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Il nostro modo di lavorare mette insieme consulenza, atmosfera, tecnologie selezionate e una relazione piu attenta, per accompagnarti con maggiore chiarezza verso i tuoi obiettivi estetici e di benessere.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Ogni dettaglio del centro e stato pensato per creare una sensazione di calma, riservatezza e fiducia, dal primo incontro fino alla continuita del percorso.
              </p>
              <ul className="space-y-6">
                {features.map(f => (
                  <li key={f.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <f.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">{f.title}</h4>
                      <p className="text-gray-500 text-sm">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">I Nostri Valori</p>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Cosa ci guida ogni giorno</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, index) => (
              <motion.div
                key={f.title}
                className="text-center p-8 bg-light rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <f.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-secondary mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Dove Siamo</p>
              <h2 className="font-playfair text-4xl font-bold text-secondary mb-4">Vieni a trovarci</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Il centro si trova in Via Trotti 69 ad Alessandria, in una posizione comoda da raggiungere per concederti un momento di cura in piena tranquillita.
              </p>
              <div className="space-y-6 mb-8">
                {[
                  { icon: MapPin, title: 'Indirizzo', lines: ['Via Trotti, 69 - 15121 Alessandria'] },
                  { icon: Phone, title: 'Telefono', lines: ['0131 234173', '348 6243991'] },
                  { icon: Mail, title: 'Email', lines: ['info@beautyslim.it'] },
                  { icon: Clock, title: 'Orari', lines: ['Lunedi - Venerdi: 10:00 - 20:00', 'Sabato: 10:00 - 14:00'] },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">{item.title}</h4>
                      {item.lines.map(l => <p key={l} className="text-gray-500 text-sm">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contatti" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
                Prenota una Visita
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.425788538769!2d8.611557315242093!3d44.91122527338317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478775a1063f6305%3A0x9584703136adee8e!2sVia%20Trotti%2C%2069%2C%2015121%20Alessandria%20AL!5e0!3m2!1sit!2sit!4v1"
                width="100%" height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="max-w-2xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-4xl font-bold mb-4">Pronta a conoscerci di persona?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza gratuita e scopri come possiamo costruire insieme un percorso piu adatto ai tuoi obiettivi.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contatti" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
                Prenota Consulenza
              </Link>
              <a href="tel:0131234173" className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-secondary transition-all">
                Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}