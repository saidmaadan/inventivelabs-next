export type Author = {
  id: string
  name: string
  avatar: string
  role: string
}

export type Category = {
  id: string
  name: string
  slug: string
  description?: string
}

export type Project = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  coverImage: string
  images: string[]
  category: Category
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  publishedAt: string
}

export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: Author
  category: Category
  tags: string[]
  publishedAt: string
  readingTime: string
  featured?: boolean
}

export type Service = {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: {
    monthly: number
    yearly: number
  }
}

export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  socialLinks: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export type Testimonial = {
  id: string
  content: string
  author: {
    name: string
    role: string
    company: string
    avatar: string
  }
} 