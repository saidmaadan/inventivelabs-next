import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react"
import { samplePosts } from "@/lib/sample-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = samplePosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{post.title}</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">
                  {post.publishedAt}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">
                  {post.readingTime}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert mx-auto max-w-3xl">
          {post.content}
        </div>

        <Separator />

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Previous Post
          </Button>
          <Button variant="ghost" className="gap-2">
            Next Post
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  )
} 