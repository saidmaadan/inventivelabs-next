"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Post } from "@/types"
import { samplePosts } from "@/lib/sample-data"
import { BlogCard } from "./blog-card"
import { ViewToggle } from "@/components/shared/view-toggle"
import { Loader2 } from "lucide-react"

const ITEMS_PER_PAGE = 6

export function BlogGrid() {
  const [view, setView] = React.useState<"grid" | "list">("grid")
  const [posts, setPosts] = React.useState<Post[]>([])
  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const loadMorePosts = React.useCallback(async () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    const startIndex = (page - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const newPosts = samplePosts.slice(startIndex, endIndex)
    
    if (newPosts.length === 0) {
      setHasMore(false)
    } else {
      setPosts((prev) => [...prev, ...newPosts])
      setPage((prev) => prev + 1)
    }
    
    setIsLoading(false)
  }, [page, isLoading, hasMore])

  React.useEffect(() => {
    if (inView) {
      loadMorePosts()
    }
  }, [inView, loadMorePosts])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Latest Posts</h2>
        <ViewToggle view={view} onViewChange={setView} />
      </div>
      <div
        className={
          view === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "space-y-6"
        }
      >
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <BlogCard post={post} view={view} />
          </motion.div>
        ))}
      </div>
      {hasMore && (
        <div
          ref={ref}
          className="flex justify-center py-8"
        >
          {isLoading && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading more posts...
            </div>
          )}
        </div>
      )}
    </div>
  )
} 