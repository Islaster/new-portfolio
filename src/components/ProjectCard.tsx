"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link?: string;
  demo_link?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  demo_link,
}: ProjectCardProps) {
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <p className="text-sm text-gray-500 mt-1">{tech}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:underline"
        >
          Visit Live App →
        </a>
      )}
      {demo_link && (
        <>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            View Demo →
          </a>
          <p className="text-sm text-gray-500 mt-1">
            Live kiosk runs on local hardware at events — this is a preview of
            the client-facing interface.
          </p>
        </>
      )}
    </div>
  );
}
