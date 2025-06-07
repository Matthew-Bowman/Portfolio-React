import { lazy, Suspense } from "react";
import Hero from "../../components/Hero/Hero";

const ProjectSection = lazy(
  () => import("../../sections/ProjectSection/ProjectSection")
);

import SkillsSection from "../../sections/SkillsSection/SkillsSection";
import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";
import { projectList } from "../../data/projectList";

function Home() {
  return (
    <>
      {/* Above the fold */}
      <Hero />
      <SkillsSection />
      <ExperienceSection />

      {/* Below the fold */}
      {projectList.map(({ title, projects, loadingLabel }) => (
        <Suspense key={title} fallback={<div>{loadingLabel}</div>}>
          <ProjectSection title={title} projects={projects} />
        </Suspense>
      ))}
    </>
  );
}

export default Home;
