import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishListProvider.jsx";
import SearchProvider from "./context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
);
