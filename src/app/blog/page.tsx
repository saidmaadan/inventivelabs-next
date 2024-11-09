import { Suspense } from "react"
import { BlogGrid } from "./components/blog-grid"
import { BlogHeader } from "./components/blog-header"
import { FeaturedPost } from "./components/featured-post"
import { BlogLoading } from "./components/blog-loading"

export default function BlogPage() {
  return (
    <div className="container py-12">
      <BlogHeader />
      <Suspense fallback={<BlogLoading />}>
        <div className="space-y-12">
          <FeaturedPost />
          <BlogGrid />
        </div>
      </Suspense>
    </div>
  )
} 