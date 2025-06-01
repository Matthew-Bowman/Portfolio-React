import { currentProjects, webProjects, softwareProjects, gameProjects } from "./data/projects"
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection"
import Hero from "./components/Hero/Hero"
import ProjectSection from "./sections/ProjectSection/ProjectSection"
import SkillsSection from "./sections/SkillsSection/SkillsSection"

function App() {

  return (
    <main className="bg-light min-vh-100">
      <Hero />
      <SkillsSection />
      <ExperienceSection />

      <ProjectSection title='Current Projects' projects={currentProjects} />
      <ProjectSection title='Web Projects' projects={webProjects} />
      <ProjectSection title='Backend Projects' projects={softwareProjects} />
      <ProjectSection title='Games' projects={gameProjects} />
    </main>
  )
}

export default App
