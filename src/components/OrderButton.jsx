// src/components/OrderButton.jsx
import React from "react";

export default function OrderButton() {
  const handleOrder = async () => {
    try {
      const response = await fetch("http://localhost:3000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: 1, quantity: 1 }),
      });
      const data = await response.json();
      alert("Order placed: " + data.message);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return <button onClick={handleOrder}>Order Now</button>;
}
