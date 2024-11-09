"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import {
  Brain,
  Cpu,
  Database,
  Lock,
  MessageSquare,
  Share2,
} from "lucide-react"

const features = [
  {
    title: "AI-Powered Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
    icon: Brain,
  },
  {
    title: "Machine Learning",
    description:
      "Implement advanced machine learning models to derive insights from your data.",
    icon: Cpu,
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with our advanced analytics platform.",
    icon: Database,
  },
  {
    title: "Security First",
    description:
      "Enterprise-grade security measures to protect your sensitive information.",
    icon: Lock,
  },
  {
    title: "Natural Language",
    description:
      "Advanced NLP capabilities for human-like text understanding and generation.",
    icon: MessageSquare,
  },
  {
    title: "API Integration",
    description:
      "Seamlessly integrate with existing systems through our robust API.",
    icon: Share2,
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: typeof features[0]
  index: number
}) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-lg border p-6 hover:border-primary transition-colors"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <feature.icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">{feature.title}</h3>
      </div>
      <p className="mt-4 text-muted-foreground">{feature.description}</p>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Discover the tools and technologies that power our AI solutions
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 