import s from "./Offer.module.scss";
import iphone from "../../assets/iphone15pro_max.svg";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Offer: React.FC = () => {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

  let interval: number;
  const countDown = (): void => {
    const destination = new Date("November 27, 2024").getTime();
    interval = window.setInterval((): void => {
      const newDate = new Date().getTime();
      const distinction = destination - newDate;
      const days = Math.floor(distinction / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distinction % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distinction % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((distinction % (1000 * 60)) / 1000);
      if (destination < 0) clearInterval(interval);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  });
  return (
    <section className={s.container}>
      <div className={s.content_block}>
        <div>
          <h2 className={s.title}>Ограниченное предложение</h2>
          <div className={s.timer_block}>
            <div className={s.block}>
              <div className={s.time_block}>
                <h2 className={s.numbers}>{days}</h2>
                <h5 className={s.text}>дней</h5>
              </div>
              <span className={s.colon}>:</span>
            </div>
            <div className={s.block}>
              <div className={s.time_block}>
                <h2 className={s.numbers}>{hours}</h2>
                <h5 className={s.text}>часов</h5>
              </div>
              <span className={s.colon}>:</span>
            </div>
            <div className={s.block}>
              <div className={s.time_block}>
                <h2 className={s.numbers}>{minutes}</h2>
                <h5 className={s.text}>минут</h5>
              </div>
              <span className={s.colon}>:</span>
            </div>
            <div className={s.block}>
              <div className={s.time_block}>
                <h2 className={s.numbers}>{seconds}</h2>
                <h5 className={s.text}>секунд</h5>
              </div>
            </div>
          </div>
          <button type="button" className={s.button}>
            <NavLink to={"/shop/18"}>Перейти к товару</NavLink>
          </button>
        </div>
        <div className={s.product_block}>
          <img src={iphone} alt="iphone 14 pro max" />
          <span className={s.sale}>-20%</span>
        </div>
      </div>
    </section>
  );
};

export default Offer;
