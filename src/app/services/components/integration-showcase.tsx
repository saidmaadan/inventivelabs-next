"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const integrations = [
  {
    name: "TensorFlow",
    logo: "/logos/tensorflow.svg",
    description: "Open-source machine learning framework",
  },
  {
    name: "PyTorch",
    logo: "/logos/pytorch.svg",
    description: "Deep learning framework",
  },
  {
    name: "AWS",
    logo: "/logos/aws.svg",
    description: "Cloud computing services",
  },
  {
    name: "Google Cloud",
    logo: "/logos/gcloud.svg",
    description: "Cloud platform services",
  },
  {
    name: "Azure",
    logo: "/logos/azure.svg",
    description: "Microsoft cloud platform",
  },
  {
    name: "Docker",
    logo: "/logos/docker.svg",
    description: "Containerization platform",
  },
]

export function IntegrationShowcase() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Seamless Integrations
        </h2>
        <p className="mt-2 text-muted-foreground">
          Works with your favorite tools and platforms
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, i) => (
          <motion.div
            key={integration.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 