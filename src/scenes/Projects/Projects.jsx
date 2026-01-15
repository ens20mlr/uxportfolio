// src/scenes/Projects/Projects.jsx
import { useState, useRef, useEffect } from 'react';
import s from './Projects.module.scss';
import projects from '../../data/projects';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ProjectCard from './ProjectCard/ProjectCard';
import ExpandedProject from './ExpandedProject/ExpandedProject';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const expandedRef = useRef(null);

  // Scrolla ner till ExpandedProject när den ändras
  useEffect(() => {
    if (selectedProject && expandedRef.current) {
      expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    // Klicka på samma projekt stänger det
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          Recent <strong className={s.purple}>Projects</strong>
        </h1>
        <p className={s.subtitle}>Take a look at some of my work during my studies.</p>

        <ul className={s.projects}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </ul>

        {/* Expanded project visas under projekten */}
        {selectedProject && (
          <div ref={expandedRef}>
            <ExpandedProject project={selectedProject} />
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default Projects;
