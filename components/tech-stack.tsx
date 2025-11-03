import { Card } from "@/components/ui/card"

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
]

export function TechStack() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Tech Stack</h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technologies and tools I use to bring ideas to life. Always learning and expanding my skillset.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-accent mb-6">{category.category}</h3>

              <div className="space-y-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
