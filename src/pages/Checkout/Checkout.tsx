
import s from "./Checkout.module.scss";
import { useCustomSelector } from "../../custom-hooks/store";
import React from "react";
const Checkout:React.FC = () => {
  const totalQty = useCustomSelector((state) => state.cart.totalQuantity);
  const totalPrice = useCustomSelector((state) => state.cart.totalAmount);
  return (
    <div>
      <div className={s.container}>
        <div className={s.block_information}>
          <h1>Информация по доставке</h1>
          <form className={s.form}>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Телефон" />
            <input type="text" placeholder="город" />
            <input type="text" placeholder="улица" />
          </form>
        </div>
        <div className={s.checkout_cart}>
          <h6>
            Количество товаров: <span>{totalQty}</span>
          </h6>

          <h6>
            Доставка:
            <br />
            Бесплатная доставка <span>0 ₽</span>
          </h6>
          {/* <h6>
            Бесплатная доставка: <span>0</span>
          </h6> */}
          <h1>
            Общая цена: <span>{totalPrice} ₽</span>
          </h1>
          <button className={s.button_delivery}>Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
