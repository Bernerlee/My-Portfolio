import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, cartTotal, discount, finalTotal } =
    useContext(CartContext);

  console.log(cart);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Your cart is empty 🛒</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={styles.item}>
          <img src={item.image} style={styles.image} />

          <div>
            <h4>{item.title}</h4>
            <p style={{ textAlign: "center" }}>${item.price}</p>
          </div>

          <button
            style={btnStyles.removeBtn}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#d9363e")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4d4f")}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <p>Subtotal: ${cartTotal.toFixed(2)}</p>

      {discount > 0 && (
        <p style={{ color: "green" }}>Discount: -${discount.toFixed(2)}</p>
      )}

      <h3>Total: ${finalTotal.toFixed(2)}</h3>

      <button
        style={btnStyles.clearBtn}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "black")}
        onClick={clearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "40px auto",
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
  },

  image: {
    width: "150px",
    objectFit: "contain",
  },

  clearBtn: {
    marginTop: "20px",
    padding: "10px",
    cursor: "pointer",
  },
};

const btnStyles = {
  /* 🗑 REMOVE BUTTON */
  removeBtn: {
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },

  /* 🧹 CLEAR CART BUTTON */
  clearBtn: {
    marginTop: "20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    transition: "0.3s",
  },
};
