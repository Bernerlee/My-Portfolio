// import { useState, createContext } from "react";
// //import { WishListContext } from "./WishListContext";

// export const WishListContext = createContext();

// export function WishListProvider({ children }) {
//   const [wishlist, setWishlist] = useState([]);

//   function addToWishlist(product) {
//     setWishlist((prev) => {
//       const exists = prev.find((item) => item.id === product.id);
//       if (exists) return prev;

//       return [...prev, product];
//     });
//   }

//   function removeFromWishlist(id) {
//     setWishlist((prev) => prev.filter((item) => item.id !== id));
//   }

//   return (
//     <WishListContext.Provider
//       value={{ wishlist, addToWishlist, removeFromWishlist }}
//     >
//       {children}
//     </WishListContext.Provider>
//   );
// }
