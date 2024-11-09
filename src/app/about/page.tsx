import { AboutHero } from "./components/about-hero"
import { AboutContent } from "./components/about-content"
import { TeamSection } from "./components/team-section"
import { IntegrationShowcase } from "../services/components/integration-showcase"
import { TestimonialsSlider } from "../services/components/testimonials-slider"
import { AboutCTA } from "./components/about-cta"

export default function AboutPage() {
  return (
    <div className="container space-y-24 py-12">
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <IntegrationShowcase />
      <TestimonialsSlider />
      <AboutCTA />
    </div>
  )
} 