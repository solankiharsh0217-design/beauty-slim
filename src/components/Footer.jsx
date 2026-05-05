import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Beauty <span>Slim</span>
            </Link>
            <p>
              Un centro dedicato a bellezza, benessere e percorsi personalizzati ad
              Alessandria, in un ambiente elegante e rassicurante.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/393486243991" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="tel:0131234173" aria-label="Telefono">
                <Phone size={18} />
              </a>
              <a href="mailto:info@beautyslim.it" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Servizi</h4>
            <ul>
              <li><Link to="/servizi">Dimagrimento & Rimodellamento</Link></li>
              <li><Link to="/servizi">Epilazione Laser</Link></li>
              <li><Link to="/servizi">Cura del Viso</Link></li>
              <li><Link to="/servizi">Estetica di Base</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Esplora</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/chi-siamo">Chi Siamo</Link></li>
              <li><Link to="/tecnologie">Tecnologie</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contatti">Contatti</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contatti</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} />
                <span>Via Trotti, 69 - 15121 Alessandria</span>
              </li>
              <li>
                <Phone size={16} />
                <span>0131 234173 / 348 6243991</span>
              </li>
              <li>
                <Mail size={16} />
                <span>info@beautyslim.it</span>
              </li>
              <li>
                <Clock size={16} />
                <span>Lun-Ven 10:00-20:00 / Sab 10:00-14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Beauty Slim. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
