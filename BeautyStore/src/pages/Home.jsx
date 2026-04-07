import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to BeautyStore</h1>
      <p>Your hub for premium body products to make you look attractive.</p>
      <Link to="/shop">
        <button className="btn btn-primary">Go to Shop</button>
      </Link>
    </div>
  );
}
