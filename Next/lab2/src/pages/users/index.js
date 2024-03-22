import React from "react";

const Index = ({ users }) => {
  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
};

export default Index;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: { users: data },
  };
}
