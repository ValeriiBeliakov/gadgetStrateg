import { Search } from "lucide-react";
import s from "./Shop.module.scss";
import React, { ChangeEvent } from "react";
import { products } from "../../Constants";
import { useEffect, useState } from "react";
import ProductList from "../../ui/ProductList/ProductList";



const Shop:React.FC = () => {
  const [productsData, setProductsData] = useState(products);
  const [sortType, setSortType] = useState<string>("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleFilter = (e:ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;
    if (filterValue === "pk") {
      const filteredProducts = products.filter(
        (item) => item.category === "pk"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "phones") {
      const filteredProducts = products.filter(
        (item) => item.category === "phones"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "cookie") {
      const filteredProducts = products.filter(
        (item) => item.category === "cookie"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "watches") {
      const filteredProducts = products.filter(
        (item) => item.category === "watches"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "tv") {
      const filteredProducts = products.filter(
        (item) => item.category === "tv"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "headphones") {
      const filteredProducts = products.filter(
        (item) => item.category === "headphones"
      );
      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsData(searchProducts);
  };
  const handleSortChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
    const sortedProducts = [...productsData].sort((a, b) => {
      if (sortType === "asc") {
        return +a.price - +b.price;
      } else if (sortType === "desc") {
        return +b.price - +a.price;
      } else {
        return 0;
      }
    });
    setProductsData(sortedProducts);
  };
  return (
    <>
      <div className={s.container}>
        {/* <ProductsPage title="dd" /> */}
        <div className={s.nav_section}>
          <div className={s.filters}>
            <select onChange={handleFilter}>
              <option>Выбрать категорию</option>
              <option value="phones">смартфоны</option>
              <option value="pk">пк</option>
              <option value="headphones">наушники</option>
              <option value="watches">часы</option>
              <option value="cookie">бытовая техника</option>
            </select>
            <select onChange={handleSortChange}>
              <option>сортировать по</option>
              <option value="desc">по возрастанию</option>
              <option value="asc">по убыванию</option>
            </select>
          </div>
          <div className={s.search_box} onChange={handleSearch}>
            <input type="text" placeholder="Поиск..." />
            <span>
              <Search />
            </span>
          </div>
        </div>
        <section className={s.products_section}>
          {productsData.length === 0 ? (
            <h1 className={s.nothing}>Ничего не найдено</h1>
          ) : (
            <ProductList data={productsData} />
          )}
        </section>
      </div>
    </>
  );
};

export default Shop;
