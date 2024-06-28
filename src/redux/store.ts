import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import FavoritesSlice from "./slices/FavoritesSlice";


const rootReducer = combineReducers({
  cart: CartSlice,
  favorites: FavoritesSlice,
});
const store = configureStore({
  reducer: rootReducer
});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']