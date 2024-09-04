import s from "./Favorites.module.scss";
import Card from "../../ui/Card/Card";
import BackButton from "../../ui/BackButton/BackButton";
import React, { useEffect } from "react";
import { useCustomSelector } from "../../custom-hooks/store";




const Favorites:React.FC = () => {
  const favoriteItems = useCustomSelector((state) => state.favorites.favoriteItems);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={s.container}>
      <BackButton />
      <h1 className={s.title}>Избранное</h1>
      <hr />
      <div className={s.list_of_favorites}>
        {favoriteItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Favorites;
