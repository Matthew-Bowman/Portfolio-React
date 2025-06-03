// skillCategories.ts
import { SKILL_ICONS } from './skillIcons'; // adjust path accordingly
import type { SkillIconType } from './skillIcons';

export type SkillCategory = {
    title: string;
    skills: SkillIconType[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Frontend',
        skills: [
            SKILL_ICONS.html,
            SKILL_ICONS.css,
            SKILL_ICONS.javascript,
            SKILL_ICONS.react,
            SKILL_ICONS.bootstrap,
            SKILL_ICONS.tailwind,
        ],
    },
    {
        title: 'Backend',
        skills: [
            SKILL_ICONS.node,
            SKILL_ICONS.express,
            SKILL_ICONS.php,
            SKILL_ICONS.java,
            SKILL_ICONS.csharp,
            SKILL_ICONS.cpp,
            SKILL_ICONS.c,
            SKILL_ICONS.mysql,
        ],
    },
    {
        title: 'DevOps',
        skills: [
            SKILL_ICONS.git,
            SKILL_ICONS.github,
            SKILL_ICONS.linux,
            SKILL_ICONS.ubuntu,
            SKILL_ICONS.digitalocean,
            SKILL_ICONS.cloudflare,
        ],
    },
    {
        title: 'Miscellaneous',
        skills: [
            SKILL_ICONS.unity,
            SKILL_ICONS.arduino,
        ],
    },
];