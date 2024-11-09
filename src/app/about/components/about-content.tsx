"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Lightbulb,
  Users,
  Target,
  Rocket,
} from "lucide-react"

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push the boundaries of what's possible with technology.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and partnership with our clients.",
    icon: Users,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from code to customer service.",
    icon: Target,
  },
  {
    title: "Impact",
    description:
      "We measure our success by the positive impact we create for our clients.",
    icon: Rocket,
  },
]

export function AboutContent() {
  return (
    <section className="space-y-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2015, InventiveLabs began with a vision to make artificial
              intelligence accessible to businesses of all sizes. What started as a
              small team of passionate developers has grown into a global
              technology company.
            </p>
            <p>
              Today, we're proud to work with organizations worldwide, helping them
              leverage the power of AI to transform their operations and create
              innovative solutions for their customers.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our mission is to democratize artificial intelligence and make
              cutting-edge technology accessible to businesses worldwide. We
              believe that AI has the power to transform industries and improve
              lives.
            </p>
            <p>
              Through innovation, collaboration, and dedication to excellence, we
              help our clients navigate the digital future and achieve their goals.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
          <p className="mt-2 text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-primary" />
                    <h3 className="mt-4 font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 