// data/skillIcons.ts
export const skillIcons = {
    html: { src: '/Images/Icons/HTML.svg', alt: 'HTML5 Logo', label: 'HTML 5' },
    css: { src: '/Images/Icons/CSS.svg', alt: 'CSS3 Logo', label: 'CSS 3' },
    javascript: { src: '/Images/Icons/JavaScript.svg', alt: 'JavaScript Logo', label: 'JavaScript' },
    react: { src: '/Images/Icons/React-Dark.svg', alt: 'ReactJS Logo', label: 'ReactJS' },
    bootstrap: { src: '/Images/Icons/Bootstrap.svg', alt: 'Bootstrap Logo', label: 'Bootstrap' },
    tailwind: { src: '/Images/Icons/TailwindCSS-Dark.svg', alt: 'TailwindCSS Logo', label: 'TailwindCSS' },

    node: { src: '/Images/Icons/NodeJS-Dark.svg', alt: 'NodeJS Logo', label: 'NodeJS' },
    express: { src: '/Images/Icons/ExpressJS-Dark.svg', alt: 'ExpressJS Logo', label: 'ExpressJS' },
    php: { src: '/Images/Icons/PHP-Dark.svg', alt: 'PHP Logo', label: 'PHP' },
    java: { src: '/Images/Icons/Java-Dark.svg', alt: 'Java Logo', label: 'Java' },
    csharp: { src: '/Images/Icons/CS.svg', alt: 'C# Logo', label: 'C#' },
    cpp: { src: '/Images/Icons/CPP.svg', alt: 'C++ Logo', label: 'C++' },
    c: { src: '/Images/Icons/C.svg', alt: 'C Logo', label: 'C' },
    mysql: { src: '/Images/Icons/MySQL-Dark.svg', alt: 'MySQL Logo', label: 'MySQL' },

    git: { src: '/Images/Icons/Git.svg', alt: 'Git Logo', label: 'Git' },
    github: { src: '/Images/Icons/Github-Dark.svg', alt: 'GitHub Logo', label: 'GitHub' },
    linux: { src: '/Images/Icons/Linux-Dark.svg', alt: 'Linux Logo', label: 'Linux' },
    ubuntu: { src: '/Images/Icons/Ubuntu.svg', alt: 'Ubuntu Logo', label: 'Ubuntu' },
    digitalocean: { src: '/Images/Icons/Digital-Ocean.svg', alt: 'Digital Ocean Logo', label: 'Digital Ocean' },
    cloudflare: { src: '/Images/Icons/Cloudflare-Dark.svg', alt: 'Cloudflare Logo', label: 'Cloudflare' },

    unity: { src: '/Images/Icons/Unity-Dark.svg', alt: 'Unity Logo', label: 'Unity' },
    arduino: { src: '/Images/Icons/Arduino.svg', alt: 'Arduino Logo', label: 'Arduino' },
} as const;

// Get the type of skillIcons first
type SkillIcons = typeof skillIcons;

// Then get the union type of all icon objects:
export type SkillIconType = SkillIcons[keyof SkillIcons];