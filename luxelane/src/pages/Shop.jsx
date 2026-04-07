//import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const url =
    category === "all"
      ? "https://api.escuelajs.co/api/v1/products"
      : `https://api.escuelajs.co/api/v1/products/?categorySlug=${category}`;

  const { data: products, loading, error } = useFetch(url);
  console.log(products);

  return (
    <div style={styles.container}>
      {/* 🧾 Header */}
      <h2 style={styles.title}>LuxeLane Collection</h2>

      {/* 🧵 Category Tabs */}
      <div style={styles.tabs}>
        {["all", "clothes", "furniture", "shoes"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams({ category: cat })}
            style={{
              ...styles.tabButton,
              backgroundColor: category === cat ? "black" : "transparent",
              color: category === cat ? "white" : "black",
              border: category === cat ? "none" : "1px solid #ddd",
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ⏳ Loading */}
      {loading && <p style={styles.message}>Loading products...</p>}

      {/* ❌ Error */}
      {error && <p style={styles.error}>{error}</p>}

      {/* 🛍 Products Grid */}
      <div style={styles.grid}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      {/* 📭 Empty State */}
      {!loading && products?.length === 0 && (
        <p style={styles.message}>No products found.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },

  tabButton: {
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
    transition: "0.3s ease",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },

  message: {
    textAlign: "center",
    marginTop: "20px",
  },

  error: {
    color: "red",
    textAlign: "center",
  },
};
