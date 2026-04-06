"use client";

import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<"work" | "personal">("work");

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-12 lg:px-24 py-12 font-sans">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Isaac Laster
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Fullstack developer building scalable software at the intersection of
          AI, creative tech, and the web.
        </p>
        <Button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-4"
        >
          Get in Touch
        </Button>
      </section>

      {/* About Me */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-2xl">
          I&apos;m a fullstack engineer focused on building reliable,
          production-ready web apps across the stack. I care about clean code,
          clear data flow, and systems that hold up under real usage.
        </p>
        <p className="text-lg max-w-2xl mt-4">
          I&apos;ve shipped end-to-end features in fast-moving environments,
          working across React/TypeScript frontends and Node/Python backends,
          with AWS powering storage and infrastructure. A lot of my recent work
          centers on real-time GenAI workflows, integrating tools like ComfyUI
          and the ChatGPT API into responsive, user-facing applications
        </p>
        <p className="text-lg max-w-2xl mt-4">
          I enjoy owning systems from idea to deployment, whether that means
          building from scratch or improving legacy code to make it faster, more
          stable, and easier to maintain.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Selected Work
        </h2>

        {/* Pill Toggle */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setSelected("work")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selected === "work"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setSelected("personal")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selected === "personal"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Personal
          </button>
        </div>

        {/* Dynamic Project List */}
        <div className="space-y-10">
          {projects[selected].map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Get in Touch
        </h2>
        <p className="text-lg max-w-xl mb-4">
          You can reach me at{" "}
          <a href="mailto:isaac.laster812@gmail.com" className="underline">
            Isaac.Laster812@gmail.com
          </a>{" "}
          or find me on{" "}
          <a
            href="https://github.com/islaster"
            className="underline"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/isaaclaster"
            className="underline"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
        <Button variant="outline" asChild>
          <a href="/resume" target="_self">
            View My Resume
          </a>
        </Button>
      </section>
    </main>
  );
}
