import {
  currentProjects,
  gameProjects,
  softwareProjects,
  webProjects,
} from "./projects";

export const projectList = [
  {
    title: "Current Projects",
    projects: currentProjects,
    loadingLabel: "Loading Current Projects...",
  },
  {
    title: "Web Projects",
    projects: webProjects,
    loadingLabel: "Loading Web Projects...",
  },
  {
    title: "Backend Projects",
    projects: softwareProjects,
    loadingLabel: "Loading Backend Projects...",
  },
  {
    title: "Games",
    projects: gameProjects,
    loadingLabel: "Loading Games...",
  },
];
