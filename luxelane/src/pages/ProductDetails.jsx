import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import useFetch from "../hooks/useFetch";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import Toast from "../components/Toast";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { data, loading, error } = useFetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  function handleCart() {
    addToCart(data);
    setMessage(`Added ${data.title} to cart`);
    setShowToast(true);
  }
  return isMobile ? (
    <div style={mobileStyles.container}>
      <img src={data.images[0]} alt={data.title} style={mobileStyles.image} />
      <h2>{data.title}</h2>
      <p style={mobileStyles.price}> ${data.price}</p>
      <p>{data.description}</p>

      <button onClick={() => handleCart(data)} style={mobileStyles.button}>
        Add to cart
      </button>

      <Toast
        message={message}
        show={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      />
    </div>
  ) : (
    <div style={styles.container}>
      <img src={data.images[0]} alt={data.title} style={styles.image} />
      <div style={styles.details}>
        <h2>{data.title}</h2>
        <p style={styles.price}> ${data.price}</p>
        <p>{data.description}</p>

        <button onClick={() => handleCart(data)} style={styles.button}>
          Add to cart
        </button>

        <Toast
          message={message}
          show={showToast}
          onClose={() => {
            setShowToast(false);
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "20px",
  },
  image: {
    width: "300px",
    objectFit: "contain",
  },
  details: {
    maxWidth: "500px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  button: {
    marginTop: "20px",
    padding: "10px 15px",
    cursor: "pointer",
  },
};

const mobileStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
  },

  image: {
    width: "300px",
    objectFit: "contain",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  button: {
    marginTop: "20px",
    padding: "10px 15px",
    cursor: "pointer",
  },
  details: {
    maxWidth: "500px",
  },
};
