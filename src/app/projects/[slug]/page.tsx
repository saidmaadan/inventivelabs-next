import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { sampleProjects } from "@/lib/sample-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = sampleProjects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="container py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Projects
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{project.title}</span>
          </div>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Main Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="prose dark:prose-invert lg:col-span-2">
            {project.content}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Technologies</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              {project.demoUrl && (
                <Button className="w-full" asChild>
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((image, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={`${project.title} - Image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Previous Project
          </Button>
          <Button variant="ghost" className="gap-2">
            Next Project
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  )
} 