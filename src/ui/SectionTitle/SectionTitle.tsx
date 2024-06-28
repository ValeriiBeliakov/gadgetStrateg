import React from "react";
import s from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title: string;
}

const SectionTitle:React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

export default SectionTitle;
