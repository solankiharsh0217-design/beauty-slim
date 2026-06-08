const PROMOS_KEY = 'beautyslim_promos'

function getPromos() {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(PROMOS_KEY) || '[]')
  } catch {
    return []
  }
}

function savePromos(promos) {
  localStorage.setItem(PROMOS_KEY, JSON.stringify(promos))
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

const ADMIN_KEY = 'beautyslim_admin_session'
const ADMIN_USERNAME = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_ADMIN_USERNAME) || 'admin'
const ADMIN_PASSWORD = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_ADMIN_PASSWORD) || 'beautyslim2024'

export const adminAuth = {
  login(username, password) {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_KEY, 'true')
      return true
    }
    return false
  },

  logout() {
    sessionStorage.removeItem(ADMIN_KEY)
  },

  isLoggedIn() {
    return sessionStorage.getItem(ADMIN_KEY) === 'true'
  },

  async getPromos() {
    return getPromos().sort((a, b) => (b.created_date || '').localeCompare(a.created_date || ''))
  },

  async addPromo(promo) {
    const promos = getPromos()
    const newPromo = {
      id: generateId(),
      title: promo.title,
      description: promo.description || '',
      badge_text: promo.badge_text || '',
      active: promo.active ?? true,
      expires_at: promo.expires_at || null,
      created_date: new Date().toISOString(),
    }
    promos.push(newPromo)
    savePromos(promos)
    return newPromo
  },

  async updatePromo(id, data) {
    const promos = getPromos()
    const idx = promos.findIndex(p => p.id === id)
    if (idx !== -1) {
      promos[idx] = { ...promos[idx], ...data }
      savePromos(promos)
      return promos[idx]
    }
    throw new Error('Promo not found')
  },

  async deletePromo(id) {
    const promos = getPromos().filter(p => p.id !== id)
    savePromos(promos)
  },

  async getActivePromos() {
    const today = new Date().toISOString().split('T')[0]
    return getPromos().filter(p => p.active && (!p.expires_at || p.expires_at >= today))
  },
}
