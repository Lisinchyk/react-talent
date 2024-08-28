import { ReactNode } from "react";
import "./style.scss";

type SectionProps = {
  title: string;
  children: ReactNode | ReactNode[];
  headerElement?: ReactNode;
};

export const Section = ({
  title,
  children,
  headerElement
}: SectionProps) => {
  return (
    <section className="section">
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
        {headerElement && <div className="section__element">{headerElement}</div>}
      </div>
      {children}
    </section>
  );
};
