import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type FavoriteItem = {
  id: string,
  productName: string,
  imgUrl: string,
  price: number,
}
type FavoriteState = {
  favoriteItems:FavoriteItem[],
  totalQuantity : number,
}
const data:FavoriteItem[] = JSON.parse(localStorage.getItem("favorites") || '[]') as FavoriteItem[];
const totalQuantity:number =
  JSON.parse(localStorage.getItem("totalFavoriteQuantity") || '0');
const setItemFunc = (products:FavoriteItem[], totalQuantity:number) => {
  localStorage.setItem("favorites", JSON.stringify(products));
  localStorage.setItem("totalFavoriteQuantity", JSON.stringify(totalQuantity));
};
const initialState:FavoriteState = {
  favoriteItems: data,
  totalQuantity: totalQuantity,
};
const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItem: (state, action:PayloadAction<FavoriteItem>) => {
      const newItem = action.payload;
      const existingItem = state.favoriteItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.favoriteItems.push(newItem);
        state.totalQuantity++;
      } else {
        FavoritesSlice.caseReducers.deleteItem(state, action);
      }

      setItemFunc(state.favoriteItems, state.totalQuantity);
    },
    deleteItem: (state, action:PayloadAction<FavoriteItem>) => {
      const existingItem = action.payload;
      const item = state.favoriteItems.find(
        (item) => +item.id === +existingItem.id
      );
      if (item) {
        state.favoriteItems = state.favoriteItems.filter(
          (item) => item.id !== existingItem.id
        );
        state.totalQuantity--;
      }
      setItemFunc(state.favoriteItems, state.totalQuantity);
    },
  },
});
export const favoriteActions = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
