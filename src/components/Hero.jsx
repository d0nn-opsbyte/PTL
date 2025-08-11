import "../styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Brightening Your World</h1>
        <p>Elegant, Efficient, and Modern Lighting Solutions</p>
        <button onClick={() => window.location.href="/products"}>Explore Products</button>
      </div>
    </section>
  );
}
