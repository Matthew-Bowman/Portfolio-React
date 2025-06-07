import { type FC, Fragment } from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import Section from "../../components/Section/Section";

const experiences = [
  {
    title: "University of Worcester",
    period: "September 2021 - June 2024",
    description:
      "At the University of Worcester, I have pursued a comprehensive Computing degree, developing both theoretical knowledge and practical skills. My studies involved hands-on projects, collaborative teamwork, and research, equipping me with a strong foundation to tackle real-world challenges in technology and software development.",
  },
  {
    title: "Huws Gray",
    period: "June 2024 - Now",
    description:
      "At Huws Gray, I have contributed as both a web developer and an app developer, designing and implementing solutions to improve digital experiences and streamline business processes. My role involves full-stack development, collaborating across teams to deliver efficient and user-friendly applications.",
  },
];

const ExperienceSection: FC = () => {
  return (
    <Section title="Professional Experience">
      <div className="container mx-auto mt-12 flex flex-col items-center">
        <div className="w-full md:w-2/3 flex flex-col items-center">
          {experiences.map((exp, index) => (
            <Fragment key={exp.title}>
              <ExperienceCard {...exp} />
              {index < experiences.length - 1 && (
                <div
                  className="my-8 mx-auto bg-primary rounded"
                  style={{ height: "64px", width: "3px" }}
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
