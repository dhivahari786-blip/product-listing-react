function SearchBar({ setSearch }) {
  return (
    <div className="search-box">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;