import React from "react";
import Card from "../Card/Card";
import s from "./ProductList.module.scss";
import { Product } from "../../types/types";



type Data = {
  data : Product[] | []
}
const ProductList:React.FC<Data> = ({ data }) => {
  return (
    <div className={s.container}>
      {data.map((item:Product) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
