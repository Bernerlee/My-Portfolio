import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishListContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  //https://api.escuelajs.co/api/v1/products/${id}

  //const debug = useContext(WishlistContext);
  console.log(product);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  //console.log(product);
  //console.log("DETAIL PAGE:", wishlist);

  return (
    <div>
      <img src={product.images[0]} width="500" />
      <h1>{product.title}</h1>
      <p>
        <strong>${product.price}</strong>
      </p>
      <p>{product.description}</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <button
        className="btn btn-danger"
        onClick={() => toggleWishlist(product)}
      >
        {isInWishlist(product.id)
          ? "💔 Remove from Wishlist"
          : "❤ Add to Wishlist"}
      </button>
      <Link to="/cart">
        <button className="btn btn-primary">Go to Cart</button>
      </Link>
    </div>
  );
}
