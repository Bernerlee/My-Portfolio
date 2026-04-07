import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  console.log(cart);

  const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div>
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ margin: "10px" }}>
              <img src={item.images[0]} alt={item.title} width={300} />
              <p>{item.title}</p>
              <p>${item.price}</p>

              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove ❌
              </button>
              <hr />
            </div>
          ))}
          <h2>Total: ${cartTotal.toFixed(2)}</h2>
          <button
            className="btn btn-secondary"
            style={styles.clearBtn}
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  clearBtn: {
    marginTop: "20px",
    backgroundColor: "#d9363e",
    color: "white",
    border: "none",
    padding: "20px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "17px",
    width: "100%",
    transition: "0.3s",
  },
};
