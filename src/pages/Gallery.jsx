import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

const galleryImages = [
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ec85e685_hero-beauty-consultation.png', category: 'Consulenza Beauty' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png', category: 'Centro Estetico' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/db2dc7dc0_body-sculpting-treatment.png', category: 'Rimodellamento Corpo' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/b440abe35_facial-skincare-treatment.png', category: 'Trattamenti Viso' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/89dc85a38_laser-hair-removal-treatment.png', category: 'Epilazione Laser' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/369154dc2_manicure-treatment.png', category: 'Manicure & Pedicure' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/8ce9cfd52_generated_image.png', category: 'Massaggi & Relax' },
  { src: 'https://media.base44.com/images/public/69f8ce55cc8dfb7009af86fe/90afd404d_clinic-interior-reception.png', category: 'Benessere & Atmosfera' },
]

export default function Gallery() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-background pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(ellipse at 40% 0%, rgba(205,164,94,0.2), transparent 60%)'}} />
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Galleria</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-secondary mb-5 leading-tight">
              L'esperienza<br /><span className="text-primary italic">in immagini</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
              Una selezione di immagini che racconta l'atmosfera del centro, i servizi principali e il livello di cura con cui costruiamo ogni esperienza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${index}`}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-400 ${index === 0 || index === 4 ? 'sm:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white font-semibold text-sm tracking-wide">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-3xl font-bold text-secondary mb-4">Contatto diretto,<br /><span className="text-primary italic">senza complicazioni</span></h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Se vuoi informazioni su un trattamento o desideri prenotare una consulenza, puoi scriverci direttamente oppure chiamarci.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/393486243991" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-all">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a href="tel:0131234173" className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-secondary/80 transition-all">
                <Phone size={20} /> Chiamaci
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="max-w-2xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-4xl font-bold mb-4">Pronta a vivere<br /><span className="text-primary italic">l'esperienza Beauty Slim?</span></h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza gratuita e vieni a scoprire dal vivo il nostro modo di lavorare.
            </p>
            <Link to="/contatti" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all hover:-translate-y-1">
              Prenota Ora <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}