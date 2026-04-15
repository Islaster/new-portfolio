"use client";

import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-12 lg:px-24 py-12 font-sans">
      <section className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Resume</h1>
        <Button variant="outline" asChild>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </Button>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>
          Backend-heavy full-stack engineer with 5+ years shipping production
          APIs, cloud infrastructure, and AI workflows. Experienced across
          Node.js, Python, AWS, PostgreSQL, and React — building systems that
          hold up when real users show up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Technologies & Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Languages & Frameworks:</strong> JavaScript, TypeScript,
            Python, React, Next.js, Express, Node.js, PHP
          </li>
          <li>
            <strong>Cloud & Infrastructure:</strong> AWS (EC2, S3, Auto
            Scaling), Docker, Supabase, PostgreSQL, MongoDB, SQLite
          </li>
          <li>
            <strong>AI & Tools:</strong> ComfyUI, Stable Diffusion, DeepSeek
            API, Socket.IO, REST APIs, Git
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            gruntWAVE LLC — Full Stack Engineer (Project-Based Contract)
          </h3>
          <p className="italic">
            Nov 2025 – Present | Los Angeles, CA · Remote
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Sole fullstack developer building 3D content pipeline automations
              in Blender for 3D artists.
            </li>
            <li>
              Architecting Python-based tooling to automate repetitive
              production workflows.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Sony — 3D Capture Project Support (Project-Based Contract)
          </h3>
          <p className="italic">
            May 2025 – Apr 2026 | Culver City, CA · Hybrid
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Supported a confidential 3D capture project under NDA.</li>
            <li>
              Built and maintained data collection workflows and validation
              processes for photogrammetry pipelines.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Davant Systems — Full-Stack Developer (Project-Based Contract)
          </h3>
          <p className="italic">
            Mar 2023 – Feb 2026 | Los Angeles, CA · Hybrid
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Deployed Stable Diffusion to AWS with horizontal auto-scaling
              &mdash; automated spin-up and teardown of EC2 instances based on
              demand.
            </li>
            <li>
              Built the Photobooth Kiosk app end-to-end — real-time photo
              delivery with configurable client branding. Increased event
              engagement by 25%.
            </li>
            <li>
              Infrastructure and product work contributed to winning the CGW
              Silver Edge Award at SIGGRAPH 2023.
            </li>
            <li>
              Represented the company at SIGGRAPH and NAB, delivering live
              software demos to industry audiences.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Qeery — Backend Engineer (Project-Based Contract)
          </h3>
          <p className="italic">Feb 2024 – Jan 2025 | Los Angeles, CA</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Built the backend API for a queer event discovery app — REST
              endpoints, Eventbrite integration for live event ingestion.
            </li>
            <li>
              Containerized the full dev environment with Docker and Supabase to
              ensure parity between local and production databases.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            NHG — Fullstack Engineer (Project-Based Contract)
          </h3>
          <p className="italic">
            Jun 2024 – Dec 2024 | San Francisco, CA · Remote
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Built the brand&apos;s first web presence end-to-end — storefront,
              product pages, and automated lead capture via Google Sheets API
              that eliminated all manual data entry.
            </li>
            <li>
              Designed a PostgreSQL database to future-proof operations and
              enable future app development.
            </li>
            <li>
              Delivered as a complete, production-ready package to the client.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>
          <strong>General Assembly, San Francisco, CA</strong>
        </p>
        <p className="italic">
          Software Engineering Certification | Nov 2021 – Feb 2022
        </p>
      </section>
    </main>
  );
}
