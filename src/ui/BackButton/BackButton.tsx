import { useNavigate } from "react-router";
import s from "./BackButton.module.scss";
import { ArrowBigLeft } from "lucide-react";
import React from "react";

const BackButton:React.FC = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };
  return (
    <h2 className={s.back} onClick={navigateToBack}>
      <ArrowBigLeft />
      вернуться на предыдущую страницу
    </h2>
  );
};

export default BackButton;
