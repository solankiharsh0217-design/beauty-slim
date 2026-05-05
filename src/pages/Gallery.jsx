import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import WaveDivider from '../components/WaveDivider'

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
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 text-center overflow-hidden bg-section-a">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(205,164,94,0.25), transparent 60%)' }}
        />

        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Galleria</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              L'esperienza<br /><span className="text-primary italic">in immagini</span>
            </h1>
            <div className="wave-ornament mb-5" style={{ margin: '0 auto 1.25rem' }} />
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              Una selezione di immagini che racconta l'atmosfera del centro e i nostri servizi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery grid ── */}
      <section className="relative py-24 bg-section-a">
        <div className="max-w-6xl mx-auto px-6">
          <div className="spa-grid">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4"
              >
                {/* Portrait oval frame */}
                <div className="portrait-oval w-full cursor-pointer">
                  <img src={img.src} alt={img.category} />
                </div>
                {/* Category label */}
                <span className="text-primary font-medium text-xs tracking-widest uppercase">
                  {img.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#F0EADE" />

      {/* ── CTA ── */}
      <section className="relative py-28 bg-section-b overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              Vuoi vedere di <span className="text-primary italic">persona</span>?
            </h2>
            <div className="wave-ornament mb-6" style={{ margin: '0.75rem auto 1.5rem' }} />
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Prenota una consulenza e visita il centro.
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