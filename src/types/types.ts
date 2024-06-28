export interface Product {
  id:string,
  productName:string,
  imgUrl:string,
  category?:string,
  price : number,
  shortDesc?:string,
  hit?:boolean,
  latest?:boolean,
  description?:string,
  avgRating?:number
  }