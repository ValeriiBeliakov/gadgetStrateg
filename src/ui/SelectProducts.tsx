import React from "react";
import { Link } from "react-router-dom";

const SelectProducts:React.FC = () => {
  return (
    <ul>
      <li>
        <Link to={`/main/phones`}>Смартфоны</Link>
      </li>
      <li>
        <Link to={`/main/pk`}>Пк</Link>
      </li>
      <li>
        <Link to={`/main/games`}>Игры</Link>
      </li>
      <li>
        <Link to={`/main/watches`}>Часы</Link>
      </li>
    </ul>
  );
};

export default SelectProducts;
