import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Heart, Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react'

const IMAGES = {
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
  consultation: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ec85e685_hero-beauty-consultation.png',
}

const features = [
  { icon: Award, title: 'Esperienza consolidata', description: 'Una base professionale costruita negli anni, con attenzione ai dettagli e alle persone.' },
  { icon: Users, title: 'Team presente e qualificato', description: 'Un approccio curato, ordinato e costante in ogni fase del trattamento.' },
  { icon: Heart, title: 'Ascolto e personalizzazione', description: "Ogni percorso parte da esigenze reali, obiettivi chiari e aspettative ben allineate." },
  { icon: Sparkles, title: 'Tecnologie e atmosfera', description: "Strumenti selezionati e un ambiente elegante per rendere l'esperienza più serena e completa." },
]

const stats = [
  { number: '500+', label: 'Clienti Soddisfatte' },
  { number: '10+', label: 'Anni di Esperienza' },
  { number: '6', label: 'Aree di Trattamento' },
  { number: '5.0', label: '★ Qualità' },
]

export default function ChiSiamo() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-[#faf8f6] pt-40 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(205,164,94,0.2), transparent 60%)'}} />
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Chi Siamo</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-secondary mb-5 leading-tight">
              Il tuo centro benessere<br /><span className="text-primary italic">ad Alessandria</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
              Beauty Slim è uno spazio dedicato alla bellezza e al benessere, dove stile, ascolto e precisione convivono in un'esperienza più curata e rassicurante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-secondary">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}>
                <h3 className="font-playfair text-5xl font-bold text-primary mb-1">{stat.number}</h3>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div className="relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={IMAGES.clinic} alt="Reception Beauty Slim" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src={IMAGES.consultation} alt="Consulenza" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">La Nostra Storia</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Passione e <span className="text-primary italic">professionalità</span><br />al tuo servizio
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-[15px]">
                Beauty Slim nasce ad Alessandria con la volontà di offrire un luogo in cui la <strong className="text-secondary">cura della persona</strong> non sia soltanto un trattamento, ma un'esperienza coerente, ordinata e piacevole da vivere.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4 text-[15px]">
                Il nostro modo di lavorare mette insieme consulenza, atmosfera, <strong className="text-secondary">tecnologie selezionate</strong> e una relazione più attenta, per accompagnarti con maggiore chiarezza verso i tuoi obiettivi.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10 text-[15px]">
                Ogni dettaglio del centro è stato pensato per creare una sensazione di <strong className="text-secondary">calma, riservatezza e fiducia</strong>.
              </p>
              <ul className="space-y-5">
                {features.map(f => (
                  <li key={f.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <f.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1 text-sm">{f.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">I Nostri Valori</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Cosa ci <span className="text-primary italic">guida ogni giorno</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, index) => (
              <motion.div key={f.title} className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Dove Siamo</span>
              </div>
              <h2 className="font-playfair text-4xl font-bold text-secondary mb-4 leading-tight">Vieni a <span className="text-primary italic">trovarci</span></h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                Il centro si trova in Via Trotti 69 ad Alessandria, in una posizione comoda da raggiungere per concederti un momento di cura in piena tranquillità.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, title: 'Indirizzo', lines: ['Via Trotti, 69 - 15121 Alessandria'] },
                  { icon: Phone, title: 'Telefono', lines: ['0131 234173', '348 6243991'] },
                  { icon: Mail, title: 'Email', lines: ['info@beautyslim.it'] },
                  { icon: Clock, title: 'Orari', lines: ['Lunedì - Venerdì: 10:00 - 20:00', 'Sabato: 10:00 - 14:00'] },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1 text-sm">{item.title}</h4>
                      {item.lines.map(l => <p key={l} className="text-gray-500 text-sm">{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contatti" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-dark transition-all hover:-translate-y-0.5 hover:shadow-lg">
                Prenota una Visita
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.425788538769!2d8.611557315242093!3d44.91122527338317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478775a1063f6305%3A0x9584703136adee8e!2sVia%20Trotti%2C%2069%2C%2015121%20Alessandria%20AL!5e0!3m2!1sit!2sit!4v1"
                width="100%" height="440" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="max-w-2xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-4xl font-bold mb-4">Pronta a conoscerci<br /><span className="text-primary italic">di persona?</span></h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza gratuita e scopri come possiamo costruire insieme il tuo percorso.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contatti" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all hover:-translate-y-1">
                Prenota Consulenza
              </Link>
              <a href="tel:0131234173" className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all">
                Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}