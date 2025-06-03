import { IMAGES, type ImageAsset } from "./images";
import { PROJECT_LINKS } from "./routes";
import { SKILL_ICONS, type SkillIconType } from "./skillIcons";

export type ProjectType = {
  title: string;
  description: string;
  icons: SkillIconType[];
  thumbnail?: ImageAsset,
  showLink?: string;
  repoLink?: string;
};

export const currentProjects: ProjectType[] = [
  {
    title: "ESP32-WifiManager",
    description: "A fork of the WiFiManager library tailored for ESP32, offering a streamlined captive portal for easy and dynamic Wi-Fi network configuration.",
    icons: [SKILL_ICONS.html, SKILL_ICONS.cpp, SKILL_ICONS.c, SKILL_ICONS.arduino],
    repoLink: PROJECT_LINKS.Repo_ESP32_WifiManager.path,
  },
  {
    title: "SmartDeviceHub",
    description: "SmartDeviceHub is an open-source platform designed to simplify the management and integration of smart home devices. It provides a centralized hub for connecting, controlling, and automating various IoT devices, enabling seamless interoperability and enhanced user experience.",
    icons: [SKILL_ICONS.csharp],
    repoLink: PROJECT_LINKS.Repo_SmartDeviceHub.path,
  },
];

export const webProjects: ProjectType[] = [
  {
    title: "SaaS Landing Page",
    description: "A sample landing page for a SaaS application",
    icons: [SKILL_ICONS.html, SKILL_ICONS.css, SKILL_ICONS.javascript],
    thumbnail: IMAGES.SaaS_Landing_Page,
    showLink: PROJECT_LINKS.Showcase_SaaS_Landing_Page.path,
    repoLink: PROJECT_LINKS.Repo_SaaS_Landing_Page.path,
  },
  {
    title: "Weather Application",
    description: "A weather application to inform people of the weather.",
    icons: [SKILL_ICONS.html, SKILL_ICONS.bootstrap],
    thumbnail: IMAGES.Weather_Application,
    showLink: PROJECT_LINKS.Showcase_Weather_Application.path,
    repoLink: PROJECT_LINKS.Repo_Weather_Application.path,
  },
  {
    title: "Discord Interface",
    description: "A ReactJS app with TailwindCSS to demonstrate skills.",
    icons: [SKILL_ICONS.html, SKILL_ICONS.javascript, SKILL_ICONS.react, SKILL_ICONS.tailwind],
    thumbnail: IMAGES.Discord_Interface,
    showLink: PROJECT_LINKS.Showcase_TailwindCSS_Tutorial.path,
    repoLink: PROJECT_LINKS.Repo_TailwindCSS_Tutorial.path,
  },
  {
    title: "Portfolio",
    description: "A portfolio website I built for a client including a custom content management system for them to customise the content on the pages of the website built on top of a LAMP stack.",
    icons: [SKILL_ICONS.html, SKILL_ICONS.css, SKILL_ICONS.javascript, SKILL_ICONS.php, SKILL_ICONS.ubuntu, SKILL_ICONS.digitalocean, SKILL_ICONS.cloudflare],
    thumbnail: IMAGES.Portfolio,
    repoLink: PROJECT_LINKS.Repo_Aidann_Portfolio.path,
  },
  {
    title: "Sketch-It",
    description: "A website providing the user with the ability to draw.",
    icons: [SKILL_ICONS.html, SKILL_ICONS.css, SKILL_ICONS.javascript],
    thumbnail: IMAGES.Sketch_It,
    showLink: PROJECT_LINKS.Showcase_Sketch_It.path,
    repoLink: PROJECT_LINKS.Repo_Sketch_It.path,
  },
  {
    title: "Social Media App",
    description: "A CRUD Application built with ReactJS & ExpressJS which allows people to create accounts and write text to post which other people can view. People can also edit or delete their posts.",
    icons: [SKILL_ICONS.html, SKILL_ICONS.javascript, SKILL_ICONS.react, SKILL_ICONS.bootstrap, SKILL_ICONS.node, SKILL_ICONS.express, SKILL_ICONS.mysql, SKILL_ICONS.git],
    thumbnail: IMAGES.Social_Media_App,
    repoLink: PROJECT_LINKS.Repo_Social_Media.path,
  },
];

export const softwareProjects: ProjectType[] = [
  {
    title: "Discord API",
    description: "An application to connect to the gateway provided by Discord.",
    icons: [SKILL_ICONS.node],
    repoLink: PROJECT_LINKS.Repo_Discord_Gateway.path,
  },
  {
    title: "JavaFish",
    description: "An application that consists of multiple types of fish swimming around an aquarium built on top of a simulation developed by a peer. Repository includes design documentation of how the application was built. Utilises SOLID, reinforcing Loose Coupling & High Cohesion",
    icons: [SKILL_ICONS.java],
    repoLink: PROJECT_LINKS.Repo_JavaFish.path,
  },
];

export const gameProjects: ProjectType[] = [
  {
    title: "The New Infirmary",
    description: "A game based on rebuilding an infirmary building. Represents many skills such as event management, storyline inclusion, audio implementations, a combat system, inventory systems, animation, etc.",
    icons: [SKILL_ICONS.unity, SKILL_ICONS.csharp],
    thumbnail: IMAGES.The_New_Infirmary,
    repoLink: PROJECT_LINKS.Repo_The_New_Infirmary.path,
  },
];
