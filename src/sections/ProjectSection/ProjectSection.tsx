import { type FC } from "react";

import Section from "../../components/Section/Section";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import type { ProjectType } from "../../data/projects";

type ProjectSectionProps = {
  title: string;
  projects: ProjectType[];
};

const ProjectSection: FC<ProjectSectionProps> = ({ title, projects }) => {
  return (
    <Section title={title}>
      <div className="container mx-auto mt-12 text-center">
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-6">
          {projects.map((project) => (
            <div key={project.title} className="w-full md:w-1/2 xl:w-1/3 px-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectSection;
