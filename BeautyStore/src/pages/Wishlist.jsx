import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div style={{ margin: "15px" }}>
            <img src={item.images[0]} alt={item.title} width="150" />
            <p>{item.title}</p>
            <button
              className="btn btn-primary"
              onClick={() => toggleWishlist(item)}
            >
              Remove ❌
            </button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
