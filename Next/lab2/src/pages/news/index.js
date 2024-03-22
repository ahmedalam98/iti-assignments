import React from "react";

const Index = ({ news }) => {
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

export default Index;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:1000/news");
  const data = await res.json();
  return {
    props: { news: data },
  };
}
