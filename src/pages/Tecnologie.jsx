import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Phone } from 'lucide-react'
import WaveDivider from '../components/WaveDivider'

const IMAGES = {
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
}

const technologies = [
  { title: 'QQN System', description: 'Tecnologia per percorsi corpo con supporto mirato e progressivo.', image: IMAGES.body },
  { title: 'Infrabaldan 3.0', description: 'Tecnologia avanzata per silhouette, tonicità e rimodellamento.', image: IMAGES.clinic },
  { title: 'Laser Diodo', description: 'Epilazione progressiva, sicura e professionale per viso e corpo.', image: IMAGES.laser },
  { title: 'Slim Press', description: 'Benessere, drenaggio e riequilibrio per il benessere totale.', image: IMAGES.facial },
]

const benefits = [
  'Tecnologie certificate e sicure',
  'Assistenza personalizzata in ogni fase',
  'Percorsi su misura per ogni obiettivo',
  'Risultati progressivi e duraturi',
]

export default function Tecnologie() {
  return (
    <div className="font-poppins">
      {/* Ambient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] -top-64 -left-64 orb-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/6 blur-[80px] bottom-20 -right-40 orb-pulse-d1" />
      </div>

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 text-center overflow-hidden bg-[#16120e]">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(ellipse at 40% 0%, rgba(205,164,94,0.25), transparent 60%)' }}
        />

        {/* Decorative rings */}
        <div className="absolute top-20 right-20 w-44 h-44 pointer-events-none hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-primary/15 ring-ripple" />
          <div className="absolute inset-0 rounded-full border border-primary/15 ring-ripple ring-ripple-d1" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Tecnologie</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              Strumenti per la tua <span className="text-primary italic">bellezza</span>
            </h1>
            <div className="wave-ornament mb-5" style={{ margin: '0 auto 1.25rem' }} />
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Utilizziamo tecnologie selezionate per offrirti risultati visibili e duraturi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Technologies grid ── */}
      <section className="relative py-24 bg-[#16120e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="spa-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="spa-card group text-center flex flex-col items-center py-8 px-5 h-full">
                  {/* Circular image */}
                  <div className="oval-img-wrap mb-5">
                    <img src={tech.image} alt={tech.title} />
                  </div>
                  <h3 className="font-playfair text-base font-semibold text-foreground mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#0f0c0a" />

      {/* ── Benefits ── */}
      <section className="relative py-24 bg-[#0f0c0a]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[550px] h-[550px] rounded-full border border-primary/5 float-gentle" />
          <div className="absolute w-[380px] h-[380px] rounded-full border border-primary/6 float-gentle float-d1" />
        </div>
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="spa-card p-10 text-center">
              <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
                Perché Sceglierci
              </span>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-3">
                Perché scegliere <span className="text-primary italic">noi</span>
              </h2>
              <div className="wave-ornament mb-7" style={{ margin: '0.75rem auto 1.75rem' }} />
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
      <section className="relative py-28 bg-[#0f0c0a] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-primary/6 ring-ripple" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-primary/8 ring-ripple ring-ripple-d1" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              Scopri le nostre <span className="text-primary italic">tecnologie</span>
            </h2>
            <div className="wave-ornament mb-7" style={{ margin: '0.75rem auto 1.75rem' }} />
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Prenota una consulenza per conoscere i trattamenti più adatti a te.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contatti"
                className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                Prenota Consulenza
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
