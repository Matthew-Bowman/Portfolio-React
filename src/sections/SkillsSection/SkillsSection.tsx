import React from 'react';
import SkillCategory from '../../components/SkillCategory/SkillCategory';
import Section from '../../components/Section/Section';
import { skillIcons } from '../../data/skillIcons';

const SkillsSection: React.FC = () => {
    const categories = [
        {
            title: 'Frontend',
            skills: [
                skillIcons.html,
                skillIcons.css,
                skillIcons.javascript,
                skillIcons.react,
                skillIcons.bootstrap,
                skillIcons.tailwind,
            ],
        },
        {
            title: 'Backend',
            skills: [
                skillIcons.node,
                skillIcons.express,
                skillIcons.php,
                skillIcons.java,
                skillIcons.csharp,
                skillIcons.cpp,
                skillIcons.c,
                skillIcons.mysql,
            ],
        },
        {
            title: 'DevOps',
            skills: [
                skillIcons.git,
                skillIcons.github,
                skillIcons.linux,
                skillIcons.ubuntu,
                skillIcons.digitalocean,
                skillIcons.cloudflare,
            ],
        },
        {
            title: 'Miscellaneous',
            skills: [
                skillIcons.unity,
                skillIcons.arduino
            ],
        },
    ];

    return (
        <Section title="Skills">
            <div className="bg-white col-10 col-xl-6 d-flex flex-wrap gap-2 mx-auto p-4 justify-content-start shadow">
                {categories.map((category) => (
                    <SkillCategory key={category.title} {...category} />
                ))}
            </div>
        </Section>
    );
};

export default SkillsSection;
