"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("https://formspree.io/f/mdkadggl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-mono text-accent uppercase tracking-wider">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Let's work together
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-accent" />
                <span>omoredaniel@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-accent" />
                <span>+234 708-256-0363</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                <span>FUTA Southgate, Akure. Nigeria</span>
              </div>
            </div>

            <a href="mailto:omoredaniel@gmail.com">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send Message
              </Button>
            </a>
          </div>

          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send Message
              </Button>
              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </Card>
        </div>

        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Omoare Daniel. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
