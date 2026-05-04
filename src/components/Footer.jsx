import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-playfair text-2xl font-bold text-white mb-4 block">
              Beauty <span className="text-primary">Slim</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Un centro dedicato a bellezza, benessere e percorsi personalizzati ad
              Alessandria, in un ambiente elegante e rassicurante.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/393486243991" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="tel:0131234173"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Phone size={18} />
              </a>
              <a href="mailto:info@beautyslim.it"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">Servizi</h4>
            <ul className="space-y-3">
              {['Dimagrimento & Rimodellamento','Epilazione Laser','Cura del Viso','Estetica di Base'].map(s => (
                <li key={s}>
                  <Link to="/servizi" className="text-gray-400 text-sm hover:text-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Esplora */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">Esplora</h4>
            <ul className="space-y-3">
              {[['/', 'Home'],['/chi-siamo','Chi Siamo'],['/tecnologie','Tecnologie'],['/gallery','Gallery'],['/contatti','Contatti']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 text-sm hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Via Trotti, 69 - 15121 Alessandria</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <span>0131 234173 / 348 6243991</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <span>info@beautyslim.it</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Lun-Ven 10:00-20:00 / Sab 10:00-14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Beauty Slim. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  )
}