import { Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/SignUp";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";
import ProtectedRoutes from "./routers/ProtectedRoutes";
import Favorites from "./pages/Favorites/Favorites";
import ProductsByCategories from "./pages/ProductsByCategories/ProductsByCategories";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="main/:category" element={<ProductsByCategories />} />
        <Route path="shop/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="favorites" element={<Favorites />} />
        <Route
          path="checkout"
          element={
            <ProtectedRoutes>
              <Checkout />
            </ProtectedRoutes>
          }
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
