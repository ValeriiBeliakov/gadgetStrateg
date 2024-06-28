import { Link } from "react-router-dom";
import { categories } from "../../Constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./Categories.module.scss";
import React from "react";

const Categories:React.FC = () => {
  return (
    <div className={s.container}>
      <SectionTitle title="Категории" />
      <div className={s.categories_container}>
        {categories.map((category, index) => (
          <Link key={index} to={`${category.category}`}>
            <div className={s.category}>
              <img src={category.image} alt={category.title} />
              <div className={s.name}>{category.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
