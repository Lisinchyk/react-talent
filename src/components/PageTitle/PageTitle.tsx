import "./style.scss";

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => (
  <h1 className="page__title">{title}</h1>
);
