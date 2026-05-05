import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Shield, ArrowRight, Phone } from 'lucide-react'

const IMAGES = {
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
}

const technologies = [
  { title: 'QQN System', description: 'Tecnologia per percorsi corpo con supporto mirato.', image: IMAGES.body },
  { title: 'Infrabaldan 3.0', description: 'Tecnologia avanzata per silhouette e tonicità.', image: IMAGES.clinic },
  { title: 'Laser Diodo', description: 'Epilazione progressiva e professionale.', image: IMAGES.laser },
  { title: 'Slim Press', description: 'Benessere, drenaggio e riequilibrio.', image: IMAGES.facial },
]

const benefits = [
  'Tecnologie certificate e sicure',
  'Assistenza personalizzata',
  'Percorsi su misura',
  'Risultati progressivi',
]

export default function Tecnologie() {
  return (
    <div className="font-poppins">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -top-64 -left-64" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/8 blur-[80px] bottom-20 -right-40" />
      </div>

      <section className="relative pt-40 pb-20 text-center overflow-hidden bg-[#16120e]">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(ellipse at 40% 0%, rgba(205,164,94,0.25), transparent 60%)'}} />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Tecnologie</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Strumenti per la tua <span className="text-primary italic">bellezza</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Utilizziamo tecnologie selezionate per offrirti risultati visibili e duraturi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-[#16120e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="circle-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="circle-card overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="relative h-28 soft-curve">
                  <img src={tech.image} alt={tech.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="font-playfair text-sm font-semibold text-foreground mb-0.5">{tech.title}</h3>
                  <p className="text-muted-foreground text-[10px] line-clamp-2">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-[#16120e]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="organic-card p-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Perché scegliere <span className="text-primary italic">noi</span>
            </h2>
            <ul className="space-y-3">
              {benefits.map(item => (
                <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                  <Check size={16} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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
              Scopri le nostre <span className="text-primary italic">tecnologie</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Prenota una consulenza per conoscere i trattamenti più adatti a te.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contatti"
                className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all"
              >
                Prenota Consulenza
              </Link>
              <a
                href="tel:0131234173"
                className="px-8 py-3.5 border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <Phone size={14} /> Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}