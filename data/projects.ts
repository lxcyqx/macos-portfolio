export type Project = {
  slug: string
  title: string
  displayTitle: string
  subtitle: string
  category: 'engineering' | 'design' | 'art'
  year: string
  coverImage: string
  role: string
}

export const projects: Project[] = [
  {
    slug: 'computer-graphics',
    title: 'computer-graphics',
    displayTitle: 'Computer Graphics',
    subtitle: 'Rendering & Simulation',
    category: 'engineering',
    year: '2022',
    coverImage: '/images/projects/cover/trees.png',
    role: 'developer',
  },
  {
    slug: 'step-internship',
    title: 'step-internship',
    displayTitle: 'STEP Capstone: Groupple',
    subtitle: 'Software Engineering Internship',
    category: 'engineering',
    year: '2021',
    coverImage: '/images/projects/cover/groupple-cover.png',
    role: 'full-stack developer',
  },
  {
    slug: 'proud-house',
    title: 'proud-house',
    displayTitle: 'Proud House',
    subtitle: 'Merch Design Concept',
    category: 'design',
    year: '2023',
    coverImage: '/images/proud-house/ph_3.png',
    role: 'designer',
  },
  {
    slug: 'iterative-design',
    title: 'iterative-design',
    displayTitle: 'Iterative Design & User Testing',
    subtitle: 'UX Design',
    category: 'design',
    year: '2021',
    coverImage: '/images/projects/cover/iterative-cover.gif',
    role: 'UX designer',
  },
  {
    slug: 'book-depository-redesign',
    title: 'book-depository-redesign',
    displayTitle: 'Book Depository Redesign',
    subtitle: 'Responsive Design',
    category: 'design',
    year: '2021',
    coverImage: '/images/projects/cover/redesign-cover-gray.gif',
    role: 'UX designer',
  },
  {
    slug: 'ab-testing',
    title: 'ab-testing',
    displayTitle: 'A/B Testing & Eye Tracking',
    subtitle: 'UX Research',
    category: 'design',
    year: '2021',
    coverImage: '/images/projects/cover/eyetracking-cover.jpg',
    role: 'UX researcher',
  },
  {
    slug: 'personas',
    title: 'personas',
    displayTitle: 'Personas & Storyboarding',
    subtitle: 'UX Research',
    category: 'design',
    year: '2021',
    coverImage: '/images/projects/cover/personas-cover.jpg',
    role: 'UX researcher',
  },
  {
    slug: 'fine-art',
    title: 'fine-art',
    displayTitle: 'Fine Art',
    subtitle: 'Oil, Monotype & Drawing',
    category: 'art',
    year: '2020–2026',
    coverImage: '/images/fine-art/thumbnails/pagan.jpg',
    role: 'artist',
  },
  {
    slug: 'digital-illustration',
    title: 'digital-illustration',
    displayTitle: 'Digital Illustration',
    subtitle: 'Digital Art',
    category: 'art',
    year: '2020–2022',
    coverImage: '/images/digital/landscape.jpg',
    role: 'artist',
  },
  {
    slug: 'animation',
    title: 'animation',
    displayTitle: 'Animation',
    subtitle: 'Motion & Character',
    category: 'art',
    year: '2021',
    coverImage: '/images/animation/character.png',
    role: 'animator',
  },
  {
    slug: 'architecture',
    title: 'architecture',
    displayTitle: 'Architecture',
    subtitle: 'Spatial Design',
    category: 'art',
    year: '2021',
    coverImage: '/images/spatial-prototype.jpg',
    role: 'designer',
  },
]
