import { Brain, Code, Database, Lock, MessageSquare, Share2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    title: "AI Development",
    description:
      "Custom AI solutions tailored to your business needs, from machine learning models to neural networks.",
    icon: Brain,
    features: [
      "Custom ML Models",
      "Neural Networks",
      "Deep Learning",
      "AI Integration",
    ],
  },
  {
    title: "Web Development",
    description:
      "Modern web applications built with the latest technologies and best practices.",
    icon: Code,
    features: [
      "Full-stack Development",
      "Responsive Design",
      "Performance Optimization",
      "SEO",
    ],
  },
  {
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable insights with our advanced analytics platform.",
    icon: Database,
    features: [
      "Data Processing",
      "Predictive Analytics",
      "Business Intelligence",
      "Reporting",
    ],
  },
  {
    title: "Security Solutions",
    description:
      "Enterprise-grade security measures to protect your sensitive information.",
    icon: Lock,
    features: [
      "Encryption",
      "Access Control",
      "Security Audits",
      "Compliance",
    ],
  },
  {
    title: "NLP Solutions",
    description:
      "Advanced natural language processing capabilities for text understanding and generation.",
    icon: MessageSquare,
    features: [
      "Text Analysis",
      "Sentiment Analysis",
      "Language Generation",
      "Chatbots",
    ],
  },
  {
    title: "API Integration",
    description:
      "Seamless integration with existing systems through our robust API solutions.",
    icon: Share2,
    features: [
      "API Development",
      "System Integration",
      "Documentation",
      "Support",
    ],
  },
]

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon
        return (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
              <CardDescription className="pt-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
} 