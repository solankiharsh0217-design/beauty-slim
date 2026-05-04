import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Thermometer, Zap, Scan, Droplets, CheckCircle, ArrowRight, Shield, Star, Clock } from 'lucide-react'

const IMAGES = {
  body: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png',
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
  laser: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png',
  facial: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png',
}

const technologies = [
  {
    icon: Thermometer, title: 'QQN System', subtitle: 'Percorsi corpo con supporto tecnologico', image: IMAGES.body,
    description: 'Una tecnologia pensata per accompagnare i percorsi di rimodellamento con maggiore continuità, comfort e metodo.',
    features: ['Approccio progressivo al trattamento', 'Supporto nei percorsi corpo', 'Comfort durante la seduta', 'Lavoro su obiettivi mirati', 'Esperienza ordinata e guidata', 'Integrazione con altri protocolli'],
  },
  {
    icon: Zap, title: 'Infrabaldan 3.0', subtitle: 'Tecnologia avanzata per il corpo', image: IMAGES.clinic,
    description: 'Uno strumento orientato al lavoro su silhouette, tonicità e definizione, inserito in percorsi costruiti su misura.',
    features: ['Ridefinizione di aree mirate', 'Percorsi personalizzati', 'Supporto alla tonicità', 'Integrazione con trattamenti corpo', 'Metodo calibrato sulle esigenze', 'Continuità nel tempo'],
  },
  {
    icon: Scan, title: 'Laser Diodo', subtitle: 'Epilazione progressiva e professionale', image: IMAGES.laser,
    description: 'Un servizio laser pensato per offrirti precisione, continuità e maggiore serenità durante tutto il percorso.',
    features: ['Protocollo per viso e corpo', 'Valutazione iniziale accurata', 'Indicazioni chiare tra sedute', 'Maggiore uniformità della pelle', 'Comfort durante il trattamento', 'Percorso organizzato e progressivo'],
  },
  {
    icon: Droplets, title: 'Slim Press', subtitle: 'Benessere e drenaggio', image: IMAGES.facial,
    description: 'Un trattamento pensato per alleggerire, riequilibrare e accompagnare i percorsi corpo con una sensazione di comfort diffuso.',
    features: ['Sensazione di leggerezza', 'Supporto ai percorsi corpo', 'Momento di rilassamento guidato', 'Integrazione con altri protocolli', 'Trattamento non invasivo', 'Esperienza ordinata e confortevole'],
  },
]

const benefits = [
  { icon: Shield, title: 'Sicurezza certificata', desc: 'Tecnologie selezionate e spiegate con un linguaggio semplice, prima di iniziare ogni percorso.' },
  { icon: Star, title: 'Comfort totale', desc: 'Ogni trattamento è pensato per farti sentire accompagnata, mai spaesata o sotto pressione.' },
  { icon: Zap, title: 'Integrazione tra servizi', desc: 'Le tecnologie vengono inserite in un percorso coerente con i tuoi obiettivi reali.' },
  { icon: Clock, title: 'Personalizzazione', desc: 'Ogni seduta viene calibrata sul tuo punto di partenza, sui tempi e sul risultato desiderato.' },
]

export default function Tecnologie() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-[#faf8f6] pt-40 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(205,164,94,0.2), transparent 60%)' }} />
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Le Nostre Tecnologie</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-secondary mb-5 leading-tight">
              Attrezzature di<br /><span className="text-primary italic">ultima generazione</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
              Utilizziamo tecnologie selezionate per rendere ogni percorso più preciso, più confortevole e più coerente con i tuoi obiettivi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="bg-[#faf8f6] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="h-60 overflow-hidden">
                  <img src={tech.image} alt={tech.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                      <tech.icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-primary text-xs uppercase tracking-[0.15em] font-medium">{tech.subtitle}</p>
                      <h2 className="font-playfair text-2xl font-bold text-secondary">{tech.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{tech.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {tech.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle size={11} className="text-primary" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#faf8f6]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">I Vantaggi</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Perché scegliere il <span className="text-primary italic">nostro approccio</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-secondary mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="max-w-2xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-4xl font-bold mb-4">Vuoi capire quale tecnologia<br /><span className="text-primary italic">fa per te?</span></h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza gratuita: ti spiegheremo con chiarezza quale percorso può adattarsi meglio alle tue esigenze.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contatti" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all hover:-translate-y-1 hover:shadow-xl">
                Prenota Consulenza <ArrowRight size={16} />
              </Link>
              <Link to="/servizi" className="inline-flex items-center px-8 py-4 border border-white/40 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all">
                Visualizza Servizi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}