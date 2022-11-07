import Head from "next/head";
import styles from "../styles/Home.module.css";
import Feature from "../components/home/Feature";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resturant App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature />
    </div>
  );
}
