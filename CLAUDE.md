# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

This is a macOS desktop-themed portfolio. The root page (`/`) renders a full-viewport fake desktop — no scrolling. Everything is a fixed-position overlay.

### Layer order (z-index)
- `-z-10` — Desktop wallpaper gradient
- `z-[9998]` — Dock
- `z-[9999]` — MenuBar
- Windows — dynamic z-index managed by Zustand (`store/windowStore.ts`), starting at 10 and incrementing on focus

### Window system
- `components/MacWindow.tsx` — reusable Framer Motion draggable window with traffic-light buttons, title bar, and open/close/minimize/maximize animations
- `store/windowStore.ts` — Zustand store tracking open/minimized/maximized/zIndex state for windows: `hero`, `projects`, `about`, `resume`
- Windows are rendered inside the desktop div in `app/page.tsx` and shown/hidden via AnimatePresence

### Key components
- `components/MenuBar.tsx` — top bar with live clock
- `components/Dock.tsx` — bottom dock with Framer Motion magnification on hover (`useMotionValue`, `useTransform`, `useSpring`)
- `components/FolderIcon.tsx` — desktop folder icons with fanned preview images
- `components/ProjectCard.tsx` — project thumbnail cards used inside ProjectsWindow
- `components/WindowChrome.tsx` — static (non-draggable) title bar used on `/projects/[slug]` detail pages
- `components/windows/` — HeroWindow, ProjectsWindow, AboutWindow, ResumeWindow

### Data
- `data/projects.ts` — single source of truth for all 10 projects (slug, title, category, coverImage, etc.)
- Project slugs drive both `ProjectsWindow` filtering and `generateStaticParams` for `/projects/[slug]`

### Project detail pages
- `app/projects/[slug]/page.tsx` — routes to full content for `iterative-design` and `step-internship`, shows a placeholder for all others
- `app/projects/_content/IterativeDesign.tsx` and `StepInternship.tsx` — full content components

### Mobile
- Desktop UI is hidden on mobile (`hidden md:block`)
- `MobileFallback` component in `app/page.tsx` shows at `md` breakpoint and below: stacked layout with profile, about, and project links

### Images
All images live in `public/images/`. Cover images are at `/images/projects/cover/`. The `next.config.ts` sets `images.unoptimized: true` to avoid build-time optimization issues with GIFs and mixed formats.
