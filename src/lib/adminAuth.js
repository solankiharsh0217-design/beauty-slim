import { base44 } from '../api/base44Client';

const ADMIN_KEY = 'beautyslim_admin_session';

const DEFAULT_ADMIN = {
  username: 'admin',
  password: 'beautyslim2024'
};

export const adminAuth = {
  login(username, password) {
    if (username === DEFAULT_ADMIN.username && password === DEFAULT_ADMIN.password) {
      sessionStorage.setItem(ADMIN_KEY, 'true');
      return true;
    }
    return false;
  },

  logout() {
    sessionStorage.removeItem(ADMIN_KEY);
  },

  isLoggedIn() {
    return sessionStorage.getItem(ADMIN_KEY) === 'true';
  },

  async getPromos() {
    try {
      return await base44.entities.Promo.list('-created_date');
    } catch (e) {
      console.warn('Failed to fetch promos:', e);
      return [];
    }
  },

  async addPromo(promo) {
    return await base44.entities.Promo.create({
      title: promo.title,
      description: promo.description || '',
      badge_text: promo.badge_text || '',
      active: promo.active ?? true,
      expires_at: promo.expires_at || null
    });
  },

  async updatePromo(id, data) {
    return await base44.entities.Promo.update(id, data);
  },

  async deletePromo(id) {
    return await base44.entities.Promo.delete(id);
  }
};