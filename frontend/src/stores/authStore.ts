import { create } from 'zustand'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

interface AuthStore {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  checkAuth: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,

  login: async (email: string, password: string) => {
    set({ loading: true })
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password })
      const { token, user } = response.data
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      set({ user, token, isAuthenticated: true, loading: false })
    } catch (error) {
      set({ loading: false })
      throw error
    }
  },

  register: async (name: string, email: string, password: string) => {
    set({ loading: true })
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, {
        name,
        email,
        password,
      })
      const { token, user } = response.data
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      set({ user, token, isAuthenticated: true, loading: false })
    } catch (error) {
      set({ loading: false })
      throw error
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    set({ user: null, token: null, isAuthenticated: false })
  },

  checkAuth: () => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      set({ token, isAuthenticated: true })
    }
  },
}))
