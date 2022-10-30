import React from "react";
import Image from "next/image";
import Text from "./Text";
import styles from "../styles/card.module.css";

export const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <Image
            className={styles.img}
            src="/fresh.svg"
            alt=""
            height="80"
            width="80"
          />
        </div>
        <div className={styles.text}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <Text>Lorem Ipsum is simply dummy text</Text>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <Image
            className={styles.img}
            src="/fresh.svg"
            alt=""
            height="80"
            width="80"
          />
        </div>
        <div className={styles.text}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <Text>Lorem Ipsum is simply dummy text</Text>
        </div>
      </div>
    </>
  );
};
