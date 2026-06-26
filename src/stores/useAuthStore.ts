import { create } from 'zustand'

interface AuthState{
  authenticated : boolean,
  login :() => void;
  logout :() => void;
}

const useAuthStore = create <AuthState>((set) => ({

  authenticated: !!localStorage.getItem('token'),

  login: () => set((state =>({authenticated: true}))),
  logout: () => { localStorage.removeItem('token'); set((state =>({authenticated: false}))) },

}))

export default useAuthStore