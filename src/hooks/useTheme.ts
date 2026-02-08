import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'dark' | 'light'

interface ThemeState {
  mode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'dark',
      toggleTheme: () =>
        set((state) => {
          const newMode = state.mode === 'dark' ? 'light' : 'dark'
          document.documentElement.setAttribute('data-theme', newMode)
          return { mode: newMode }
        }),
      setTheme: (mode) => {
        document.documentElement.setAttribute('data-theme', mode)
        set({ mode })
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        // Apply theme on page load
        if (state) {
          document.documentElement.setAttribute('data-theme', state.mode)
        }
      },
    }
  )
)
