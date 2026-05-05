import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, MapPin, Phone, ArrowRight } from 'lucide-react'

const IMAGES = {
  clinic: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png',
}

const features = [
  'Staff con esperienza e formazione continua',
  'Tecnologie selezionate per viso e corpo',
  'Trattamenti su misura per te',
  'Consulenza iniziale senza pressioni',
  'Ambiente elegante e accogliente',
  'Risultati progressivi e realistici',
]

const AmbientGlow = () => (
  <>
    <div className="ambient-glow ambient-glow-1" />
    <div className="ambient-glow ambient-glow-2" />
  </>
)

export default function ChiSiamo() {
  return (
    <div className="font-poppins relative">
      <AmbientGlow />

      <section className="relative pt-40 pb-24 text-center overflow-hidden bg-[#16120e]">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(205,164,94,0.25), transparent 60%)'}} />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Chi Siamo</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Il tuo centro benessere<br /><span className="text-primary italic">ad Alessandria</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Beauty Slim è uno spazio dedicato alla bellezza e al benessere, dove stile, ascolto e precisione convivono.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-28 bg-[#16120e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden soft-curve aspect-[4/5] shadow-xl">
                <img src={IMAGES.clinic} alt="Beauty Slim" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-primary px-5 py-4 circle-card-sm text-center shadow-lg">
                <div className="font-playfair text-2xl font-bold text-white">10+</div>
                <div className="text-white/80 text-[10px] mt-0.5 uppercase tracking-wider">Anni</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Il Nostro Centro</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Dove la cura diventa <span className="text-primary italic">esperienza</span>
              </h2>
              <p className="text-muted-foreground text-base mb-6">
                Beauty Slim nasce ad Alessandria con un team che unisce esperienza, cura del dettaglio e attenzione concreta alla persona.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map(item => (
                  <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                    <Check size={16} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-3">
                <Link to="/contatti" className="px-7 py-3 bg-primary text-white circle-card-sm font-medium text-sm hover:bg-primary/90 transition-all">
                  Prenota Ora
                </Link>
                <a href="tel:0131234173" className="px-7 py-3 border border-white/30 text-white circle-card-sm font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2">
                  <Phone size={14} /> Chiamaci
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.clinic} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Visitaci</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ti aspettiamo in <span className="text-primary italic">centro</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Vieni a trovarci in Via Trotti 69, Alessandria — sarà un piacere conoscerti.
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
                className="px-8 py-3.5 border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2"
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