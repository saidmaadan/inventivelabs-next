import { ServicesGrid } from "./components/services-grid"
import { PricingTables } from "./components/pricing-tables"
import { IntegrationShowcase } from "./components/integration-showcase"
import { TestimonialsSlider } from "./components/testimonials-slider"
import { ServicesCTA } from "./components/services-cta"

export default function ServicesPage() {
  return (
    <div className="container space-y-24 py-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
        <p className="text-muted-foreground">
          Comprehensive AI and technology solutions for your business
        </p>
      </div>
      <ServicesGrid />
      <PricingTables />
      <IntegrationShowcase />
      <TestimonialsSlider />
      <ServicesCTA />
    </div>
  )
} 