import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishListContext";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { search, setSearch } = useContext(SearchContext);

  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h2 className="logo">BeautyStore</h2>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(e.target.value);
          if (value.length > 0) {
            navigate("/shop");
          }
        }}
        className="search-input"
      />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/wishlist">Wishlist ({wishlist.length})</Link>
      </div>
    </nav>
  );
}
