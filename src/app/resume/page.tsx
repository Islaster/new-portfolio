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
          Backend-leaning full-stack engineer with roughly five years of
          experience across IT/infrastructure operations, cloud systems, and
          end-to-end product delivery. Has owned AWS infrastructure (S3, IAM,
          Lambda) and cross-platform data-sync pipelines, hardened
          AI-generated code for production release, and built early-stage LLM
          function-calling systems. Comfortable moving between backend
          services, cloud operations, and React/Node front-end work as the
          problem demands.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Technologies & Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Languages & Frameworks:</strong> Python, JavaScript,
            TypeScript, React, Next.js, Node.js, Express, Fastify, FastAPI
          </li>
          <li>
            <strong>Cloud & Infrastructure:</strong> AWS (S3, Lambda, IAM),
            Docker, SQLite3, MongoDB
          </li>
          <li>
            <strong>Integrations & APIs:</strong> Airtable, ShotGrid,
            Backblaze, Eventbrite API
          </li>
          <li>
            <strong>AI & LLM:</strong> LLM function-calling & tool
            orchestration (FastAPI-based)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            IT/Pipeline Engineer — 30 Ninjas
          </h3>
          <p className="italic">May 2026 – Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Designed and implemented the organization&apos;s AWS S3 bucket
              structure and IAM permission scheme, establishing role-based
              access company-wide.
            </li>
            <li>
              Built Python-based migration and sync pipelines moving data
              across AWS, Airtable, ShotGrid, and Backblaze, replacing manual
              transfers with automated workflows.
            </li>
            <li>
              Wrote AWS Lambda functions to automate sync with third-party
              integrations as new tooling needs came up.
            </li>
            <li>
              Serve as the primary debugger for internal software issues
              spanning infrastructure and application code.
            </li>
            <li>
              Own new-employee IT onboarding end-to-end, from account
              provisioning to access setup.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">Software Engineer — Gruntwave</h3>
          <p className="italic">Nov 2025 – Apr 2026</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Refactored AI-generated Python code from company leadership
              into production-ready releases, trimming redundant logic and
              hardening for stable distribution.
            </li>
            <li>
              Converted Python applications into standalone Windows and
              macOS executables for release.
            </li>
            <li>
              Built standalone desktop applications that interfaced with
              Blender plugins for the studio&apos;s creative pipeline.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Fullstack Developer / Cloud Engineer — Davant Systems (Contract)
          </h3>
          <p className="italic">Mar 2023 – Feb 2026</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Built a fullstack photobooth kiosk application (React,
              Fastify) for on-site event use, including integration with a
              physical printer.
            </li>
            <li>
              Designed an offline-first data layer with SQLite3 so the kiosk
              ran fully without an internet connection during events.
            </li>
            <li>
              Built the photo capture-and-delivery pipeline, automatically
              emailing captured photos to attendees and clients.
            </li>
            <li>
              Owned the AWS cloud infrastructure supporting the kiosk
              deployment, from provisioning through event-day reliability.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Software Engineer / IT — Global Objects
          </h3>
          <p className="italic">May 2023 – May 2024</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Refurbished and reconfigured legacy hardware to reliably run
              AI models in on-set production environments.
            </li>
            <li>
              Led R&D evaluation of photogrammetry AI tools and models,
              selecting which moved into production workflows.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">Backend Engineer — Queery</h3>
          <p className="italic">May 2022 – May 2023</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Built backend APIs in Next.js/TypeScript to integrate
              third-party services and expand product coverage.
            </li>
            <li>
              Integrated the Eventbrite API and external event data sources,
              improving event discovery for users.
            </li>
            <li>
              Containerized development workflows with Docker, reducing
              environment drift and shortening new-developer onboarding.
            </li>
            <li>
              Optimized backend query patterns and data flows, improving API
              response times for core user-facing actions.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">Fullstack Developer — BlueVishnu</h3>
          <p className="italic">Mar 2022 – May 2022</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Delivered a fullstack web application for a live brand
              activation event under a tight, fixed deadline.
            </li>
            <li>
              Built a customer data-capture database and integrated it
              directly with the event-facing application.
            </li>
            <li>
              Supported marketing operations with reliable, real-time data
              handling throughout the live event.
            </li>
            <li>
              Advised leadership on Python-based tooling and automation
              opportunities beyond the immediate project.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Software Engineering Tutor — General Assembly
          </h3>
          <p className="italic">Nov 2021 – Feb 2022</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Mentored aspiring developers through hands-on coding sessions,
              live debugging, and project completion.
            </li>
            <li>
              Guided students through fullstack projects spanning
              JavaScript, React, Node.js, Express, and MongoDB.
            </li>
            <li>
              Delivered structured code reviews with actionable feedback on
              code quality, architecture, and problem-solving approach.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
