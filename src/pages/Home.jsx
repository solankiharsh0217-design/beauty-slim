import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Sparkles, Scissors, Smile, Leaf, HandHeart,
  Star, Shield, Calendar, MapPin, Check, Phone
} from 'lucide-react'

const IMAGES = {
  hero: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ec85e685_hero-beauty-consultation.png',
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
  manicure: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/369154dc2_manicure-treatment.png',
  massage: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ce9cfd52_generated_image.png',
}

const services = [
  { icon: Sparkles, title: 'Dimagrimento & Rimodellamento', description: 'Percorsi personalizzati per ridefinire il corpo con trattamenti mirati e tecnologie professionali.', image: IMAGES.body },
  { icon: Scissors, title: 'Epilazione Laser', description: "Trattamenti laser sicuri e progressivi per una pelle liscia, uniforme e curata tutto l'anno.", image: IMAGES.laser },
  { icon: Smile, title: 'Cura del Viso', description: 'Protocolli avanzati per luminosità, tono e freschezza, con un approccio delicato ma efficace.', image: IMAGES.facial },
  { icon: Leaf, title: 'Estetica di Base', description: 'Manicure, pedicure e beauty care quotidiano per mantenere mani, piedi e dettagli sempre impeccabili.', image: IMAGES.manicure },
  { icon: HandHeart, title: 'Massaggi & Relax', description: 'Percorsi di benessere che combinano manualità, atmosfera e ascolto per un relax completo.', image: IMAGES.massage },
]

const testimonials = [
  { name: 'Giulia M.', text: 'Ho trovato un percorso serio, curato e davvero personalizzato. Il centro è bellissimo e il team ti mette subito a tuo agio.', rating: 5 },
  { name: 'Elena R.', text: 'Mi sono affidata a Beauty Slim per viso e laser: esperienza elegante, spiegazioni chiare e trattamenti eseguiti con grande attenzione.', rating: 5 },
  { name: 'Laura B.', text: 'Un ambiente raffinato ma accogliente, con risultati visibili e un modo di lavorare molto professionale.', rating: 5 },
]

const stats = [
  { number: '500+', label: 'Clienti Soddisfatte' },
  { number: '10+', label: 'Anni di Esperienza' },
  { number: '6', label: 'Aree di Trattamento' },
  { number: '5.0', label: '★ Valutazione' },
]

export default function Home() {
  return (
    <div className="font-poppins">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Beauty Slim" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Decorative line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase">
                Beauty Slim · Alessandria
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Bellezza che{' '}
              <span className="italic text-primary">trasforma,</span>
              <br />
              cura che{' '}
              <span className="relative inline-block">
                <span className="relative z-10">dura.</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-primary/30 -skew-x-2" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Trattamenti per viso, corpo ed epilazione laser in un centro pensato per
              offrirti <strong className="text-white font-medium">consulenza, precisione e benessere</strong> in ogni seduta.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm tracking-wide hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
              >
                Prenota Consulenza Gratuita
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/servizi"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/50 text-white rounded-full font-medium text-sm hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                Scopri i Servizi
              </Link>
            </motion.div>

            {/* Trust micro-badges */}
            <motion.div
              className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { icon: Shield, text: 'Tecnologie certificate' },
                { icon: Star, text: '500+ clienti soddisfatte' },
                { icon: MapPin, text: 'Via Trotti 69, Alessandria' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-white/70 text-sm">
                  <b.icon size={15} className="text-primary shrink-0" />
                  <span>{b.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest">
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <section className="bg-secondary py-12">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="font-playfair text-4xl font-bold text-primary mb-1">{s.number}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-5">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">I Nostri Servizi</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary leading-tight">
                Trattamenti pensati<br />
                <span className="text-primary italic">per te</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Ogni servizio nasce da un ascolto reale. Costruiamo percorsi su misura per darti risultati visibili e continuità.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <service.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-secondary leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to="/servizi"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    Scopri di più <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* "All Services" card */}
            <motion.div
              className="bg-secondary rounded-2xl overflow-hidden flex items-center justify-center p-10 text-center min-h-[340px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center mx-auto mb-5">
                  <Sparkles size={28} className="text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">E molto altro</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">Esplora tutti i nostri trattamenti e trova quello più adatto a te.</p>
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-dark transition-all"
                >
                  Tutti i Servizi <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────────── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image Collage */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src={IMAGES.clinic} alt="Centro Beauty Slim" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white px-7 py-5 rounded-2xl shadow-xl text-center">
                <div className="font-playfair text-4xl font-bold leading-none">10+</div>
                <div className="text-white/80 text-xs mt-1 uppercase tracking-wider">Anni di esperienza</div>
              </div>
              {/* Floating mini card */}
              <div className="absolute -top-5 -left-5 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#CDA45E" color="#CDA45E" />)}
                </div>
                <span className="text-xs text-secondary font-semibold">500+ Recensioni</span>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Il Nostro Centro</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Dove la cura<br />
                diventa un'
                <span className="text-primary italic">esperienza.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-[15px]">
                Beauty Slim nasce ad Alessandria con un team che unisce <strong className="text-secondary">esperienza, cura del dettaglio</strong> e attenzione concreta alla persona.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                L'obiettivo è offrirti un luogo bello da vivere, dove ogni trattamento sia spiegato bene, eseguito con precisione e inserito in un percorso <strong className="text-secondary">realistico e personalizzato</strong>.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Staff con esperienza e formazione continua',
                  'Tecnologie selezionate per viso, corpo e laser',
                  'Trattamenti costruiti sulle tue esigenze',
                  'Ambiente elegante, accogliente e ordinato',
                  'Consulenza iniziale chiara e senza pressioni',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-secondary text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/chi-siamo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white rounded-full font-medium text-sm hover:bg-secondary/80 transition-all"
                >
                  Scopri la nostra storia
                </Link>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary text-primary rounded-full font-medium text-sm hover:bg-primary hover:text-white transition-all"
                >
                  Prenota Ora
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-28 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Come Funziona</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Da zero al tuo <span className="text-primary italic">risultato</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Un processo semplice, trasparente e pensato per metterti sempre a tuo agio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line - desktop only */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-primary/30" />
            {[
              { step: '01', title: 'Prenota', desc: 'Compila il form o scrivici su WhatsApp. La consulenza iniziale è sempre gratuita.' },
              { step: '02', title: 'Consulenza', desc: 'Incontriamoci: ti ascoltiamo, valutiamo le tue esigenze e costruiamo un piano su misura.' },
              { step: '03', title: 'Trattamento', desc: 'Iniziamo il tuo percorso con tecnologie selezionate e un team sempre presente.' },
              { step: '04', title: 'Risultati', desc: 'Vedi i risultati nel tempo con un approccio progressivo, realistico e duraturo.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-5 relative">
                  <span className="font-playfair text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
            >
              Inizia Ora — È Gratuito <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-28 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Testimonianze</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary">
              Cosa dicono di noi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#CDA45E" color="#CDA45E" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <span className="font-semibold text-secondary text-sm">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.body} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Inizia Oggi</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Pronta a ritrovare il tuo<br />
              <span className="text-primary italic">equilibrio estetico?</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-10 text-lg">
              Prenota una consulenza gratuita e scopri il percorso più adatto a te — senza impegno.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
              >
                Prenota Consulenza Gratuita <ArrowRight size={16} />
              </Link>
              <a
                href="tel:0131234173"
                className="inline-flex items-center gap-2 px-9 py-4 border border-white/40 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-300"
              >
                <Phone size={16} /> Chiamaci Ora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}