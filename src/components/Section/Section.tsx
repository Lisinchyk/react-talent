import { ReactNode } from "react";
import "./style.scss";

type SectionProps = {
  title: string;
  children: ReactNode | ReactNode[];
  icon?: ReactNode;
  onClick?: () => void;
};

export const Section = ({
  title,
  children,
  icon,
  onClick
}: SectionProps) => {
  // const padding = withoutPadding ? "" : "with-padding";
  
  return (
    <section className="section">
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
        {icon && (
          <button className="section__button" onClick={onClick}>
            {icon}
          </button>
        )}
      </div>
      {children}
    </section>
  );
};
