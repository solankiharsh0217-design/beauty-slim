import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isTransparent = !scrolled && !mobileOpen

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`font-playfair text-2xl font-bold transition-colors duration-300 ${
          isTransparent ? 'text-white' : 'text-secondary'
        }`}>
          Beauty <span className="text-primary">Slim</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-poppins text-sm font-medium transition-all duration-200 relative pb-1 group ${
                  location.pathname === link.path
                    ? isTransparent
                      ? 'text-primary'
                      : 'text-primary'
                    : isTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contatti"
          className={`hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
            isTransparent
              ? 'bg-primary text-white hover:bg-primary-dark border border-primary'
              : 'bg-primary text-white hover:bg-primary-dark'
          }`}
        >
          Prenota Ora
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-secondary'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-5 flex flex-col gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2.5 border-b border-gray-100 transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              className="mt-3 inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold"
            >
              Prenota Ora
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}