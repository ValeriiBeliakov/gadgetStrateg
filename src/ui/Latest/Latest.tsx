import React, { useEffect, useState } from "react";
import s from "./Latest.module.scss";
import { products } from "../../Constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductList from "../ProductList/ProductList";

const Latest:React.FC = () => {
  const [data, setData] = useState(products);
  useEffect(() => {
    const filteredHitProducts = products.filter((item) => item.latest === true);
    setData(filteredHitProducts);
  }, []);
  return (
    <section className={s.latest_container}>
      <SectionTitle title="Новые" />
      <ProductList data={data} />
    </section>
  );
};

export default Latest;
