import React from 'react';
import SkillIcon from '../SkillIcon/SkillIcon';

type SkillCategoryProps = {
  title: string;
  skills: {
    src: string;
    alt: string;
    label: string;
  }[];
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <>
      <h3 className="fw-bold m-0 col-12 text-start">{title}</h3>
      {skills.map((skill) => (
        <SkillIcon key={skill.label} {...skill} />
      ))}
      <div className="m-0 col-12" />
    </>
  );
};

export default SkillCategory;
