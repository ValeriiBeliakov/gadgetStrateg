import price from "./assets/advantages/box.svg";
import delivery from "./assets/advantages/car.svg";
import insurance from "./assets/advantages/insurance.svg";
import guarentee from "./assets/advantages/guarantee.svg";
import credit from "./assets/advantages/credit-card.svg";
import computers from "./assets/categories/computers.svg";
import music from "./assets/categories/music.svg";
import phones from "./assets/categories/phones.svg";
import tablets from "./assets/categories/tablets.svg";
import tv from "./assets/categories/tv.svg";
import ps5 from "./assets/Card/images/ps5.jpg";
import tv2 from "./assets/Card/images/tv.jpg";
import keyboard from "./assets/Card/images/keyboard.jpg";
import oppo from "./assets/Card/images/oppo1.jpg";
import watch8 from "./assets/Card/images/watch8.jpg";
import realme12pro from "./assets/Card/images/realme_12pro.jpg";
import honor from "./assets/Card/images/honor.jpg";
import blender from "./assets/Card/images/blender.jpg";
import fan from "./assets/Card/images/fan.jpg";
import monitor_huawei from "./assets/Card/images/monitor_huawei.jpg";
import monitor_gamer from "./assets/Card/images/monitor_game.jpg";
import samsung from "./assets/companies/samsung.svg";
import honorc from "./assets/companies/honor.svg";
import apple from "./assets/companies/apple.svg";
import xiaomi from "./assets/companies/xiaomi.svg";
import playstation from "./assets/companies/playstation.svg";
import tefal from "./assets/companies/tefal.svg";
import asko from "./assets/companies/asko.svg";
import ndero from "./assets/companies/ndero.svg";
import philips from "./assets/companies/philips.svg";
import realme10pro from "./assets/Card/images/realme_10pro.jpg";
import samsungs from "./assets/Card/images/samsungs.jpg";
import watch7 from "./assets/Card/images/watch7.jpg";
import xiaomi_mi_pad from "./assets/Card/images/xiaomi-mi_pad5.jpg";
import sensor_swk_2090bk from "./assets/Card/images/sensor_swk_2090bk.jpg";
import jbl_t115bt from "./assets/Card/images/jbl_t115bt.jpg";
import jblb from "./assets/Card/images/jbld.jpg";
import iphone14promax from "./assets/Card/images/iphone14.jpg";
import { Product } from "./types/types";
interface Advantage{
  title:string,
  image:string
}
interface Category{
  title: string,
    image: string,
    category: string,
}
interface Company{
  imgUrl: string,
  title: string,
}

const advantages:Advantage[] = [
  {
    title: "Авторизуйтесь, чтобы получить бонусы",
    image: price,
  },
  {
    title: "Доставка до 2 дней",
    image: delivery,
  },
  {
    title: "Страхование техники",
    image: insurance,
  },
  {
    title: "Кредит",
    image: credit,
  },
  {
    title: "Гарантия качества",
    image: guarentee,
  },
];

const categories:Category[] = [
  {
    title: "смартфоны",
    image: phones,
    category: "phones",
  },
  {
    title: "компьютеры",
    image: computers,
    category: "pk",
  },
  {
    title: "Телевизоры",
    image: tv,
    category: "tv",
  },
  {
    title: "планшеты",
    image: tablets,
    category: "tablets",
  },
  {
    title: "колонки",
    image: music,
    category: "music",
  },
];
const companies:Company[] = [
  {
    imgUrl: samsung,
    title: "Samsung",
  },
  {
    imgUrl: honorc,
    title: "Honor",
  },
  {
    imgUrl: apple,
    title: "Apple",
  },
  {
    imgUrl: xiaomi,
    title: "Xiaomi",
  },
  {
    imgUrl: playstation,
    title: "Playstatin",
  },
  {
    imgUrl: tefal,
    title: "Tefal",
  },
  {
    imgUrl: asko,
    title: "Asko",
  },
  {
    imgUrl: ndero,
    title: "Ndero",
  },
  {
    imgUrl: philips,
    title: "Philips",
  },
];

