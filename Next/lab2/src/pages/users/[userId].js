import React from "react";

// user is the prop that we are passing from getStaticProps down below.
const UserId = ({ user }) => {
  return <div>{user.name}</div>;
};

export default UserId;

// We need ( context ) here because we are using dynamic routing.
export async function getStaticProps(context) {
  console.log(context.params);
  const { userId } = context.params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();
  return {
    props: { user: data },

    // ( ISR : Incremental Static Regeneration) revalidate is used to re-generate the page after a certain amount of time.
    // revalidate:10
  };
}

// getStaticPaths is used to generate all the dynamic pages in the build time.
export function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } },
      { params: { userId: "3" } },
    ],
    // Fallback is set to false which means that if the page is not pre-rendered, it will return a 404 page.
    // It can also be set to true which means that if the page is not pre-rendered, it will generate the page on the first request and serve it to the user. ( Page empty of data )
    // It can be ( True , False , blocking)

    // False is used with small apps where we know all the small paths and we want to show 404 if the path is not found.
    fallback: "blocking",
  };
}
