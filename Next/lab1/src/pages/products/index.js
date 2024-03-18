import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
  const [productId, setProductId] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleGoButtonClick = () => {
    router.push(`/products/${productId}`);
  };

  return (
    <>
      <h5>Welcome to Products page ...</h5>
      <br />

      <h6>Go to specific product</h6>
      <input
        type="text"
        placeholder="Enter product ID"
        value={productId}
        onChange={handleChange}
      />

      <button onClick={handleGoButtonClick}>Go</button>
    </>
  );
};

export default Index;
