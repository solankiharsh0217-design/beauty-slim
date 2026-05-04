import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { base44 } from '../api/base44Client'
import { Link } from 'react-router-dom'
import { Sparkles, X, ArrowRight } from 'lucide-react'

export default function PromosBanner() {
  const [promos, setPromos] = useState([])
  const [dismissed, setDismissed] = useState([])

  useEffect(() => {
    base44.entities.Promo.filter({ active: true }).then(data => {
      const today = new Date().toISOString().split('T')[0]
      setPromos(data.filter(p => !p.expires_at || p.expires_at >= today))
    })
  }, [])

  const visible = promos.filter(p => !dismissed.includes(p.id))
  if (!visible.length) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-xl border-t border-primary/30 py-3 px-5 shadow-2xl shadow-black/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {visible.map(promo => (
          <div key={promo.id} className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Sparkles size={13} className="text-primary" />
            </div>
            {promo.badge_text && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/15 px-2.5 py-1 rounded-full shrink-0">
                {promo.badge_text}
              </span>
            )}
            <div className="min-w-0">
              <span className="text-foreground font-semibold text-sm">{promo.title}</span>
              {promo.description && (
                <span className="text-muted-foreground text-sm ml-2 hidden sm:inline">{promo.description}</span>
              )}
            </div>
            <Link to="/contatti" className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs shrink-0 hover:gap-2.5 transition-all duration-300">
              Prenota <ArrowRight size={12} />
            </Link>
            <button
              onClick={() => setDismissed(prev => [...prev, promo.id])}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}