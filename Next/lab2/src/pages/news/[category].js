import React from "react";

const Category = ({ news }) => {
  return (
    <div>
      {news.map((n) => (
        <div key={n.id}>
          <h4>{n.title}</h4>
          <h4>{n.category}</h4>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Category;

// WE NEED ( context ) HERE BECAUSE WE ARE USING DYNAMIC ROUTING.
export async function getServerSideProps(context) {
  console.log(context.params);
  const { category } = context.params;
  const res = await fetch(`http://localhost:1000/news?category=${category}`);
  const data = await res.json();
  console.log(data);
  return {
    props: { news: data },
  };
}
