import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', category: 'Trattamenti Viso' },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', category: 'Centro Estetico' },
  { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', category: 'Dimagrimento' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', category: 'Consulenza Beauty' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', category: 'Manicure & Pedicure' },
  { src: 'https://images.unsplash.com/photo-1598524374912-f5fd5e6b6d55?w=600&q=80', category: 'Epilazione Laser' },
  { src: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80', category: 'Trattamenti Corpo' },
  { src: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&q=80', category: 'Benessere & Atmosfera' },
]

export default function Gallery() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#fbf8f3] to-[#f3ece3] pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Galleria</p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-5">I nostri trattamenti in foto</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Una selezione di immagini che racconta l&apos;atmosfera del centro, i servizi principali e il livello di cura con cui costruiamo ogni esperienza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${index}`}
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white font-medium text-sm">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-3xl font-bold text-secondary mb-4">Contatto diretto, senza complicazioni</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Se vuoi informazioni su un trattamento o desideri prenotare una consulenza, puoi scriverci direttamente oppure chiamarci.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/393486243991"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-all"
              >
                <MessageCircle size={22} />
                <span>WhatsApp</span>
              </a>
              <a href="tel:0131234173" className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-secondary/80 transition-all">
                <Phone size={22} />
                <span>Chiamaci</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="max-w-2xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-4xl font-bold mb-4">Pronta a vivere l&apos;esperienza Beauty Slim?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Prenota una consulenza gratuita e vieni a scoprire dal vivo il nostro modo di lavorare, l&apos;ambiente del centro e i trattamenti piu adatti a te.
            </p>
            <Link to="/contatti" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
              Prenota Ora <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}