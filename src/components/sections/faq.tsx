"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What AI solutions do you offer?",
    answer:
      "We offer a wide range of AI solutions including machine learning models, natural language processing, computer vision, and predictive analytics tailored to your business needs.",
  },
  {
    question: "How can AI benefit my business?",
    answer:
      "AI can automate repetitive tasks, provide valuable insights from data, improve decision-making, enhance customer experience, and create new opportunities for innovation and growth.",
  },
  {
    question: "What is your implementation process?",
    answer:
      "Our implementation process involves understanding your requirements, data analysis, model development, testing, deployment, and continuous monitoring and improvement.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your sensitive data.",
  },
  {
    question: "What support do you provide?",
    answer:
      "We provide comprehensive support including training, documentation, maintenance, and 24/7 technical assistance to ensure smooth operation of your AI solutions.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Find answers to common questions about our AI solutions
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 