const products:Product[] = [
  {
    id: "1",
    productName: "Sony ps5 slim 1tb",
    imgUrl: ps5,
    category: "games",
    price: 66000,
    latest: true,
    shortDesc: "Sony ps5 slim 1tb",
    hit: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    avgRating: 9.9,
  },
  {
    id: "2",
    productName: "Телевизор TCL 55C745",
    imgUrl: tv2,
    category: "tv",
    price: 64999,
    shortDesc: "Телевизор TCL 55C745",
    hit: true,
    latest: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 8.9,
  },
  {
    id: "3",
    productName: "Игровая клавиатура Red Squarb",
    imgUrl: keyboard,
    category: "pk",
    price: 2500,
    shortDesc: "Игровая клавиатура Red Squar",
    hit: true,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.3,
  },
  {
    id: "4",
    productName: "Смартфон OPPO A78 8/256GB черный",
    imgUrl: oppo,
    category: "phones",
    price: 12000,
    shortDesc: "Смартфон OPPO A78 8/256GB черный",
    hit: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.7,
  },
  {
    id: "5",
    productName: "Смарт-часы Apple Watch Series 8 41mm",
    imgUrl: watch8,
    category: "watches",
    price: 45999,
    shortDesc: "Смарт-часы Apple Watch Series 8 41mm",
    hit: true,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.1,
  },
  {
    id: "6",
    productName: "Смартфон HONOR Magic6 Pro 12/512GB",
    imgUrl: honor,
    category: "phones",
    price: 109999,
    shortDesc: "Смартфон HONOR Magic6 Pro 12/512GB",
    hit: false,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.9,
  },
  {
    id: "7",
    productName: "Смартфон realme 12 Pro 8/256GB Blue Sea",
    imgUrl: realme12pro,
    category: "phones",
    price: 36999,
    shortDesc: "Смартфон realme 12 Pro 8/256GB Blue Sea",
    hit: false,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 8.9,
  },
  {
    id: "8",
    productName: 'Монитор HUAWEI 28.2"/IPS/3840',
    imgUrl: monitor_huawei,
    category: "pk",
    price: 46000,
    shortDesc: 'Монитор HUAWEI 28.2"/IPS/3840',
    hit: false,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.7,
  },
  {
    id: "9",
    productName: "Блендер Carrera №654 ",
    imgUrl: blender,
    category: "cookie",
    price: 2100,
    shortDesc: "Блендер Carrera №654 ",
    hit: false,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.1,
  },
  {
    id: "10",
    productName: 'Монитор игровой HUAWEI 34"/VA/.......',
    imgUrl: monitor_gamer,
    category: "pk",
    price: 21000,
    shortDesc: 'Монитор игровой HUAWEI 34"/VA/3440х1440/165Гц/черный (ZQE-CBA)',
    hit: false,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.3,
  },
  {
    id: "11",
    productName: "Фен Dreame Hair Miracle AHD9 Gold ",
    imgUrl: fan,
    category: "pk",
    price: 2100,
    shortDesc: "Фен Dreame Hair Miracle AHD9 Gold ",
    hit: false,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.5,
  },
  {
    id: "12",
    productName: "Смарт-часы Apple Watch Series 7 44mm",
    imgUrl: watch7,
    category: "watches",
    price: 39999,
    shortDesc: "Смарт-часы Apple Watch Series 7 44mm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.4,
  },
  {
    id: "13",
    productName: "realme 10 pro",
    imgUrl: realme10pro,
    category: "phones",
    price: 21999,
    shortDesc: "realme 10 pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.1,
  },
  {
    id: "14",
    productName: "samsung стиральная машина",
    imgUrl: samsungs,
    category: "cookie",
    price: 39000,
    shortDesc: "samsung стиральная машина",
    hit: true,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.1,
  },
  {
    id: "15",
    productName: "планшет xiaomi mi pad wifi",
    imgUrl: xiaomi_mi_pad,
    category: "tablets",
    price: 29999,
    shortDesc: "samsung стиральная машина",
    hit: true,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.0,
  },
  {
    id: "16",
    productName: "jbl t115 bt",
    imgUrl: jbl_t115bt,
    category: "headphones",
    price: 4599,
    shortDesc: "jbl t115 bt",
    hit: true,
    latest: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.2,
  },
  {
    id: "17",
    productName: "jbl bite",
    imgUrl: jblb,
    category: "headphones",
    price: 6999,
    shortDesc: "jbl bite",
    hit: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.6,
  },
  {
    id: "18",
    productName: "iphone 14 pro max",
    imgUrl: iphone14promax,
    category: "phones",
    price: 112000,
    shortDesc: "iphone 14 pro max",
    hit: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.9,
  },
  {
    id: "19",
    productName: "sensor swk 2090bk",
    imgUrl: sensor_swk_2090bk,
    category: "phones",
    price: 12000,
    shortDesc: "sensor swk 2090bk",
    hit: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",

    avgRating: 9.5,
  },
];

export { products, categories, advantages, companies };
