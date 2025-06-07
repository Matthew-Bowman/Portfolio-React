import {type FC} from 'react'
import SkillCategory from '../../components/SkillCategory/SkillCategory';
import Section from '../../components/Section/Section';
import { SKILL_CATEGORIES } from '../../data/skillCategories';

const SkillsSection: FC = () => {
    return (
        <Section title="Skills">
            <div className="bg-white col-10 col-xl-6 d-flex flex-wrap gap-2 mx-auto p-4 justify-content-start shadow">
                {SKILL_CATEGORIES.map((category) => (
                    <SkillCategory key={category.title} {...category} />
                ))}
            </div>
        </Section>
    );
};

export default SkillsSection;
