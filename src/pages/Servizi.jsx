import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Scissors, Smile, Leaf, HandHeart, Dumbbell, ArrowRight, Phone, X, Check } from 'lucide-react'
import WaveDivider from '../components/WaveDivider'

const IMAGES = {
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
  manicure: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/369154dc2_manicure-treatment.png',
  massage: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ce9cfd52_generated_image.png',
}

const services = [
  {
    category: 'Dimagrimento & Rimodellamento',
    icon: Sparkles,
    image: IMAGES.body,
    description: 'Percorsi su misura per silhouette, tonicità e ridefinizione del corpo.',
    fullDescription: 'Il nostro percorso dimagrimento è studiato su ogni cliente partendo da una valutazione approfondita del corpo, dello stile di vita e degli obiettivi. Utilizziamo tecnologie selezionate come il QQN System e l\'Infrabaldan 3.0 per agire sulle adiposità localizzate, migliorare il tono muscolare e ridefinire la silhouette in modo progressivo e naturale.',
    items: ['Consulenza e misurazione iniziale personalizzata', 'Percorsi rimodellanti con tecnologie avanzate', 'Valutazione delle aree da trattare (addome, fianchi, cosce)', 'Monitoraggio risultati con scheda personalizzata', 'Consigli su alimentazione e stile di vita'],
    duration: '60–90 min per seduta',
    sessions: '8–12 sedute consigliate',
  },
  {
    category: 'Epilazione Laser',
    icon: Scissors,
    image: IMAGES.laser,
    description: 'Epilazione definitiva con Laser Diodo per una pelle liscia e senza pensieri.',
    fullDescription: 'Con il nostro Laser Diodo di ultima generazione offriamo un\'epilazione definitiva sicura per tutti i fototipi. La tecnologia agisce selettivamente sul follicolo pilifero, riducendo progressivamente la crescita del pelo in modo permanente. Adatta a viso, ascelle, gambe, inguine e tutte le zone del corpo, con massimo comfort e sicurezza.',
    items: ['Laser Diodo professionale per ogni zona', 'Valutazione personalizzata del fototipo cutaneo', 'Protocollo progressivo e indolore', 'Indicazioni pre e post trattamento incluse', 'Trattamento anche per zone sensibili'],
    duration: '20–60 min (zona trattata)',
    sessions: '6–8 sedute per ciclo completo',
  },
  {
    category: 'Cura del Viso',
    icon: Smile,
    image: IMAGES.facial,
    description: 'Protocolli avanzati per luminosità, idratazione e giovinezza del viso.',
    fullDescription: 'I nostri trattamenti viso sono pensati per rispondere a ogni esigenza cutanea: pelle spenta, macchie, acne, rughe o secchezza. Partiamo da un\'analisi della pelle e creiamo un protocollo personalizzato con prodotti professionali e tecniche specifiche per restituire luminosità, tono e freschezza al tuo viso.',
    items: ['Pulizia viso profonda e protocolli glow', 'Trattamenti anti-age, anti-macchia e riequilibranti', 'Routine personalizzata in base al tipo di pelle', 'Idratazione e nutrimento intensivi', 'Consigli per la skincare quotidiana a casa'],
    duration: '50–75 min per seduta',
    sessions: 'Ciclo mensile consigliato',
  },
  {
    category: 'Estetica di Base',
    icon: Leaf,
    image: IMAGES.manicure,
    description: 'Manicure, pedicure e beauty care eseguiti con cura e precisione.',
    fullDescription: 'La cura del corpo parte dai dettagli. I nostri servizi di estetica base includono manicure, pedicure, ceretta e tutti i trattamenti fondamentali per sentirsi sempre al meglio. Ogni servizio viene eseguito con attenzione, prodotti di qualità e tecnica precisa per un risultato impeccabile.',
    items: ['Manicure classica e semipermanente gel', 'Pedicure estetica e curativa', 'Cera araba e orientale per tutto il corpo', 'Trattamenti mani e piedi rigeneranti', 'Sopracciglia e labbra'],
    duration: '30–60 min per servizio',
    sessions: 'Mantenimento ogni 3–4 settimane',
  },
  {
    category: 'Massaggi & Relax',
    icon: HandHeart,
    image: IMAGES.massage,
    description: 'Percorsi di benessere per ritrovare equilibrio fisico e mentale.',
    fullDescription: 'I nostri massaggi combinano tecniche manuali tradizionali e moderne per offrire un\'esperienza di relax profondo e rigenerazione. Che tu cerchi sollievo dalla tensione muscolare, miglioramento della circolazione o semplicemente un momento di benessere puro, creiamo il percorso giusto per te.',
    items: ['Massaggio rilassante corpo intero', 'Massaggio decontratturante e sportivo', 'Percorsi benessere personalizzati', 'Trattamenti drenanti con Slim Press', 'Atmosfera calma, privata e accogliente'],
    duration: '50–80 min per seduta',
    sessions: 'Ciclo bisettimanale consigliato',
  },
  {
    category: 'Trattamenti Speciali',
    icon: Dumbbell,
    image: IMAGES.body,
    description: 'Interventi mirati su specifiche problematiche, con percorsi combinati.',
    fullDescription: 'I trattamenti speciali nascono per rispondere a esigenze più mirate: cellulite resistente, ritenzione idrica cronica, perdita di elasticità, o combinazioni di problematiche. Costruiamo percorsi multitecnologia che integrano i nostri macchinari e le nostre tecniche manuali per risultati più completi e duraturi.',
    items: ['Anticellulite intensivo (corpo + tecnologie)', 'Percorsi viso + corpo combinati', 'Protocolli post-parto e rassodamento', 'Trattamenti intensivi pre-estate', 'Pianificazione personalizzata multi-seduta'],
    duration: '60–120 min per seduta',
    sessions: 'Da valutare in consulenza',
  },
]

