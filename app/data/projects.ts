export type Project = {
  id: number
  title: string
  description: string
  repoUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    id: 0,
    title: 'Deep Learning Implementations & Notes',
    description:
    "My personal interpretations of various foundational deep learning papers.",
    repoUrl: 'https://github.com/Agoth24/deep-learning-papers',
    liveUrl: '',
  },
  {
    id: 1,
    title: 'Inventory Management API',
    description:
      "An Express and PostgreSQL REST API for managing a bookstore's books, genres, and authors.",
    repoUrl: 'https://github.com/Agoth24/bloom-inventory-api',
    liveUrl: '',
  },
  {
    id: 2,
    title: 'BLOOM Bookstore',
    description:
      'A React reading-list app for browsing and saving books, with data pulled from the OpenLibrary API.',
    repoUrl: 'https://github.com/Agoth24/bloom-bookstore',
    liveUrl: 'https://bloom-bookstore.vercel.app/',
  },
]
