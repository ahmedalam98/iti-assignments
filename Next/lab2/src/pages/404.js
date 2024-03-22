import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <h2>Oops page not found ... </h2>
      <br />

      <button className="btn btn-warning" onClick={handleClick}>
        Back To Home
      </button>
    </div>
  );
};

export default NotFound;

// This is a custom layout for the 404 page component to Hide the Navbar for example
NotFound.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
