import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Education />
      <Contact />
    </main>
  )
}
