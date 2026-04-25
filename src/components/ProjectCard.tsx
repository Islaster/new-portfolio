"use client";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link?: string;
  demo_link?: string;
  demo_video?: string;
  github_link?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  demo_link,
  demo_video,
  github_link,
}: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <p className="text-sm text-gray-500 mt-1">{tech}</p>
      <div className="flex flex-wrap gap-3 mt-2 items-center">
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
          <a
            href={demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            View Demo →
          </a>
        )}
        {demo_video && (
          <button
            onClick={() => setShowVideo(true)}
            className="text-blue-600 hover:underline text-sm p-0 leading-normal"
          >
            Demo Video →
          </button>
        )}
        {github_link && (
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            GitHub →
          </a>
        )}
      </div>
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={demo_video}
                className="absolute inset-0 w-full h-full rounded-lg"
                allowFullScreen
                allow="autoplay; encrypted-media"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
