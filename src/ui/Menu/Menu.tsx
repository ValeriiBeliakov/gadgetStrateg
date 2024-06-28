import React, { useEffect, useRef, useState } from "react";
import { categories } from "../../Constants";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.svg";
import s from "./Menu.module.scss";

const Menu:React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = ():void => {
    setActiveMenu(!activeMenu);
  };
  const handleClickOutside = (e:MouseEvent)=>{
   if(menuRef.current && !menuRef.current.contains(e.target as Node)){
    setActiveMenu(false);
   }
  }
  useEffect(()=>{
    if(activeMenu){
      document.addEventListener('click',handleClickOutside)
    } else{
      document.removeEventListener('click',handleClickOutside)
    }
    return ()=>{
      document.removeEventListener("click",handleClickOutside)
    }
  },[activeMenu])
  return (
    <div ref={menuRef}>
      <img src={menu} alt="Меню" onClick={toggleMenu} />

      {activeMenu && (
        <div className={s.menu_list}>
          <ul className={s.list}>
            <li>
              <Link to={"/shop"}>все категории</Link>
            </li>
            {categories.map((category) => (
              <li key={category.title}>
                <Link to={`main/${category.category}`}>{category.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
