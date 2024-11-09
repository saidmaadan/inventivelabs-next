"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Project } from "@/types"
import { sampleProjects } from "@/lib/sample-data"
import { ProjectCard } from "./project-card"
import { ViewToggle } from "@/components/shared/view-toggle"
import { Pagination } from "@/components/shared/pagination"

const ITEMS_PER_PAGE = 6

export function ProjectsGrid() {
  const [view, setView] = React.useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = React.useState(1)
  const [projects] = React.useState<Project[]>(sampleProjects)

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <ViewToggle view={view} onViewChange={setView} />
      </div>
      <div
        className={
          view === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "space-y-6"
        }
      >
        {paginatedProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <ProjectCard project={project} view={view} />
          </motion.div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
} 