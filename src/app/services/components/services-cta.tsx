import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesCTA() {
  return (
    <section className="relative overflow-hidden rounded-lg bg-primary px-6 py-24 text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary to-primary-foreground/10" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Get started with our AI solutions today and stay ahead of the competition.
          Our team is ready to help you implement cutting-edge technology for your
          business.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="group"
            asChild
          >
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20"
            asChild
          >
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 