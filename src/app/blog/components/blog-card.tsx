import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Post } from "@/types"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface BlogCardProps {
  post: Post
  view: "grid" | "list"
}

export function BlogCard({ post, view }: BlogCardProps) {
  return (
    <Card className={view === "list" ? "flex flex-row" : ""}>
      <div className={view === "list" ? "w-1/3" : ""}>
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          {post.featured && (
            <div className="absolute top-2 right-2">
              <Badge>Featured</Badge>
            </div>
          )}
        </div>
      </div>
      <div className={view === "list" ? "w-2/3" : ""}>
        <CardHeader>
          <div className="space-y-1">
            <CardTitle>
              <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription>{post.excerpt}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
} 