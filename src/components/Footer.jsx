import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-primary font-medium text-xs uppercase tracking-[0.15em] mb-1">Inizia oggi — è gratuito</p>
            <h3 className="font-playfair text-2xl font-bold text-white">Prenota la tua consulenza gratuita</h3>
          </div>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all whitespace-nowrap shrink-0"
          >
            Prenota Ora <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-playfair text-2xl font-bold text-white mb-4 block">
              Beauty <span className="text-primary">Slim</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Centro benessere ed estetica ad Alessandria. Trattamenti personalizzati, tecnologie selezionate, ambiente curato.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/393486243991" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <MessageCircle size={17} />
              </a>
              <a href="tel:0131234173"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Phone size={17} />
              </a>
              <a href="mailto:info@beautyslim.it"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-playfair text-base font-semibold mb-5 text-white">Servizi</h4>
            <ul className="space-y-2.5">
              {['Dimagrimento & Rimodellamento', 'Epilazione Laser', 'Cura del Viso', 'Estetica di Base', 'Massaggi & Relax'].map(s => (
                <li key={s}>
                  <Link to="/servizi" className="text-white/50 text-sm hover:text-primary transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Esplora */}
          <div>
            <h4 className="font-playfair text-base font-semibold mb-5 text-white">Esplora</h4>
            <ul className="space-y-2.5">
              {[['/', 'Home'], ['/chi-siamo', 'Chi Siamo'], ['/tecnologie', 'Tecnologie'], ['/gallery', 'Gallery'], ['/contatti', 'Contatti']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="text-white/50 text-sm hover:text-primary transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-playfair text-base font-semibold mb-5 text-white">Dove Siamo</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                <span>Via Trotti, 69<br />15121 Alessandria</span>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <Phone size={15} className="text-primary mt-0.5 shrink-0" />
                <span>0131 234173<br />348 6243991</span>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <Mail size={15} className="text-primary mt-0.5 shrink-0" />
                <span>info@beautyslim.it</span>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <Clock size={15} className="text-primary mt-0.5 shrink-0" />
                <span>Lun-Ven 10:00-20:00<br />Sab 10:00-14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <span>© 2026 Beauty Slim. Tutti i diritti riservati.</span>
          <span>Via Trotti 69 · Alessandria · Italy</span>
        </div>
      </div>
    </footer>
  )
}