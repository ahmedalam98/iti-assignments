import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

const ProductId = () => {
  const router = useRouter();
  const [details, setDetails] = useState("");

  const handleChange = (e) => {
    setDetails(e.target.value);
  };

  const handleGoButtonClick = () => {
    router.push(`/products/${router.query.productId}/${details}`);
  };

  // router.query is an object and it contains the dynamic route parameters
  const { productId } = router.query;

  return (
    <div>
      <h2>Product ID {productId}</h2>

      <h6>Go deep to product details page : </h6>
      <input
        type="text"
        placeholder="Enter one more ID"
        value={details}
        onChange={handleChange}
      />

      <button onClick={handleGoButtonClick}>Go</button>
    </div>
  );
};

export default ProductId;
