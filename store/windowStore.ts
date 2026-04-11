import { create } from 'zustand'

export type WindowId = 'hero' | 'projects' | 'about' | 'resume'

interface WindowState {
  isOpen: boolean
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
}

interface WindowStore {
  windows: Record<WindowId, WindowState>
  topZ: number
  openWindow: (id: WindowId) => void
  closeWindow: (id: WindowId) => void
  minimizeWindow: (id: WindowId) => void
  maximizeWindow: (id: WindowId) => void
  focusWindow: (id: WindowId) => void
  projectsFilter: string
  setProjectsFilter: (filter: string) => void
}

const defaultWindows: Record<WindowId, WindowState> = {
  hero: { isOpen: true, isMinimized: false, isMaximized: false, zIndex: 10 },
  projects: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  about: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: defaultWindows,
  topZ: 10,
  projectsFilter: 'all',

  openWindow: (id) => {
    const { topZ } = get()
    const newZ = topZ + 1
    set((state) => ({
      topZ: newZ,
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: true, isMinimized: false, zIndex: newZ },
      },
    }))
  },

  closeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: false, isMinimized: false },
      },
    }))
  },

  minimizeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: !state.windows[id].isMinimized },
      },
    }))
  },

  maximizeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMaximized: !state.windows[id].isMaximized },
      },
    }))
  },

  focusWindow: (id) => {
    const { topZ } = get()
    const newZ = topZ + 1
    set((state) => ({
      topZ: newZ,
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], zIndex: newZ },
      },
    }))
  },

  setProjectsFilter: (filter) => set({ projectsFilter: filter }),
}))
