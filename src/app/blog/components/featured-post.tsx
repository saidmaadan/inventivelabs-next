import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { samplePosts } from "@/lib/sample-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturedPost() {
  const featuredPost = samplePosts.find((post) => post.featured)

  if (!featuredPost) return null

  return (
    <Card className="overflow-hidden">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative aspect-video md:aspect-auto">
          <Image
            src={featuredPost.coverImage}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4 p-6">
          <Badge>Featured</Badge>
          <CardHeader className="p-0">
            <CardTitle className="text-2xl">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="hover:text-primary"
              >
                {featuredPost.title}
              </Link>
            </CardTitle>
            <CardDescription className="text-base">
              {featuredPost.excerpt}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{featuredPost.publishedAt}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{featuredPost.readingTime}</span>
              </div>
            </div>
          </CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{featuredPost.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {featuredPost.author.role}
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href={`/blog/${featuredPost.slug}`}>Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
} 