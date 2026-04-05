function Cart({ cart, setCart }) {
  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
  };

  
  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      setCart(updated);
    }
  };

  
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛒 Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>
            {item.name} - ₹{item.price}
          </span>

          <div className="qty-controls">
            <button onClick={() => decreaseQty(index)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(index)}>+</button>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* TOTAL */}
      {cart.length > 0 && (
        <h3 className="total">Total: ₹{total}</h3>
      )}
    </div>
  );
}

export default Cart;