import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h2 style={{ margin: "0 30px" }}>Home Page Goes Here</h2>;
}
