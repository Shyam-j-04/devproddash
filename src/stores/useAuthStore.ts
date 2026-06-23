import { create } from 'zustand'

interface AuthState{
  authenticated : boolean,
  login :() => void;
  logout :() => void;
}

const useAuthStore = create <AuthState>((set) => ({

  authenticated: false,

  login: () => set((state =>({authenticated: true}))),
  logout: () => set((state =>({authenticated: false}))),
  
}))

export default useAuthStore