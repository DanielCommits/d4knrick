import { ArrowUpRight, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "2024 — Present",
    role: "Senior Full Stack Developer",
    company: "FootyFrenzy/Footyflix",
    description:
      "Driving the development of innovative football streaming and fan engagement platforms using Next.js, TypeScript, and AWS. Designed scalable systems to deliver live scores, match highlights, and interactive features to thousands of fans daily. Collaborated closely with product teams to create seamless user experiences and fostered a culture of technical excellence.",
    achievements: [
      "Engineered real-time match updates and live score delivery for thousands of users",
      "Built interactive features for fan engagement, including polls and live chats",
      "Optimized video streaming infrastructure for high-traffic football events",
      "Led integration of third-party football data APIs for enhanced content",
      "Mentored junior developers in best practices for scalable web applications",
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    period: "2023-2024",
    role: "Junior Developer",
    company: "Iveshare",
    description:
      "Built and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved application performance by 40%.",
    achievements: [
      "Improved application performance by 40%",
      "Built 3 production applications from scratch",
      "Implemented automated testing reducing bugs by 50%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
    link: "#",
  },
  {
    period: "2021-2022",
    role: "Intern Developer (Self-Employed)",
    company: "Freelance / Contract",
    description:
      "Worked independently with various clients to deliver responsive web applications and digital solutions. Collaborated remotely with designers and business owners to turn ideas into polished products.",
    achievements: [
      "Successfully completed 10+ freelance web projects for small businesses and startups",
      "Built custom dashboards and landing pages tailored to client needs",
      "Managed client communications and project timelines from start to finish",
    ],
    technologies: ["React", "JavaScript", "Sass", "Figma"],
    link: "#",
  },
];

export function Experience() {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-sm font-mono text-accent uppercase tracking-wider">
                Experience
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A journey of building scalable applications and leading
              high-performing teams.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300"
              >
                <div className="absolute -left-3 top-8 w-2 h-2 rounded-full bg-accent hidden lg:block" />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </p>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base text-accent font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <a
                    href={exp.link}
                    className="text-muted-foreground hover:text-accent transition-all hover:scale-110 hover:rotate-12"
                    aria-label={`View ${exp.company} details`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-accent mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary text-secondary-foreground font-mono text-xs border border-border/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
