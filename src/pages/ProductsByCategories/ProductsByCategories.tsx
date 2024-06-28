import { useParams } from "react-router";
import s from "./ProductsByCategories.module.scss";
import { products } from "../../Constants";
import React, { useEffect } from "react";
import ProductList from "../../ui/ProductList/ProductList";

const ProductsByCategories:React.FC = () => {
  const { category } = useParams<string>();
  const sortProducts = products.filter((item) => item.category === category);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={s.container}>
      {sortProducts.length > 0 ? (
        <div className={s.list}>
          <ProductList data={sortProducts} />
        </div>
      ) : (
        <div className={s.warning}>
          Товары категории отсутствуют или закончились
        </div>
      )}
    </section>
  );
};

export default ProductsByCategories;
