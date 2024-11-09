import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const contactInfo = {
  address: "123 Innovation Street, Tech City, TC 12345",
  email: "contact@inventivelabs.ai",
  phone: "+1 (555) 123-4567",
  office: "Monday - Friday, 9:00 AM - 6:00 PM",
  social: [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
  ],
}

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>
          Find us at our office or reach out online
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-4">
          <MapPin className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Address</p>
            <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Mail className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Email</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Phone className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Phone</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Building2 className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Office Hours</p>
            <p className="text-sm text-muted-foreground">{contactInfo.office}</p>
          </div>
        </div>
        <div className="flex space-x-2 pt-4">
          {contactInfo.social.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.name}
                variant="outline"
                size="icon"
                asChild
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{item.name}</span>
                </a>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
} 