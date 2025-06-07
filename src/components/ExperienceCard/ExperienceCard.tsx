import { type FC } from "react";

type ExperienceCardProps = {
  title: string;
  period: string;
  description: string;
};

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  period,
  description,
}) => (
  <article className="shadow-md mb-6 rounded-md border border-gray-200 bg-white">
    <header className="px-6 py-4 border-b border-gray-300">
      <h3 className="font-bold m-0 text-lg">{title}</h3>
      <time className="font-semibold m-0 block text-gray-600">{period}</time>
    </header>
    <section className="p-6">
      <p className="text-gray-800">{description}</p>
    </section>
  </article>
);

export default ExperienceCard;
