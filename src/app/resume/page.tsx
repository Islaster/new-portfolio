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
          Hardworking and dependable full-stack developer known for taking
          complete ownership of projects and consistently delivering
          high-quality results. Thrives under pressure, independently managing
          complex tasks across web apps, AI, and virtual production while
          meeting tight deadlines and exceeding expectations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Technologies & Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Languages & Frameworks:</strong> JavaScript, TypeScript,
            Python, React.js, Express.js, HTML, CSS, Node.js, jQuery, Bootstrap,
            Next
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git, GitHub, MongoDB,
            PostgreSQL, Windows, Linux, Mac, AWS(EC2, S3)
          </li>
          <li>
            <strong>Methodologies:</strong> Agile, SCRUM
          </li>
          <li>
            <strong>Soft Skills:</strong> Communication, Collaboration,
            Motivation
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            NHG (E-commerce website), San Francisco, CA
          </h3>
          <p className="italic">Fullstack Engineer | 06/2024 - Current</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Architected and developed NHG&apos;s first website using PHP,
              HTML, CSS, and JavaScript.
            </li>
            <li>
              Engineered seamless Google Sheets API integration to automate
              client contact management.
            </li>
            <li>
              Designed a scalable PostgreSQL database system to future-proof
              operations and enable app development.
            </li>
            <li>
              Implemented visually stunning parallax animations to increase
              visitor retention and engagement.
            </li>
            <li>
              Independently spearheaded the end-to-end development lifecycle as
              the sole technical hire.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Davant Systems (AI Creative Software), Los Angeles, CA
          </h3>
          <p className="italic">Full-Stack Engineer | 03/2023 - Current</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Engineered AWS cloud infrastructure and mounted S3 storage,
              elevating scalability and efficiency.
            </li>
            <li>
              Solely developed the Photobooth Kiosk app, driving event
              engagement with custom client branding.
            </li>
            <li>
              Represented the company at SIGGRAPH and NAB, securing the
              prestigious CGW Silver Edge Award.
            </li>
            <li>
              Delivered compelling software demos to diverse audiences, boosting
              industry recognition and partnerships.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Qeery (Queer Based Events App), Los Angeles, CA
          </h3>
          <p className="italic">Backend Engineer | 02/2024 - 01/2025</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Integrated Eventbrite and other third-party APIs, driving enhanced
              app functionality.
            </li>
            <li>
              Designed DevOps workflow in Docker and Supabase to ensure parity
              between local and production databases.
            </li>
            <li>
              Delivered API and data management solutions independently. Cut
              down on load time for data retrieval.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Global Objects (Virtual Production Company), Los Angeles, CA
          </h3>
          <p className="italic">Software Engineer | 05/2023 - 02/2024</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Transformed outdated hardware into AI-ready systems, slashing
              costs and enhancing company capabilities.
            </li>
            <li>
              Evaluated and integrated groundbreaking AI tools including
              Neuralangelo, Gaussian Splatting, and DeepFaceLab.
            </li>
            <li>
              Set up and supported workstations for production sets, ensuring
              seamless performance on critical projects.
            </li>
            <li>
              Created robust automation scripts, streamlining workflows and
              boosting company efficiency by 40%.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold">
            Freelance (Multiple Clients), Los Angeles, CA
          </h3>
          <p className="italic">Full-Stack Engineer | 02/2022 - 01/2024</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Developed dynamic web apps with MERN, streamlining client
              operations and user onboarding.
            </li>
            <li>
              Designed filtering systems and interactive graphs to simplify
              inventory management and insights.
            </li>
            <li>
              Debugged SMTP issues, restored email access, and improved
              communication infrastructure.
            </li>
            <li>
              Optimized technical SEO, achieving higher Google rankings and
              increased organic traffic.
            </li>
            <li>
              Built ComfyUI and data transformation pipelines using AWS EC2, S3,
              React, and ChatGPT API.
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
          Software Engineering Certification | 11/2021 - 02/2022
        </p>
      </section>
    </main>
  );
}
