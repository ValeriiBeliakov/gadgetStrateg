import React from "react";
import Advantages from "../../ui/Advantages/Advantages";
import Categories from "../../ui/Categories/Categories";
import Companies from "../../ui/Companies/Companies";
import Latest from "../../ui/Latest/Latest";
import Offer from "../../ui/Offer/Offer";
import ProductHitList from "../../ui/ProductHitCard/ProductHitList";
import Title from "../../ui/Title";
import s from "./Home.module.scss";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

const Home:React.FC = () => {
  return (
    <div className={s.container}>
      <Title title="Главная" />
      <Advantages />
      <Categories />
      <ProductHitList />
      <Offer />
      <Latest />
      <div className={s.title}>
        <SectionTitle title="Компании" />
      </div>
      <Companies />
    </div>
  );
};

export default Home;
