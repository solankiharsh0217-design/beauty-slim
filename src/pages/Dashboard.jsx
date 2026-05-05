import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { base44 } from '../api/base44Client'
import { Plus, Pencil, Trash2, ToggleLeft, ToggleRight, Sparkles, Tag, Calendar, CheckCircle, XCircle, Loader2 } from 'lucide-react'

const emptyForm = { title: '', description: '', badge_text: '', active: true, expires_at: '' }

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [promos, setPromos] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    base44.auth.me()
      .then(u => {
        setUser(u)
        if (u?.role === 'admin') loadPromos()
        else setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const loadPromos = () => {
    setLoading(true)
    base44.entities.Promo.list('-created_date').then(data => {
      setPromos(data)
      setLoading(false)
    })
  }

  const openNew = () => {
    setForm(emptyForm)
    setEditingId(null)
    setShowForm(true)
  }

  const openEdit = (p) => {
    setForm({ title: p.title, description: p.description || '', badge_text: p.badge_text || '', active: p.active ?? true, expires_at: p.expires_at || '' })
    setEditingId(p.id)
    setShowForm(true)
  }

  const savePromo = async (e) => {
    e.preventDefault()
    setSaving(true)
    const data = { ...form, expires_at: form.expires_at || null }
    if (editingId) {
      await base44.entities.Promo.update(editingId, data)
    } else {
      await base44.entities.Promo.create(data)
    }
    setSaving(false)
    setShowForm(false)
    loadPromos()
  }

  const toggleActive = async (p) => {
    await base44.entities.Promo.update(p.id, { active: !p.active })
    loadPromos()
  }

  const deletePromo = async (id) => {
    if (!window.confirm('Eliminare questa promozione?')) return
    await base44.entities.Promo.delete(id)
    loadPromos()
  }

  if (loading) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="animate-spin text-primary" size={36} />
    </div>
  )

  if (!user || user.role !== 'admin') return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <XCircle size={32} className="text-primary" />
        </div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">Accesso riservato</h2>
        <p className="text-muted-foreground text-sm">Questa area è riservata agli amministratori del sito.</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background font-poppins pt-28 pb-20 px-5">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-[0.15em] text-xs uppercase">Area Admin</span>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-1">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Gestisci le promozioni che appaiono sul sito.</p>
        </motion.div>

        {/* Add button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-playfair text-xl font-bold text-foreground flex items-center gap-2">
            <Sparkles size={18} className="text-primary" /> Promozioni attive
          </h2>
          <button
            onClick={openNew}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Plus size={16} /> Nuova Promozione
          </button>
        </div>

        {/* Form modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              className="bg-card border border-border rounded-3xl p-8 mb-8 shadow-xl"
            >
              <h3 className="font-playfair text-xl font-bold text-foreground mb-6">
                {editingId ? 'Modifica Promozione' : 'Nuova Promozione'}
              </h3>
              <form onSubmit={savePromo} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Titolo *</label>
                  <input
                    required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                    placeholder="es. Sconto 20% sull'epilazione laser"
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-muted text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Descrizione</label>
                  <textarea
                    value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    placeholder="Aggiungi dettagli sulla promozione..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-muted text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Badge (opzionale)</label>
                    <input
                      value={form.badge_text} onChange={e => setForm(f => ({ ...f, badge_text: e.target.value }))}
                      placeholder="es. Offerta Speciale"
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-muted text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Scade il (opzionale)</label>
                    <input
                      type="date" value={form.expires_at} onChange={e => setForm(f => ({ ...f, expires_at: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setForm(f => ({ ...f, active: !f.active }))} className="text-primary">
                    {form.active ? <ToggleRight size={28} /> : <ToggleLeft size={28} className="text-muted-foreground" />}
                  </button>
                  <span className="text-sm text-foreground">{form.active ? 'Visibile sul sito' : 'Non visibile'}</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="submit" disabled={saving}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-all disabled:opacity-60">
                    {saving ? <Loader2 size={15} className="animate-spin" /> : <CheckCircle size={15} />}
                    {editingId ? 'Aggiorna' : 'Pubblica'}
                  </button>
                  <button type="button" onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-border text-muted-foreground rounded-full font-medium text-sm hover:border-foreground/30 transition-all">
                    Annulla
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Promos list */}
        {promos.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-3xl border border-border">
            <Sparkles size={32} className="text-primary mx-auto mb-3 opacity-50" />
            <p className="text-muted-foreground text-sm">Nessuna promozione ancora. Creane una!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {promos.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`bg-card border rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${p.active ? 'border-primary/30' : 'border-border opacity-60'}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {p.badge_text && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/15 px-2.5 py-0.5 rounded-full">{p.badge_text}</span>
                    )}
                    <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${p.active ? 'text-green-400 bg-green-400/10' : 'text-muted-foreground bg-muted'}`}>
                      {p.active ? 'Attiva' : 'Disattiva'}
                    </span>
                    {p.expires_at && (
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Calendar size={10} /> Scade: {p.expires_at}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{p.title}</h4>
                  {p.description && <p className="text-muted-foreground text-xs mt-0.5 truncate">{p.description}</p>}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => toggleActive(p)}
                    className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
                    title={p.active ? 'Disattiva' : 'Attiva'}>
                    {p.active ? <ToggleRight size={20} /> : <ToggleLeft size={20} className="text-muted-foreground" />}
                  </button>
                  <button onClick={() => openEdit(p)}
                    className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => deletePromo(p.id)}
                    className="p-2 rounded-full hover:bg-destructive/10 text-destructive transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}