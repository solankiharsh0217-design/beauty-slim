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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-5">
      <motion.nav
        className={`w-full max-w-6xl transition-all duration-500 rounded-2xl ${
          scrolled || mobileOpen
            ? 'bg-white/15 backdrop-blur-xl border border-white/25 shadow-2xl shadow-black/20 px-6 py-3'
            : 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl shadow-black/10 px-6 py-3.5'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-playfair text-xl font-bold text-white drop-shadow-sm">
            Beauty <span className="text-primary">Slim</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-poppins text-sm font-medium transition-all duration-200 relative pb-1 group drop-shadow-sm ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
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
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white border border-primary/50 hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Prenota Ora
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-1.5 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden mt-4 pt-4 border-t border-white/20 flex flex-col gap-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2.5 px-3 rounded-xl transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-white/10'
                      : 'text-white hover:text-primary hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contatti"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold"
              >
                Prenota Ora
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}