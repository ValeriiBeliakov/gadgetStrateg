import { products } from "../../Constants";
import React, { useState } from "react";
import { useEffect } from "react";

import s from "./ProductHitList.module.scss";
import ProductList from "../ProductList/ProductList";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProductHitList:React.FC = () => {
  const [data, setData] = useState(products);
  useEffect(() => {
    const filteredHitProducts = products.filter((item) => item.hit === true);
    setData(filteredHitProducts);
  }, []);
  return (
    <section className={s.hits_container}>
      <SectionTitle title="Хиты продаж" />
      <ProductList data={data} />
    </section>
  );
};

export default ProductHitList;
