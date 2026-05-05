import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

const galleryImages = [
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ec85e685_hero-beauty-consultation.png', category: 'Consulenza' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png', category: 'Centro' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png', category: 'Corpo' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png', category: 'Viso' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png', category: 'Laser' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/369154dc2_manicure-treatment.png', category: 'Manicure' },
]

export default function Gallery() {
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
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Galleria</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              L'esperienza<br /><span className="text-primary italic">in immagini</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Una selezione di immagini che racconta l'atmosfera del centro e i nostri servizi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-[#16120e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.category}
                className="organic-card overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.category} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
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
              Vuoi vedere di <span className="text-primary italic">persona</span>?
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Prenota una consulenza e visita il centro.
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