import React, { useEffect, useState } from "react";
import { getProjects } from "../api";
import { fallbackProjects } from "../data/fallbackData";

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    getProjects()
      .then((res) => {
        if (res.data && res.data.length) setProjects(res.data);
      })
      .catch(() => {
        // API not reachable yet — the fallback list above is already shown.
      });
  }, []);

  return (
    <section className="section projects" id="projects">
      <div className="section__heading">
        <h2>Projects</h2>
      </div>
      <div className="projects__list">
        {projects.map((project) => (
          <article className="project" key={project._id}>
            <div className="project__body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project__stack">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="project__links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
