import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
