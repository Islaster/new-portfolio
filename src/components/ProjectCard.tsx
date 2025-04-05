"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
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
    </div>
  );
}
