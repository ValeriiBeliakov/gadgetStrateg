import s from "./Cart.module.scss";
import delivery_icon from "../../assets/delivery-icon.svg";
import CartItem from "../../ui/CartItem/CartItem";
import { Link } from "react-router-dom";
import BackButton from "../../ui/BackButton/BackButton";
import React, { useEffect } from "react";
import { useCustomSelector } from "../../custom-hooks/store";
const Cart:React.FC = () => {
  const currentItems = useCustomSelector((state) => state.cart.cartItems);
  const totalAmount = useCustomSelector((state) => state.cart.totalAmount);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={s.container}>
      <BackButton />
      <div className={s.block}>
        <h1 className={s.title}>Корзина</h1>
     
        <div className={s.advertisement}>
          <img src={delivery_icon} />
          <div>Быстрая доставка | самовывоз</div>
        
        </div>
        <div className={s.container_form}>
          <table className={s.product_form}>
            <thead className={s.categories}>
              <th>Товар</th>
              <th>Сумма</th>
              <th>кол-во</th>
              <th>Всего</th>
              <th>удалить</th>
            </thead>
            <tbody className={s.products}>
              <tr>
                {currentItems.length === 0 ? (
                  <h2 className={s.nothing}>Нет товаров в корзине</h2>
                ) : (
                  currentItems.map((item, index) => (
                    <CartItem item={item} key={index} />
                  ))
                )}
              </tr>
            </tbody>
          </table>
        </div>
       
        <div className={s.buy_block}>
          <div className={s.buy_block_content}>
            <div>Всего {totalAmount} ₽</div>
            <button className={s.buy_button}>
              <Link to="/checkout">Оплата</Link>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Cart;
