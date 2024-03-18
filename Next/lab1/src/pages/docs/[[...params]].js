import { useRouter } from "next/router";
import React from "react";

const Params = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  switch (params.length) {
    case 1:
      return <h2>First Level is : {params[0]}</h2>;
    case 2:
      return (
        <h2>
          Second Level is : {params[0]} , {params[1]}
        </h2>
      );
    case 3:
      return (
        <h2>
          Third Level is : {params[0]} , {params[1]} ,{params[2]}
        </h2>
      );
    case 4:
      return (
        <h2>
          Fourth Level is : {params[0]} , {params[1]} ,{params[2]} ,{params[3]}
        </h2>
      );
    case 5:
      return (
        <h2>
          Fifth Level is : {params[0]} , {params[1]} ,{params[2]} ,{params[3]} ,
          {params[4]}
        </h2>
      );
    case 6:
      return <h2>Limit reached :D</h2>;

    default:
      return (
        <div>
          <h2>Play with URL to see Result :D</h2>
          <h6>For Example : /docs/1/2/3/4/5/6</h6>

          <hr />

          <p>Note : The limit is 5 Params</p>
        </div>
      );
  }
};

export default Params;
