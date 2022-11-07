import React from "react";
import Text from "../components/Text";
import Image from "next/image";
import styles from "../styles/nav/About.module.css";

const About = () => {
  return (
    <>
      <section className={styles.section}></section>
      <div id="about" className={styles.container}>
        <Text className={styles.Text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </div>
      <div className={styles.wrapper}>
       
      </div>
    </>
  );
};

export default About;
