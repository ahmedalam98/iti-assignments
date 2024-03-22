import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next SSG, ISR, SSR, SWR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className={styles.title}>Welcome to Next.js Lab 2</h2>

        <h5>
          # This app code provides SSG , ISR , SSR and SWR examples with Next.js
        </h5>
        <br />

        <h5>
          {" "}
          # Also, it provides a 404 page with a back button to the home page
        </h5>
      </main>
    </>
  );
}
