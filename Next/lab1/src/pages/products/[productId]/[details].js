import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const router = useRouter();

  // details should be the same as the file name
  const { productId, details } = router.query;

  console.log(router.query);

  return (
    <h2>
      Details {details} of Product with id : {productId}
    </h2>
  );
};

export default Details;
