import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Thermometer, Zap, Scan, Droplets, CheckCircle, ArrowRight } from 'lucide-react'

const IMAGES = {
  body: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
  clinic: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
  laser: 'https://images.unsplash.com/photo-1598524374912-f5fd5e6b6d55?w=600&q=80',
  facial: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
}

const technologies = [
  {
    icon: Thermometer, title: 'QQN System', subtitle: 'Percorsi corpo con supporto tecnologico', image: IMAGES.body,
    description: 'Una tecnologia pensata per accompagnare i percorsi di rimodellamento con maggiore continuita, comfort e metodo.',
    features: ['Approccio progressivo al trattamento','Supporto nei percorsi corpo','Comfort durante la seduta','Lavoro su obiettivi mirati','Esperienza ordinata e guidata','Integrazione con altri protocolli'],
  },
  {
    icon: Zap, title: 'Infrabaldan 3.0', subtitle: 'Tecnologia avanzata per il corpo', image: IMAGES.clinic,
    description: 'Uno strumento orientato al lavoro su silhouette, tonicita e definizione, inserito in percorsi costruiti su misura.',
    features: ['Ridefinizione di aree mirate','Percorsi personalizzati','Supporto alla tonicita','Integrazione con trattamenti corpo','Metodo calibrato sulle esigenze','Continuita nel tempo'],
  },
  {
    icon: Scan, title: 'Laser Diodo', subtitle: 'Epilazione progressiva e professionale', image: IMAGES.laser,
    description: 'Un servizio laser pensato per offrirti precisione, continuita e maggiore serenita durante tutto il percorso.',
    features: ['Protocollo per viso e corpo','Valutazione iniziale accurata','Indicazioni chiare tra una seduta e l\'altra','Maggiore uniformita della pelle','Comfort durante il trattamento','Percorso organizzato e progressivo'],
  },
  {
    icon: Droplets, title: 'Slim Press', subtitle: 'Benessere e drenaggio', image: IMAGES.facial,
    description: 'Un trattamento pensato per alleggerire, riequilibrare e accompagnare i percorsi corpo con una sensazione di comfort diffuso.',
    features: ['Sensazione di leggerezza','Supporto ai percorsi corpo','Momento di rilassamento guidato','Integrazione con altri protocolli','Trattamento non invasivo','Esperienza ordinata e confortevole'],
  },
]

const benefits = [
  { title: 'Sicurezza e chiarezza', desc: 'Tecnologie selezionate e spiegate con un linguaggio semplice, prima di iniziare ogni percorso.' },
  { title: 'Comfort durante la seduta', desc: 'Ogni trattamento e pensato per farti sentire accompagnata, mai spaesata o sotto pressione.' },
  { title: 'Integrazione tra servizi', desc: 'Le tecnologie non vivono da sole: vengono inserite in un percorso coerente con i tuoi obiettivi reali.' },
  { title: 'Personalizzazione', desc: 'Ogni seduta viene calibrata sul tuo punto di partenza, sui tempi e sul risultato che desideri ottenere.' },
]

export default function Tecnologie() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#fbf8f3] to-[#f3ece3] pt-40 pb-20 text-center relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Le Nostre Tecnologie</p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-5">Attrezzature di ultima generazione</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Utilizziamo tecnologie selezionate per rendere ogni percorso piu preciso, piu confortevole e piu coerente con gli obiettivi di chi si affida a noi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="h-56 overflow-hidden">
                  <img src={tech.image} alt={tech.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <tech.icon size={28} className="text-primary" />
                  </div>
                  <p className="text-primary text-xs uppercase tracking-widest font-medium mb-1">{tech.subtitle}</p>
                  <h2 className="font-playfair text-2xl font-bold text-secondary mb-3">{tech.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{tech.description}</p>
                  <ul className="grid grid-cols-1 gap-2">
                    {tech.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                        <CheckCircle size={15} className="text-primary shrink-0" />
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
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">I Vantaggi</p>
            <h2 className="font-playfair text-4xl font-bold text-secondary">Perche scegliere il nostro approccio</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white p-8 rounded-2xl text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
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
            <h2 className="font-playfair text-4xl font-bold mb-4">Vuoi capire quale tecnologia fa per te?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza gratuita: ti spiegheremo con chiarezza quale percorso puo adattarsi meglio alle tue esigenze e ai tuoi obiettivi.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contatti" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
                Prenota Consulenza <ArrowRight size={18} />
              </Link>
              <Link to="/servizi" className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-secondary transition-all">
                Visualizza Servizi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}