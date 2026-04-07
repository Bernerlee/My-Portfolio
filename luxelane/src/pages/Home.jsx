import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* 🖼 HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>LuxeLane</h1>
          <p style={styles.subtitle}>
            Discover timeless fashion and elegant pieces
          </p>

          <Link to="/shop" style={styles.cta}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* 🛍 CATEGORY SECTION */}
      <section style={styles.categories}>
        <h2 style={styles.sectionTitle}>Shop by Category</h2>

        <div style={styles.grid}>
          <Link to="/shop?category=clothes" style={styles.card}>
            <img
              src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
              alt="Clothes"
              style={styles.image}
            />
            <p>Clothes</p>
          </Link>

          <Link to="/shop?category=shoes" style={styles.card}>
            <img
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
              alt="Shoes"
              style={styles.image}
            />
            <p>Shoes</p>
          </Link>

          <Link to="/shop?category=accessories" style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
              alt="Accessories"
              style={styles.image}
            />
            <p>Accessories</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    height: "80vh",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "40px",
    borderRadius: "10px",
  },

  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  cta: {
    textDecoration: "none",
    backgroundColor: "white",
    color: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
  },

  categories: {
    padding: "40px 20px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "24px",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  card: {
    cursor: "pointer",
    textDecoration: "none",
    color: "blue",
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};
