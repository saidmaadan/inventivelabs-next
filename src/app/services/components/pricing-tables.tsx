"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    price: {
      monthly: 99,
      yearly: 990,
    },
    features: [
      "Basic AI Models",
      "5 Projects",
      "10,000 API Calls",
      "Community Support",
      "Basic Analytics",
    ],
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    price: {
      monthly: 199,
      yearly: 1990,
    },
    features: [
      "Advanced AI Models",
      "Unlimited Projects",
      "100,000 API Calls",
      "Priority Support",
      "Advanced Analytics",
      "Custom Integration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: {
      monthly: 399,
      yearly: 3990,
    },
    features: [
      "Custom AI Solutions",
      "Unlimited Everything",
      "24/7 Premium Support",
      "Advanced Security",
      "Custom Training",
      "Dedicated Account Manager",
      "SLA Guarantee",
    ],
  },
]

export function PricingTables() {
  const [annual, setAnnual] = React.useState(false)

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Pricing Plans</h2>
        <p className="mt-2 text-muted-foreground">
          Choose the perfect plan for your business
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm">Monthly</span>
        <Switch
          checked={annual}
          onCheckedChange={setAnnual}
          aria-label="Toggle annual billing"
        />
        <span className="text-sm">Annual (Save 20%)</span>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={
              plan.popular
                ? "relative border-primary shadow-lg"
                : undefined
            }
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                Most Popular
              </span>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">
                  ${annual ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-muted-foreground">
                  /{annual ? "year" : "month"}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
} 