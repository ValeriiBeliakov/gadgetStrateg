import { advantages } from "../../Constants";
import s from "./Advantages.module.scss";
import Translate from "../Translate/Translate";
import React from "react";

const Advantages:React.FC = () => {
  return (
    <div className={s.container}>
      <Translate>
        {advantages.map((advantage, index) => (
          <div key={index} className={s.advantage}>
            <img src={advantage.image} className={s.icon} />
            <div className={s.title}>{advantage.title}</div>
          </div>
        ))}
      </Translate>
    </div>
  );
};

export default Advantages;
