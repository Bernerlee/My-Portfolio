import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  function isInWishlist(id) {
    return wishlist.some((item) => item.id === id);
  }

  function toggleWishlist(product) {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  }

  // function addToWishlist(product) {
  //   setWishlist((prev) => {
  //     const exists = prev.find((item) => item.id === product.id);
  //     if (exists) return prev;

  //     return [...prev, product];
  //   });
  // }

  function removeFromWishlist(id) {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
