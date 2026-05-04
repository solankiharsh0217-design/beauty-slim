import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Sparkles, Scissors, Smile, Leaf, HandHeart,
  Star, Shield, Calendar, MapPin, Check
} from 'lucide-react'

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80',
  clinic: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
  body: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
  laser: 'https://images.unsplash.com/photo-1598524374912-f5fd5e6b6d55?w=600&q=80',
  facial: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  manicure: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
}

const services = [
  { icon: Sparkles, title: 'Dimagrimento & Rimodellamento', description: 'Percorsi personalizzati per ridefinire il corpo con trattamenti mirati e tecnologie professionali.', image: IMAGES.body },
  { icon: Scissors, title: 'Epilazione Laser', description: "Trattamenti laser sicuri e progressivi per una pelle liscia, uniforme e curata tutto l'anno.", image: IMAGES.laser },
  { icon: Smile, title: 'Cura del Viso', description: 'Protocolli avanzati per luminosita, tono e freschezza, con un approccio delicato ma efficace.', image: IMAGES.facial },
  { icon: Leaf, title: 'Estetica di Base', description: 'Manicure, pedicure e beauty care quotidiano per mantenere mani, piedi e dettagli sempre impeccabili.', image: IMAGES.manicure },
  { icon: HandHeart, title: 'Massaggi & Relax', description: 'Percorsi di benessere che combinano manualita, atmosfera e ascolto per un relax completo.', image: IMAGES.clinic },
]

const benefits = [
  { icon: Shield, text: 'Tecnologie sicure e certificate' },
  { icon: Star, text: 'Oltre 500 clienti soddisfatti' },
  { icon: Calendar, text: 'Prima consulenza su prenotazione' },
]

const testimonials = [
  { name: 'Giulia M.', text: 'Ho trovato un percorso serio, curato e davvero personalizzato. Il centro e bellissimo e il team ti mette subito a tuo agio.', rating: 5 },
  { name: 'Elena R.', text: 'Mi sono affidata a Beauty Slim per viso e laser: esperienza elegante, spiegazioni chiare e trattamenti eseguiti con grande attenzione.', rating: 5 },
  { name: 'Laura B.', text: 'Un ambiente raffinato ma accogliente, con risultati visibili e un modo di lavorare molto professionale.', rating: 5 },
]

export default function Home() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Beauty Slim" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-24 pb-16">
          <motion.div
            className="max-w-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <p className="text-primary font-medium tracking-widest text-sm uppercase">Beauty Slim Alessandria</p>
              <span className="flex items-center gap-1 text-white/70 text-sm">
                <MapPin size={14} /> Via Trotti 69
              </span>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bellezza e benessere in un&apos;atmosfera davvero curata.
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Trattamenti per viso, corpo ed epilazione laser in un centro pensato per
              offrirti consulenza, precisione e benessere immediato.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contatti" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                Prenota Consulenza Gratuita
              </Link>
              <Link to="/servizi" className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-secondary transition-all duration-300">
                Scopri i Servizi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap gap-6 items-center justify-between">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-3 text-secondary">
                <b.icon size={20} className="text-primary" />
                <span className="font-medium text-sm">{b.text}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-secondary/70 text-sm max-w-sm">
              <Check size={16} className="text-primary shrink-0" />
              <p>Un centro che unisce immagine, serenita e tecnologia con uno stile piu credibile e contemporaneo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">I Nostri Servizi</p>
            <h2 className="font-playfair text-4xl font-bold text-secondary mb-4">Trattamenti completi per la tua bellezza</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ogni servizio nasce da un ascolto reale delle tue esigenze e viene costruito per darti risultati visibili, comfort e continuita.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="h-52 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                    <service.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link to="/servizi" className="flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                    Scopri di piu <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/servizi" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-300">
              Visualizza Tutti i Servizi
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={IMAGES.clinic} alt="Centro Beauty Slim" className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl text-center">
                <h3 className="font-playfair text-3xl font-bold">5.0</h3>
                <p className="text-sm opacity-90">Esperienza percepita</p>
                <div className="text-yellow-300 mt-1">★★★★★</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Il Nostro Centro</p>
              <h2 className="font-playfair text-4xl font-bold text-secondary mb-6">
                Esperienza e <span className="text-primary">professionalita</span> al tuo servizio
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Beauty Slim nasce ad Alessandria con un team che unisce esperienza, cura del dettaglio e attenzione concreta alla persona.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                L&apos;obiettivo e offrirti un luogo bello da vivere, dove ogni trattamento sia spiegato bene, eseguito con precisione e inserito in un percorso realistico e personalizzato.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Staff con esperienza e formazione continua',
                  'Tecnologie selezionate per viso, corpo e laser',
                  'Trattamenti costruiti sulle tue esigenze',
                  'Ambiente elegante, accogliente e ordinato',
                  'Consulenza iniziale chiara e senza pressioni',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-secondary text-sm">
                    <Check size={18} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link to="/chi-siamo" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
                  Leggi di Piu
                </Link>
                <Link to="/contatti" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all">
                  Prenota Ora
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Atmosfera</p>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Cosa rende diversa l&apos;esperienza</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className="bg-white p-8 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#CDA45E" color="#CDA45E" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-secondary">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="max-w-3xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl font-bold mb-4">Pronta a ritrovare il tuo equilibrio estetico?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza gratuita e scopri il percorso piu adatto alle tue esigenze con un confronto chiaro, professionale e senza impegno.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contatti" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1">
                Prenota Consulenza Gratuita
              </Link>
              <a href="tel:0131234173" className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-secondary transition-all duration-300">
                Chiamaci Ora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}