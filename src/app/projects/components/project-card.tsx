import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
  project: Project
  view: "grid" | "list"
}

export function ProjectCard({ project, view }: ProjectCardProps) {
  return (
    <Card className={view === "list" ? "flex flex-row" : ""}>
      <div className={view === "list" ? "w-1/3" : ""}>
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
      <div className={view === "list" ? "w-2/3" : ""}>
        <CardHeader>
          <CardTitle>
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-primary"
            >
              {project.title}
            </Link>
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.demoUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.githubUrl} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  )
} 