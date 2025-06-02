import { PROJECT_LINKS } from "./routes";
import { skillIcons, type SkillIconType } from "./skillIcons";

export type ProjectType = {
  title: string;
  description: string;
  icons: SkillIconType[];
  thumbnail?: string;       // optional image URL
  thumbnailAlt?: string;    // optional image alt text
  showLink?: string;        // optional "Show Me" button link
  repoLink?: string;        // optional "Repository" button link
};

export const currentProjects: ProjectType[] = [
  {
    title: "ESP32-WifiManager",
    description: "A fork of the WiFiManager library tailored for ESP32, offering a streamlined captive portal for easy and dynamic Wi-Fi network configuration.",
    icons: [skillIcons.html, skillIcons.cpp, skillIcons.c, skillIcons.arduino],
    repoLink: PROJECT_LINKS.Repo_ESP32_WifiManager.path,
  },
  {
    title: "SmartDeviceHub",
    description: "SmartDeviceHub is an open-source platform designed to simplify the management and integration of smart home devices. It provides a centralized hub for connecting, controlling, and automating various IoT devices, enabling seamless interoperability and enhanced user experience.",
    icons: [skillIcons.csharp],
    repoLink: PROJECT_LINKS.Repo_SmartDeviceHub.path,
  },
];

export const webProjects: ProjectType[] = [
  {
    title: "SaaS Landing Page",
    description: "A sample landing page for a SaaS application",
    icons: [skillIcons.html, skillIcons.css, skillIcons.javascript],
    thumbnail: "/Images/Thumbnails/SaaS Landing Page.png",
    thumbnailAlt: "Image of a SaaS Landing Page",
    showLink: PROJECT_LINKS.Showcase_SaaS_Landing_Page.path,
    repoLink: PROJECT_LINKS.Repo_SaaS_Landing_Page.path,
  },
  {
    title: "Weather Application",
    description: "A weather application to inform people of the weather.",
    icons: [skillIcons.html, skillIcons.bootstrap],
    thumbnail: "/Images/Thumbnails/Weather Application.png",
    thumbnailAlt: "Image of a Weather Application",
    showLink: PROJECT_LINKS.Showcase_Weather_Application.path,
    repoLink: PROJECT_LINKS.Repo_Weather_Application.path,
  },
  {
    title: "Discord Interface",
    description: "A ReactJS app with TailwindCSS to demonstrate skills.",
    icons: [skillIcons.html, skillIcons.javascript, skillIcons.react, skillIcons.tailwind],
    thumbnail: "/Images/Thumbnails/Discord Design.png",
    thumbnailAlt: "Image of a custom Discord Interface",
    showLink: PROJECT_LINKS.Showcase_TailwindCSS_Tutorial.path,
    repoLink: PROJECT_LINKS.Repo_TailwindCSS_Tutorial.path,
  },
  {
    title: "Portfolio",
    description: "A portfolio website I built for a client including a custom content management system for them to customise the content on the pages of the website built on top of a LAMP stack.",
    icons: [skillIcons.html, skillIcons.css, skillIcons.javascript, skillIcons.php, skillIcons.ubuntu, skillIcons.digitalocean, skillIcons.cloudflare],
    thumbnail: "/Images/Thumbnails/Aidan Portfolio.png",
    thumbnailAlt: "Image of the Portfolio website",
    repoLink: PROJECT_LINKS.Repo_Aidann_Portfolio.path,
  },
  {
    title: "Sketch-It",
    description: "A website providing the user with the ability to draw.",
    icons: [skillIcons.html, skillIcons.css, skillIcons.javascript],
    thumbnail: "/Images/Thumbnails/Sketch-It.png",
    thumbnailAlt: "Image of the Sketch-It website",
    showLink: PROJECT_LINKS.Showcase_Sketch_It.path,
    repoLink: PROJECT_LINKS.Repo_Sketch_It.path,
  },
  {
    title: "Social Media App",
    description: "A CRUD Application built with ReactJS & ExpressJS which allows people to create accounts and write text to post which other people can view. People can also edit or delete their posts.",
    icons: [skillIcons.html, skillIcons.javascript, skillIcons.react, skillIcons.bootstrap, skillIcons.node, skillIcons.express, skillIcons.mysql, skillIcons.git],
    thumbnail: "/Images/Thumbnails/Social Media App.png",
    thumbnailAlt: "Image of the Social Media App",
    repoLink: PROJECT_LINKS.Repo_Social_Media.path,
  },
];

export const softwareProjects: ProjectType[] = [
  {
    title: "Discord API",
    description: "An application to connect to the gateway provided by Discord.",
    icons: [skillIcons.node],
    repoLink: PROJECT_LINKS.Repo_Discord_Gateway.path,
  },
  {
    title: "JavaFish",
    description: "An application that consists of multiple types of fish swimming around an aquarium built on top of a simulation developed by a peer. Repository includes design documentation of how the application was built. Utilises SOLID, reinforcing Loose Coupling & High Cohesion",
    icons: [skillIcons.java],
    repoLink: PROJECT_LINKS.Repo_JavaFish.path,
  },
];

export const gameProjects: ProjectType[] = [
  {
    title: "The New Infirmary",
    description: "A game based on rebuilding an infirmary building. Represents many skills such as event management, storyline inclusion, audio implementations, a combat system, inventory systems, animation, etc.",
    icons: [skillIcons.unity, skillIcons.csharp],
    thumbnail: "/Images/Thumbnails/Level One.png",
    repoLink: PROJECT_LINKS.Repo_The_New_Infirmary.path,
  },
];
