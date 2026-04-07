import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
export default function CartProvider({ children }) {
  // Load from local storage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add t cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.images?.[0],
        },
      ];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Total
  const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  // Discount Logic
  const discount = cartTotal > 200 ? cartTotal * 0.1 : 0;
  const finalTotal = cartTotal - discount;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        finalTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
