import NavBar from "@component/components/NavBar";
import "@component/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <>
      <SessionProvider session={session}>
        <NavBar></NavBar>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
