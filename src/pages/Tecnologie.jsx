import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Phone, X, ArrowRight, Zap, Activity, Layers, Wind } from 'lucide-react'
import WaveDivider from '../components/WaveDivider'

const IMAGES = {
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
}

const technologies = [
  {
    title: 'QQN System',
    icon: Zap,
    description: 'Tecnologia avanzata per percorsi corpo personalizzati.',
    image: IMAGES.body,
    fullDescription: 'Il QQN System è una tecnologia all\'avanguardia per il rimodellamento corporeo. Combina energia termica controllata e stimolazione profonda per sciogliere le adiposità localizzate, tonificare i tessuti e migliorare visibilmente la silhouette. Ideale per chi cerca risultati progressivi e duraturi senza interventi invasivi.',
    benefits: ['Riduzione del grasso localizzato', 'Tonificazione muscolare profonda', 'Miglioramento della circolazione', 'Risultati visibili da prima seduta', 'Protocollo personalizzato per zona'],
    sessions: '8–12 sedute consigliate',
    duration: '45–60 minuti per seduta',
  },
  {
    title: 'Infrabaldan 3.0',
    icon: Activity,
    description: 'Tecnologia di ultima generazione per silhouette e rimodellamento.',
    image: IMAGES.clinic,
    fullDescription: 'Infrabaldan 3.0 utilizza infrarossi a bassa frequenza per penetrare in profondità nei tessuti, stimolare il metabolismo cellulare e favorire il drenaggio linfatico. È il trattamento ideale per ridurre la cellulite, migliorare l\'elasticità della pelle e ridefinire le curve del corpo in modo naturale e progressivo.',
    benefits: ['Riduzione della cellulite', 'Drenaggio linfatico efficace', 'Maggiore elasticità cutanea', 'Ridefinizione delle curve', 'Azione detossinante profonda'],
    sessions: '6–10 sedute consigliate',
    duration: '40–50 minuti per seduta',
  },
  {
    title: 'Laser Diodo',
    icon: Layers,
    description: 'Epilazione definitiva sicura e professionale per viso e corpo.',
    image: IMAGES.laser,
    fullDescription: 'Il Laser Diodo è la tecnologia gold standard per l\'epilazione definitiva. La sua lunghezza d\'onda specifica colpisce selettivamente il follicolo pilifero senza danneggiare i tessuti circostanti, garantendo un\'azione sicura su tutti i fototipi cutanei. Il risultato è una pelle liscia, uniforme e duratura nel tempo.',
    benefits: ['Epilazione permanente progressiva', 'Adatto a tutti i fototipi', 'Trattamento viso e corpo', 'Indolore e non invasivo', 'Risultati visibili già dalla 2ª seduta'],
    sessions: '6–8 sedute per ciclo completo',
    duration: '20–60 minuti (zona trattata)',
  },
  {
    title: 'Slim Press',
    icon: Wind,
    description: 'Pressoterapia e drenaggio per il benessere e la leggerezza totale.',
    image: IMAGES.facial,
    fullDescription: 'Slim Press è un sistema di pressoterapia sequenziale che utilizza un\'azione meccanica modulata per stimolare la circolazione venosa e linfatica. Ideale per gambe pesanti, ritenzione idrica e gonfiori, favorisce l\'eliminazione delle tossine, riduce il senso di peso e migliora il benessere generale del corpo.',
    benefits: ['Drenaggio linfatico profondo', 'Riduzione della ritenzione idrica', 'Gambe più leggere e toniche', 'Miglioramento circolatorio', 'Effetto rilassante e rigenerante'],
    sessions: '5–8 sedute consigliate',
    duration: '30–40 minuti per seduta',
  },
]

const benefits = [
  'Tecnologie certificate e sicure',
  'Assistenza personalizzata in ogni fase',
  'Percorsi su misura per ogni obiettivo',
  'Risultati progressivi e duraturi',
]

export default function Tecnologie() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="font-poppins">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 text-center overflow-hidden bg-[#14141a]">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(ellipse at 40% 0%, rgba(205,164,94,0.25), transparent 60%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Tecnologie</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              Strumenti per la tua <span className="text-primary italic">bellezza</span>
            </h1>
            <div className="wave-ornament mb-5" style={{ margin: '0 auto 1.25rem' }} />
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Utilizziamo macchinari professionali di ultima generazione, selezionati per garantirti risultati visibili, sicuri e duraturi. Ogni tecnologia è affiancata da un percorso personalizzato studiato sulle tue esigenze.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Technologies 2x2 grid ── */}
      <section className="relative py-24 bg-[#14141a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => setSelected(tech)}
                className="cursor-pointer"
              >
                <div className="spa-card group text-center flex flex-col items-center py-8 px-6 h-full hover:border-primary/40 transition-all">
                  <div className="oval-img-wrap mb-5">
                    <img src={tech.image} alt={tech.title} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center mb-3">
                    <tech.icon size={17} className="text-primary" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{tech.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs group-hover:gap-3 transition-all duration-300">
                    Scopri di più <ArrowRight size={11} />
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
              {/* Image header */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-primary/80 transition-all"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-5">
                  <h2 className="font-playfair text-2xl font-bold text-white">{selected.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                <p className="text-muted-foreground text-sm leading-relaxed">{selected.fullDescription}</p>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                    <span className="w-5 h-px bg-primary" /> Benefici principali
                  </h4>
                  <ul className="space-y-2">
                    {selected.benefits.map(b => (
                      <li key={b} className="flex items-center gap-3 text-foreground text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                          <Check size={11} className="text-primary" />
                        </span>
                        {b}
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

      <WaveDivider color="#0e0e12" />

      {/* ── Benefits ── */}
      <section className="relative py-24 bg-[#0e0e12]">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="spa-card p-10 text-center">
              <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Perché Sceglierci</span>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-3">
                Tecnologia al servizio della tua <span className="text-primary italic">bellezza</span>
              </h2>
              <div className="wave-ornament mb-7" style={{ margin: '0.75rem auto 1.75rem' }} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Non lavoriamo con macchinari generici. Ogni strumento che utilizziamo è stato scelto per la sua efficacia clinica, la sicurezza d'uso e la capacità di offrire risultati visibili e misurabili.
              </p>
              <ul className="space-y-4 text-left max-w-sm mx-auto">
                {benefits.map(item => (
                  <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check size={13} className="text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 bg-[#0e0e12] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              Vuoi sapere quale tecnologia <span className="text-primary italic">fa per te?</span>
            </h2>
            <div className="wave-ornament mb-7" style={{ margin: '0.75rem auto 1.75rem' }} />
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Prenota una consulenza gratuita. Ti spiegheremo qual è il percorso più adatto ai tuoi obiettivi, senza impegno.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contatti"
                className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                Prenota Consulenza Gratuita
              </Link>
              <a href="tel:0131234173"
                className="px-8 py-3.5 border border-primary/40 text-primary rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2">
                <Phone size={14} /> Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}