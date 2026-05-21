import { create } from 'zustand'

export type WindowId = 'hero' | 'projects' | 'about' | 'resume' | 'spotify'

interface WindowState {
  isOpen: boolean
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
}

interface WindowStore {
  windows: Record<WindowId, WindowState>
  topZ: number
  // z-index applied to the project-page content div.
  // Starts high (above all default windows). openWindow leapfrogs it for one
  // specific window. bringPageToFront leapfrogs all windows again.
  pageZ: number
  openWindow: (id: WindowId) => void
  closeWindow: (id: WindowId) => void
  minimizeWindow: (id: WindowId) => void
  maximizeWindow: (id: WindowId) => void
  focusWindow: (id: WindowId) => void
  // Call on project-page mount: places the page above every current window.
  initProjectPage: () => void
  // Call when the user clicks the page content: brings it above all windows.
  bringPageToFront: () => void
  projectsFilter: string
  setProjectsFilter: (filter: string) => void
}

const defaultWindows: Record<WindowId, WindowState> = {
  hero: { isOpen: true, isMinimized: false, isMaximized: false, zIndex: 10 },
  projects: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  about: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  spotify: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: defaultWindows,
  topZ: 10,
  // High sentinel so the first render of WindowChrome is already above windows
  // before initProjectPage fires in useLayoutEffect.
  pageZ: 9997,
  projectsFilter: 'all',

  openWindow: (id) => {
    const { topZ } = get()
    const newZ = topZ + 1
    set((state) => ({
      topZ: newZ,
      // pageZ is intentionally unchanged: only this window leapfrogs the page
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
      // pageZ is intentionally unchanged: clicking a window keeps it above the page
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], zIndex: newZ },
      },
    }))
  },

  // Sets pageZ = topZ + 1, guaranteeing the page sits above every current window.
  // topZ is always >= max(window zIndices), so topZ + 1 beats all of them.
  initProjectPage: () => {
    const { topZ } = get()
    const newZ = topZ + 1
    set({ topZ: newZ, pageZ: newZ })
  },

  bringPageToFront: () => {
    const { pageZ, topZ } = get()
    // No-op if page is already on top (nothing opened after the last initProjectPage
    // or bringPageToFront call).
    if (pageZ >= topZ) return
    const newZ = topZ + 1
    set({ topZ: newZ, pageZ: newZ })
  },

  setProjectsFilter: (filter) => set({ projectsFilter: filter }),
}))
