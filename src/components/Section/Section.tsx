import { type FC, type ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const Section: FC<SectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`pb-5 ${className}`}>
      <h2 className="display-5 fw-bold col-12 text-center">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
