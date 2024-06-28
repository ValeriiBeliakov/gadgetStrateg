import { companies } from "../../Constants";
import s from "./Companies.module.scss";
import Translate from "../Translate/Translate";
import React from "react";

const Companies:React.FC = () => {
  return (
    <Translate>
      {companies.map((company) => (
        <div key={company.title} className={s.company_container}>
          <img src={company.imgUrl}  className={s.img} />
        </div>
      ))}
    </Translate>
  );
};

export default Companies;
