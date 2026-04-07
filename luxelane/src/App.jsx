import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cart from "../src/pages/Cart";
import Home from "../src/pages/Home";
import Shop from "../src/pages/Shop";
import ProductDetails from "../src/pages/ProductDetails";
import MissingPage from "../src/pages/MissingPage";
import Layout from "../Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <ProductDetails /> },
    ],
  },
  { path: "*", element: <MissingPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
