import Hero from "../../components/Hero/Hero";
import { currentProjects, gameProjects, softwareProjects, webProjects } from "../../data/projects";
import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";
import ProjectSection from "../../sections/ProjectSection/ProjectSection";
import SkillsSection from "../../sections/SkillsSection/SkillsSection";

function Home() {
    return (
        <>
            <Hero />
            <SkillsSection />
            <ExperienceSection />

            <ProjectSection title='Current Projects' projects={currentProjects} />
            <ProjectSection title='Web Projects' projects={webProjects} />
            <ProjectSection title='Backend Projects' projects={softwareProjects} />
            <ProjectSection title='Games' projects={gameProjects} />
        </>
    )
};

export default Home;