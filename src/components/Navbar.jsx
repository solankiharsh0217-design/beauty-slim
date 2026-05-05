import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/servizi', label: 'Servizi' },
  { path: '/chi-siamo', label: 'Chi Siamo' },
  { path: '/tecnologie', label: 'Tecnologie' },
  { path: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Beauty <span>Slim</span>
        </Link>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contatti" className="navbar-cta btn">
          Prenota Ora
        </Link>

        <button 
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              className="navbar-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contatti" className="btn">
                Prenota Ora
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}