import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import Toast from "./Toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    addToCart(product);
    setMessage(`Added ${product.title} to cart!`);
    setShowToast(true);
  };

  return (
    <div style={styles.card}>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={product.images[0] || "https://via.placeholder.com/150"}
          alt={product.title}
          style={styles.image}
        />
        <h4 style={styles.title}>{product.title}</h4>
      </Link>

      <p style={styles.price}>${product.price}</p>

      <button onClick={handleAddToCart} style={styles.button}>
        Add to cart
      </button>

      <Toast
        message={message}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default ProductCard;

const styles = {
  card: {
    border: "1px solid #eee",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },
  image: {
    height: "150px",
    objectFit: "contain",
  },
  title: {
    fontSize: "14px",
    margin: "10px 0",
  },
  price: {
    fontWeight: "bold",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    cursor: "pointer",
  },
};
