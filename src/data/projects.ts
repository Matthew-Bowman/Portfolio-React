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
    repoLink: "https://github.com/Matthew-Bowman/ESP32-WifiManager",
  },
  {
    title: "SmartDeviceHub",
    description: "SmartDeviceHub is an open-source platform designed to simplify the management and integration of smart home devices. It provides a centralized hub for connecting, controlling, and automating various IoT devices, enabling seamless interoperability and enhanced user experience.",
    icons: [skillIcons.csharp],
    repoLink: "https://github.com/Matthew-Bowman/SmartDeviceHub",
  },
];

export const webProjects: ProjectType[] = [
  {
    title: "SaaS Landing Page",
    description: "A sample landing page for a SaaS application",
    icons: [skillIcons.html, skillIcons.css, skillIcons.javascript],
    thumbnail: "/Images/Thumbnails/SaaS Landing Page.png",
    thumbnailAlt: "Image of a calculator",
    showLink: "https://matthew-bowman.github.io/SaaS-Landing-Page/",
    repoLink: "https://github.com/Matthew-Bowman/SaaS-Landing-Page/",
  },
  {
    title: "Weather Application",
    description: "A weather application to inform people of the weather.",
    icons: [skillIcons.html, skillIcons.bootstrap],
    thumbnail: "/Images/Thumbnails/Weather Application.png",
    thumbnailAlt: "Image of a calculator",
    showLink: "https://matthew-bowman.github.io/Weather-Application/",
    repoLink: "https://github.com/Matthew-Bowman/Weather-Application/",
  },
  {
    title: "Discord Interface",
    description: "A ReactJS app with TailwindCSS to demonstrate skills.",
    icons: [skillIcons.html, skillIcons.javascript, skillIcons.react, skillIcons.tailwind],
    thumbnail: "/Images/Thumbnails/Discord Design.png",
    thumbnailAlt: "Image of a calculator",
    showLink: "https://matthew-bowman.github.io/TailwindCSS-Tutorial/",
    repoLink: "https://github.com/Matthew-Bowman/TailwindCSS-Tutorial/",
  },
  {
    title: "Portfolio",
    description: "A portfolio website I built for a client including a custom content management system for them to customise the content on the pages of the website built on top of a LAMP stack.",
    icons: [skillIcons.html, skillIcons.css, skillIcons.javascript, skillIcons.php, skillIcons.ubuntu, skillIcons.digitalocean, skillIcons.cloudflare],
    thumbnail: "/Images/Thumbnails/Aidan Portfolio.png",
    thumbnailAlt: "Image of a calculator",
    repoLink: "https://github.com/Matthew-Bowman/Aidann-Portfolio/",
  },
  {
    title: "Sketch-It",
    description: "A website providing the user with the ability to draw.",
    icons: [skillIcons.html, skillIcons.css, skillIcons.javascript],
    thumbnail: "/Images/Thumbnails/Sketch-It.png",
    thumbnailAlt: "Image of a calculator",
    showLink: "https://matthew-bowman.github.io/Sketch-It/",
    repoLink: "https://github.com/Matthew-Bowman/Sketch-It/",
  },
  {
    title: "Social Media App",
    description: "A CRUD Application built with ReactJS & ExpressJS which allows people to create accounts and write text to post which other people can view. People can also edit or delete their posts.",
    icons: [skillIcons.html, skillIcons.javascript, skillIcons.react, skillIcons.bootstrap, skillIcons.node, skillIcons.express, skillIcons.mysql, skillIcons.git],
    thumbnail: "/Images/Thumbnails/Social Media App.png",
    thumbnailAlt: "Image of the Social Media App",
    repoLink: "https://github.com/Matthew-Bowman/Social-Media/",
  },
];

export const softwareProjects: ProjectType[] = [
  {
    title: "Discord API",
    description: "An application to connect to the gateway provided by Discord.",
    icons: [skillIcons.node],
    repoLink: "https://github.com/Matthew-Bowman/Discord-Gateway/",
  },
  {
    title: "JavaFish",
    description: "An application that consists of multiple types of fish swimming around an aquarium built on top of a simulation developed by a peer. Repository includes design documentation of how the application was built. Utilises SOLID, reinforcing Loose Coupling & High Cohesion",
    icons: [skillIcons.java],
    repoLink: "https://github.com/Matthew-Bowman/JavaFish/",
  },
];

export const gameProjects: ProjectType[] = [
  {
    title: "The New Infirmary",
    description: "A game based on rebuilding an infirmary building. Represents many skills such as event management, storyline inclusion, audio implementations, a combat system, inventory systems, animation, etc.",
    icons: [skillIcons.unity, skillIcons.csharp],
    thumbnail: "/Images/Thumbnails/Level One.png",
    repoLink: "https://github.com/Matthew-Bowman/The-New-Infirmary/",
  },
];
