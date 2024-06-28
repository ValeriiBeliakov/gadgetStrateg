import { PayloadAction, createSlice } from "@reduxjs/toolkit";

  type CartItem = {
    id: number;
    price: number;
    quantity: number;
    productName: string,
    imgUrl: string,
    totalPrice: number;
};
type CartState = {
  cartItems: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}
const data: CartItem[] = JSON.parse(localStorage.getItem("cart") || '[]') as CartItem[];
const totalQuantity:number = JSON.parse(localStorage.getItem("totalQuantity") || '0')
const totalAmount:number = JSON.parse(localStorage.getItem("totalAmount") ?? "0");
const setItemFunc = (products:CartItem[], totalQuantity:number, totalAmount:number):void => {
  localStorage.setItem("cart", JSON.stringify(products));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};
const initialState:CartState = {
  cartItems: data,
  totalAmount: totalAmount,
  totalQuantity: totalQuantity,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        1
      );
      if (!existingItem) {
        state.cartItems.push(newItem);
       
        
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price
        
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        1
      );
      setItemFunc(state.cartItems, state.totalQuantity, state.totalAmount);
    },
    deleteItem: (state, action:PayloadAction<number>) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - item.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemFunc(state.cartItems, state.totalQuantity, state.totalAmount);
    },
    increaseQuantity: (state, action:PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if(item){
      state.totalQuantity++;
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemFunc(state.cartItems, state.totalQuantity, state.totalAmount);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
          item.quantity--;
          item.totalPrice = item.quantity * item.price;
          state.totalQuantity--;
      }
      state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      

      if (item && item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
      setItemFunc(state.cartItems, state.totalQuantity, state.totalAmount);
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
export const getCurrentQuantityById = (id:number) => (state:{cart:CartState}) =>
  state.cart.cartItems.find((item) => item.id === id)?.quantity ?? 0; 
