export type ImageAsset = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export const rawImages = {
    /*-------*/
    /* Icons */
    /*-------*/
    icon_html: { src: '/Images/Icons/HTML.svg', alt: 'HTML5 Logo', width: 64, height: 64 },
    icon_css: { src: '/Images/Icons/CSS.svg', alt: 'CSS3 Logo', width: 64, height: 64 },
    icon_javascript: { src: '/Images/Icons/JavaScript.svg', alt: 'JavaScript Logo', width: 64, height: 64 },
    icon_react: { src: '/Images/Icons/React-Dark.svg', alt: 'ReactJS Logo', width: 64, height: 64 },
    icon_bootstrap: { src: '/Images/Icons/Bootstrap.svg', alt: 'Bootstrap Logo', width: 64, height: 64 },
    icon_tailwind: { src: '/Images/Icons/TailwindCSS-Dark.svg', alt: 'TailwindCSS Logo', width: 64, height: 64 },

    icon_node: { src: '/Images/Icons/NodeJS-Dark.svg', alt: 'NodeJS Logo', width: 64, height: 64 },
    icon_express: { src: '/Images/Icons/ExpressJS-Dark.svg', alt: 'ExpressJS Logo', width: 64, height: 64 },
    icon_php: { src: '/Images/Icons/PHP-Dark.svg', alt: 'PHP Logo', width: 64, height: 64 },
    icon_java: { src: '/Images/Icons/Java-Dark.svg', alt: 'Java Logo', width: 64, height: 64 },
    icon_csharp: { src: '/Images/Icons/CS.svg', alt: 'C# Logo', width: 64, height: 64 },
    icon_cpp: { src: '/Images/Icons/CPP.svg', alt: 'C++ Logo', width: 64, height: 64 },
    icon_c: { src: '/Images/Icons/C.svg', alt: 'C Logo', width: 64, height: 64 },
    icon_mysql: { src: '/Images/Icons/MySQL-Dark.svg', alt: 'MySQL Logo', width: 64, height: 64 },

    icon_git: { src: '/Images/Icons/Git.svg', alt: 'Git Logo', width: 64, height: 64 },
    icon_github: { src: '/Images/Icons/Github-Dark.svg', alt: 'GitHub Logo', width: 64, height: 64 },
    icon_linux: { src: '/Images/Icons/Linux-Dark.svg', alt: 'Linux Logo', width: 64, height: 64 },
    icon_ubuntu: { src: '/Images/Icons/Ubuntu.svg', alt: 'Ubuntu Logo', width: 64, height: 64 },
    icon_digitalocean: { src: '/Images/Icons/Digital-Ocean.svg', alt: 'Digital Ocean Logo', width: 64, height: 64 },
    icon_cloudflare: { src: '/Images/Icons/Cloudflare-Dark.svg', alt: 'Cloudflare Logo', width: 64, height: 64 },

    icon_unity: { src: '/Images/Icons/Unity-Dark.svg', alt: 'Unity Logo', width: 64, height: 64 },
    icon_arduino: { src: '/Images/Icons/Arduino.svg', alt: 'Arduino Logo', width: 64, height: 64 },





    /*--------*/
    /* Images */
    /*--------*/

    SaaS_Landing_Page: {
        src: "/Images/Thumbnails/SaaS Landing Page.webp",
        alt: "Image of a SaaS Landing Page",
        width: 1879,
        height: 1034,
    },

    Weather_Application: {
        src: "/Images/Thumbnails/Weather Application.webp",
        alt: "Image of a Weather Application",
        width: 1920,
        height: 973,
    },

    Discord_Interface: {
        src: "/Images/Thumbnails/Discord Design.webp",
        alt: "Image of a custom Discord Interface",
        width: 1920,
        height: 973,
    },

    Portfolio: {
        src: "/Images/Thumbnails/Aidan Portfolio.webp",
        alt: "Image of the Portfolio website",
        width: 1920,
        height: 973,
    },

    Sketch_It: {
        src: "/Images/Thumbnails/Sketch-It.webp",
        alt: "Image of the Sketch-It website",
        width: 1600,
        height: 900,
    },

    Social_Media_App: {
        src: "/Images/Thumbnails/Social Media App.webp",
        alt: "Image of the Social Media App",
        width: 1920,
        height: 973,
    },

    The_New_Infirmary: {
        src: "/Images/Thumbnails/Level One.webp",
        alt: "Image of the game Level One",
        width: 602,
        height: 236,
    },
} as const;

// Derive keys automatically
type ImageKeys = keyof typeof rawImages;

// Use mapped type to ensure all values match ImageAsset shape exactly
export const IMAGES: { [K in ImageKeys]: ImageAsset } = rawImages;