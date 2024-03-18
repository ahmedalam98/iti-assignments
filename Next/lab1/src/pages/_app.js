import "@/styles/globals.css";
import NavBar from "@/Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  // To Hide the Navbar in the 404 Page or any page that have ( getLayout )
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  );
}
