import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import GlobalContextProvider from "./context/GlobalContextProvider";
import CartPage from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
