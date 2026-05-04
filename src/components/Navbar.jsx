import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LayoutDashboard } from 'lucide-react'
import { base44 } from '@/api/base44Client'

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
  const [isAdmin, setIsAdmin] = useState(false)
  const location = useLocation()

  useEffect(() => {
    base44.auth.me().then(u => { if (u?.role === 'admin') setIsAdmin(true) }).catch(() => {})
  }, [])

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
        className={`w-full max-w-6xl transition-all duration-500 rounded-3xl bg-secondary/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 ${
          scrolled || mobileOpen ? 'px-6 py-3' : 'px-6 py-3.5'
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
                  className={`font-poppins text-sm font-medium transition-all duration-200 relative pb-1 group ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-white/85 hover:text-white'
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

          {/* CTA + Admin */}
          <div className="hidden md:flex items-center gap-3">
            {isAdmin && (
              <Link
                to="/dashboard"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                  location.pathname === '/dashboard'
                    ? 'bg-primary/20 border-primary/40 text-primary'
                    : 'border-white/20 text-white/70 hover:border-primary/40 hover:text-primary'
                }`}
              >
                <LayoutDashboard size={13} /> Dashboard
              </Link>
            )}
            <Link
              to="/contatti"
              className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white border border-primary/50 hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Prenota Ora
            </Link>
          </div>

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
              {isAdmin && (
                <Link
                  to="/dashboard"
                  className="text-sm font-medium py-2.5 px-3 rounded-2xl transition-colors text-primary bg-primary/10 flex items-center gap-2"
                >
                  <LayoutDashboard size={14} /> Dashboard
                </Link>
              )}
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