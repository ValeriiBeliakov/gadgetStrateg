import "./App.css";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/SignUp";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AppLayout from "./ui/AppLayout"
import Login from "./pages/Login/Login";
import { Navigate, Route, Routes } from "react-router";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";
import ProtectedRoutes from "./routers/ProtectedRoutes";
import Favorites from "./pages/Favoriets/Favorites";
import ProductsByCategories from "./pages/ProductsByCategories/ProductsByCategories";
import React from "react";

const App:React.FC=()=> {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <AppLayout />,
  //     children: [
  //       {
  //         index path: "main",
  //         element: <Home />,
  //       },
  //       {
  //         path: "logout",
  //         element: <LogOut />,
  //       },
  //       {
  //         path: "main",
  //         element: <ProductDetails />,
  //       },
  //       {
  //         path: "main",
  //         element: <ProductDetails />,
  //       },
  //       {
  //         path: "cart",
  //         element: <Cart />,
  //       },
  //       {
  //         path: "signup",
  //         element: <SignUp />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "login",
  //     element: <Login />,
  //   },
  // ]);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="main" />} />
          <Route path="main" element={<Home />} />
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
      </Routes>
    </>
  );
}

export default App;
