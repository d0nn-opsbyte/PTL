import { Link } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <header>
      <div className="logo">Petom Trading Limited</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
