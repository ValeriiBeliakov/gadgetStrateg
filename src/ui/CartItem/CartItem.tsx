
import s from "./CartItem.module.scss";
import close from "../../assets/close.svg";
import { motion } from "framer-motion";

import UpdateItemQuantity from "../UpdateQuantity/UpdateItemQuantity";
import {
  cartActions,
  getCurrentQuantityById,
} from "../../redux/slices/CartSlice";
import React from "react";
import { useCustomDispatch, useCustomSelector } from "../../custom-hooks/store";
import { Link } from "react-router-dom";


interface Item {
   productName:string,
   price:number, 
   imgUrl:string, 
   id:number, 
   totalPrice:number
}
interface CartItem{
  item:Item
}
const CartItem:React.FC<CartItem> = ({ item })=> {
  const dispatch = useCustomDispatch();
  const { productName, price, imgUrl,id, totalPrice } = item;
  const currentQuantity = useCustomSelector(getCurrentQuantityById(id));

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
 
  return (
    <>
      <td className={s.el}>
        <Link to={`/shop/${item.id}`} className={s.product}>
          <img src={imgUrl} className={s.img} />
          <h1>{productName}</h1>
        </Link>
        <p className={s.price}>{price} ₽</p>
        <div className={s.quantity_block}>
          <UpdateItemQuantity id={item.id} currentQuantity={currentQuantity} />
        </div>
        <p className={s.total}>{totalPrice} ₽</p>
        <motion.div
          onClick={deleteItem}
          className={s.delete}
          whileTap={{ scale: 0.9 }}
        >
          <img src={close} />
        </motion.div>
      </td>
    </>
  );
}

export default CartItem;
