import React from "react";

function OrderButton({ orderData }) {
  const [status, setStatus] = React.useState("");

  const handleOrder = async () => {
    setStatus("Processing order...");
    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      if (res.ok) {
        setStatus("Order placed! Confirmation sent.");
      } else {
        setStatus("Failed to place order.");
      }
    } catch (e) {
      setStatus("Error placing order.");
    }
  };

  return (
    <>
      <button onClick={handleOrder}>Order Now</button>
      <p>{status}</p>
    </>
  );
}

export default OrderButton;