const AmbientGlow = () => (
  <>
    <div className="ambient-glow ambient-glow-1" />
    <div className="ambient-glow ambient-glow-2" />
  </>
)

export default function Servizi() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="font-poppins relative">
      <AmbientGlow />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.facial} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-secondary" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">I Nostri Servizi</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Trattamenti per la tua<br />
              <span className="text-primary italic">bellezza completa</span>
            </h1>
            <div className="wave-ornament mb-5" style={{ margin: '0 auto 1.25rem' }} />
            <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
              Ogni trattamento nasce da un ascolto reale e da una valutazione personalizzata. Non offriamo pacchetti standard, ma percorsi costruiti su di te. Clicca su un servizio per scoprire tutti i dettagli.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="relative py-24 bg-secondary">
        <WaveDivider />
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-3 block">Tutti i Trattamenti</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3">
              Cosa facciamo <span className="text-primary italic">per te</span>
            </h2>
            <div className="wave-ornament" />
            <p className="text-muted-foreground max-w-xl mx-auto text-base mt-5">
              Scopri ogni servizio nel dettaglio — clicca su una card per conoscere benefici, durata e cosa aspettarti.
            </p>
          </motion.div>

          <div className="spa-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: index * 0.09 }}
                onClick={() => setSelected(service)}
                className="cursor-pointer"
              >
                <div className="spa-card group text-center flex flex-col items-center py-8 px-5 h-full hover:border-primary/40 transition-all">
                  <div className="oval-img-wrap mb-4">
                    <img src={service.image} alt={service.category} />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center mb-3">
                    <service.icon size={15} className="text-primary" />
                  </div>
                  <h3 className="font-playfair text-base font-semibold text-foreground mb-2">{service.category}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">{service.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs group-hover:gap-3 transition-all duration-300">
                    Scopri <ArrowRight size={11} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Floating Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
            <motion.div
              className="relative bg-card border border-primary/30 rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img src={selected.image} alt={selected.category} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-primary/80 transition-all"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <selected.icon size={14} className="text-primary" />
                  </div>
                  <h2 className="font-playfair text-xl font-bold text-white">{selected.category}</h2>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-muted-foreground text-sm leading-relaxed">{selected.fullDescription}</p>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                    <span className="w-5 h-px bg-primary" /> Cosa include
                  </h4>
                  <ul className="space-y-2">
                    {selected.items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-foreground text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} className="text-primary" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted/50 rounded-2xl p-4 text-center border border-border">
                    <p className="text-primary font-bold text-sm">{selected.sessions}</p>
                    <p className="text-muted-foreground text-xs mt-1">Ciclo consigliato</p>
                  </div>
                  <div className="bg-muted/50 rounded-2xl p-4 text-center border border-border">
                    <p className="text-primary font-bold text-sm">{selected.duration}</p>
                    <p className="text-muted-foreground text-xs mt-1">Durata seduta</p>
                  </div>
                </div>

                <Link
                  to="/contatti"
                  onClick={() => setSelected(null)}
                  className="block w-full text-center py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all"
                >
                  Prenota questo trattamento
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WaveDivider />

      {/* ── CTA ── */}
      <section className="relative py-28 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.body} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Prenota Ora</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Pronta a iniziare<br />
              <span className="text-primary italic">il tuo percorso?</span>
            </h2>
            <div className="wave-ornament mb-7" style={{ margin: '0.75rem auto 1.75rem' }} />
            <p className="text-white/70 text-base leading-relaxed mb-8">
              La prima consulenza è gratuita e senza impegno. Ti ascoltiamo, valutiamo insieme le tue esigenze e ti proponiamo il percorso più adatto a te.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contatti"
                className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                Prenota Consulenza Gratuita
              </Link>
              <a href="tel:0131234173"
                className="px-8 py-3.5 border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all inline-flex items-center gap-2">
                <Phone size={14} /> Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}