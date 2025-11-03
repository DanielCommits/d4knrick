import { ArrowUpRight, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "FootyFrenzy",
    description:
      "A dynamic football platform delivering live scores, match highlights, and real-time updates. Engage with interactive features and enjoy comprehensive coverage of leagues and tournaments worldwide.",
    image: "/footyfrenzy-news-site.png",
    technologies: ["React", "Javascript", "HTML", "CSS"],
    github: "https://github.com/DanielCommits/footyfrenzy",
    live: "https://footyfrenzy.vercel.app/",
  },
  {
    title: "Askie AI – Smart Conversational Chatbot",
    description:
      "An intelligent AI chatbot designed for engaging, honest, and witty conversations. Built with advanced natural language processing, Askie delivers instant responses and adapts to user interactions for a truly dynamic chat experience.",
    image: "/askie-ai-chatbot.png",
    technologies: ["Phyton", "PowerShell", "JavaScript", "CSS", "BatchFile","HTML"],
    github: "https://github.com/DanielCommits/Askie-AI-Chatbot",
    live: "https://askiebot.vercel.app/",
  },
  {
    title: "FootyFlix – Football Streaming Hub",
    description:
      "Stream live football matches, catch instant highlights, and explore exclusive content from top leagues around the world. FootyFlix delivers a seamless viewing experience with fast, free, and HD coverage for every fan.",
    image: "/footyflix-streaming-site.png",
    technologies: ["Next.js", "TypeScript", "CSS", "JavaScript", ],
    github: "https://github.com/DanielCommits/footyflix",
    live: "https://footyflix.vercel.app/",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless CMS for creative professionals with drag-and-drop builder and custom themes.",
    image: "/cms-dashboard-interface.jpg",
    technologies: ["Next.js", "Sanity", "React DnD", "Vercel"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
              Featured Projects
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A selection of projects that showcase my skills in full-stack
              development, UI/UX design, and problem-solving.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
