import { ReactNode } from "react";
import { Header } from "../Header/Header.tsx";
import "./style.scss";

type LayoutProps = {
  children: ReactNode | ReactNode[];
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        {children}
      </main>
    </div>
  );
};
