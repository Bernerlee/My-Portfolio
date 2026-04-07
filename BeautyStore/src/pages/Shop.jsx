import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Shop() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  //https://api.escuelajs.co/api/v1/products

  //const [search, setSearch] = useState("");
  const [debounceedSearch, setDebouncedSearch] = useState("");
  const { search, setSearch } = useContext(SearchContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return function () {
      clearTimeout(timer);
    };
  }, [search]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  //const filteredProducts = data.products;

  const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );
  //console.log(data);

  return (
    <div
      className="product-card"
      style={{ border: "1px solid #1e293b", padding: "10px", margin: "10px" }}
    >
      <h1>TechVault Store</h1>

      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {filteredProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product-grid">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
