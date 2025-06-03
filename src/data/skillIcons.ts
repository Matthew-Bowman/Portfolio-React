import { IMAGES, type ImageAsset } from "./images";

export type SkillIconType = {
    label: string,
    thumbnail: ImageAsset;
};

export const rawSkillIcons = {
    html: {
        label: 'HTML 5',
        thumbnail: IMAGES.icon_html,
    },
    css: {
        label: 'CSS 3',
        thumbnail: IMAGES.icon_css,
    },
    javascript: {
        label: 'JavaScript',
        thumbnail: IMAGES.icon_javascript,
    },
    react: {
        label: 'ReactJS',
        thumbnail: IMAGES.icon_react,
    },
    bootstrap: {
        label: 'Bootstrap',
        thumbnail: IMAGES.icon_bootstrap,
    },
    tailwind: {
        label: 'TailwindCSS',
        thumbnail: IMAGES.icon_tailwind,
    },
    node: {
        label: 'NodeJS',
        thumbnail: IMAGES.icon_node,
    },
    express: {
        label: 'ExpressJS',
        thumbnail: IMAGES.icon_express,
    },
    php: {
        label: 'PHP',
        thumbnail: IMAGES.icon_php,
    },
    java: {
        label: 'Java',
        thumbnail: IMAGES.icon_java,
    },
    csharp: {
        label: 'C#',
        thumbnail: IMAGES.icon_csharp,
    },
    cpp: {
        label: 'C++',
        thumbnail: IMAGES.icon_cpp,
    },
    c: {
        label: 'C',
        thumbnail: IMAGES.icon_c,
    },
    mysql: {
        label: 'MySQL',
        thumbnail: IMAGES.icon_mysql,
    },
    git: {
        label: 'Git',
        thumbnail: IMAGES.icon_git,
    },
    github: {
        label: 'GitHub',
        thumbnail: IMAGES.icon_github,
    },
    linux: {
        label: 'Linux',
        thumbnail: IMAGES.icon_linux,
    },
    ubuntu: {
        label: 'Ubuntu',
        thumbnail: IMAGES.icon_ubuntu,
    },
    digitalocean: {
        label: 'Digital Ocean',
        thumbnail: IMAGES.icon_digitalocean,
    },
    cloudflare: {
        label: 'Cloudflare',
        thumbnail: IMAGES.icon_cloudflare,
    },
    unity: {
        label: 'Unity',
        thumbnail: IMAGES.icon_unity,
    },
    arduino: {
        label: 'Arduino',
        thumbnail: IMAGES.icon_arduino,
    },
} as const;

type SkillIconKeys = keyof typeof rawSkillIcons;

export const SKILL_ICONS: { [K in SkillIconKeys]: SkillIconType } = rawSkillIcons;