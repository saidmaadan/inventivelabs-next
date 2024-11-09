import { ContactForm } from "./components/contact-form"
import { ContactInfo } from "./components/contact-info"
import { Map } from "./components/map"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
            <p className="mt-2 text-muted-foreground">
              Get in touch with our team to discuss your project
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="space-y-8">
          <ContactInfo />
          <Map />
        </div>
      </div>
    </div>
  )
} 