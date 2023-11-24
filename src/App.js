import "./App.css";
import React from "react";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Login from "./features/auth/components/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import ProductDetail from "./features/product-list/components/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
