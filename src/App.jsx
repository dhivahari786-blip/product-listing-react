import Navbar from "./components/Navbar";
import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const addToCart = (product) => {
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    const updated = cart.map((item) =>
      item.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item
    );
    setCart(updated);
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
};

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // 🔍 Search
  let filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🎯 Filter
  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === category
    );
  }

  // 🔃 Sort
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="app-container">
      
      <Navbar cartCount={cart.length} setSearch={setSearch} />

<div className="controls-bar">
  <select onChange={(e) => setCategory(e.target.value)}>
    <option value="All">All</option>
    <option value="Electronics">Electronics</option>
    <option value="Fashion">Fashion</option>
  </select>

  <select onChange={(e) => setSort(e.target.value)}>
    <option value="">Sort</option>
    <option value="low">Price Low → High</option>
    <option value="high">Price High → Low</option>
  </select>
</div>

      {/* PRODUCT GRID */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* CART */}
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;