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
            (window.location.href = "mailto:isaac.laster812@gmail.com")
          }
          className="mt-4"
        >
          Get in Touch
        </Button>
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

      {/* About Me */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-2xl">
          I'm a fullstack developer with a passion for clean code, creative
          software, and cutting-edge tools. Whether I'm building from scratch or
          improving legacy systems, I thrive in fast-paced environments where I
          can take full ownership of the stack.
        </p>
        <p className="text-lg max-w-2xl mt-4">
          Lately, I've been focused on integrating AI workflows (like ComfyUI
          and ChatGPT API) and scaling web apps with AWS and serverless
          infrastructure.
        </p>
      </section>

      {/* Contact */}
      <section>
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
        <Button variant="outline">View My Resume</Button>
      </section>
    </main>
  );
}
