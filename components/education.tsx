import { GraduationCap, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const education = [
  {
    degree: "Bachelor of Engineering in Information and Communication Technology",
    institution: "Federal University of Technology Akure",
    period: "2024-Present",
    description: "ONGOING. Focusing on software engineering, algorithms, and web technologies.",
    icon: GraduationCap,
  },
  {
    degree: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    period: "2023",
    description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
    icon: Award,
  },
  {
    degree: "Full Stack Web Development",
    institution: "FreeCodeCamp",
    period: "2022",
    description: "Comprehensive certification covering modern web development practices and technologies.",
    icon: Award,
  },
]

export function Education() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Education & Certifications</h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Formal education and professional certifications that have shaped my technical foundation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground">{item.period}</p>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 text-balance">{item.degree}</h3>

                <p className="text-sm text-accent mb-3">{item.institution}</p>

                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
