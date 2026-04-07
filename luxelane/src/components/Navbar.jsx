import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          Luxelane
        </Link>
      </h2>
      <div style={styles.links}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Cart ({cart.length})
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  logoLink: {
    textDecoration: "none",
    color: "black",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  link: {
    textDecoration: "none",
    color: "#555",
    fontSize: "14px",
  },

  activeLink: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    borderBottom: "2px solid black",
    paddingBottom: "2px",
  },
};
