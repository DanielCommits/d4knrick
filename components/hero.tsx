"use client";

import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Hero() {
  const titles = [
    "Full Stack Developer",
    "Web Developer",
    "UI/UX Enthusiast",
    "Tech Innovator",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-balance">
                <span className="text-foreground">Omoare</span>{" "}
                <span className="text-accent">Daniel</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-mono h-8 flex items-center">
                <span className="animate-fade-in" key={currentTitleIndex}>
                  {titles[currentTitleIndex]}
                </span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I craft exceptional digital experiences with clean code and
              thoughtful design. Specializing in modern web technologies and
              scalable architectures.
            </p>

            <div className="flex gap-4">
              <a href="#projects">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  Get In Touch
                </Button>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/DanielCommits"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/omoaredaniel07/"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/thebigggdan"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579451566720"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/d4knrick/"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:omoaredaniel@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-accent/20 rounded-lg blur-3xl" />
              <div className="relative bg-card border border-border rounded-lg overflow-hidden aspect-square">
                <img
                  src="/silver-surfer-portrait.jpeg"
                  alt="Developer portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
