function Navbar({ cartCount, setSearch }) {
  return (
    <div className="navbar">
      <h2 className="logo">🛍️ ShopEasy</h2>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="cart-icon">
        🛒 <span>{cartCount}</span>
      </div>
    </div>
  );
}

export default Navbar;