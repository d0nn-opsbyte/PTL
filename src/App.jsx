import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from './assets/ptlLogo.png'; 
import './styles.css'

// ✅ Your Home page
function Home() {
  return (
    <><section className="home" style={{ textAlign: 'center', padding: '20px' }}>
      <img src={logo} alt="Petom Trading Limited Logo" style={{ height: '100px', marginBottom: '20px' }} />
      <h1>Welcome to Our Store</h1>
      <p>Browse our products and place your order instantly.</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </section><section className="products">
        <h2>Some of our Products</h2>
        <div className="product-grid">
          <section className="products">
            <h2>Our Products</h2>
            <div className="product-grid">
              <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUa_QxyhaCF6BiRzDOZ5U_GbLbOyQnms5Nw&s" alt="Product 1" />
                <p>Product 1</p>
              </div>
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Product 2" />
                <p>Product 2</p>
              </div>
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Product 3" />
                <p>Product 3</p>
              </div>
            </div>
          </section>
        </div>
      </section></>

       

  );
}

// ✅ Products page
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  function handleOrder(product) {
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: product.id,
        productName: product.name,
        price: product.price
      })
    })
      .then((res) => res.json())
      .then(() => alert(`Order for ${product.name} placed successfully!`))
      .catch((err) => console.error("Error placing order:", err));
  }

  return (<>
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => handleOrder(product)}>Order Now</button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>

    <footer style={{ textAlign: "center", padding: "10px", background: "#f4f4f4" }}>
        <p>
          &copy;Petom Trading Limited.All rights reserved
       </p>
    </footer>
    </>
  );
}

// ✅ Main App
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Store. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
