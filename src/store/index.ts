
import { create } from 'zustand';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  referrer: { firstName: string; lastName: string } | null;
  setUser: (user: User | null) => void;
  setAuthenticated: (status: boolean) => void;
  setToken: (token: string | null) => void;
  setReferrer: (referrer: { firstName: string; lastName: string } | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,
  referrer: null,
  setUser: (user) => set({ user }),
  setAuthenticated: (status) => set({ isAuthenticated: status }),
  setToken: (token) => set({ token }),
  setReferrer: (referrer) => set({ referrer }),
  logout: () => set({ user: null, isAuthenticated: false, token: null }),
}));

interface UiState {
  loginModalOpen: boolean;
  signupModalOpen: boolean;
  setLoginModalOpen: (open: boolean) => void;
  setSignupModalOpen: (open: boolean) => void;
  closeAllModals: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  loginModalOpen: false,
  signupModalOpen: false,
  setLoginModalOpen: (open) => set({ loginModalOpen: open, signupModalOpen: false }),
  setSignupModalOpen: (open) => set({ signupModalOpen: open, loginModalOpen: false }),
  closeAllModals: () => set({ loginModalOpen: false, signupModalOpen: false }),
}));
