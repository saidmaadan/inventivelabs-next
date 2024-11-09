import { Suspense } from "react"
import { ProjectsGrid } from "./components/projects-grid"
import { ProjectsHeader } from "./components/projects-header"
import { ProjectsLoading } from "./components/projects-loading"

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <ProjectsHeader />
      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsGrid />
      </Suspense>
    </div>
  )
} 