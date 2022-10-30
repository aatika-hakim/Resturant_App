import React from "react";
import { social } from "./Data";
import Text from "./Text";
import styles from "../styles/Footer.module.css";
import { Card } from "./card";

const Footer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.map}></div>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h2>WIDGETS 1</h2>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </Text>
          <div className={styles.socials}>
            {social.map((item, index) => {
              return (
                <Text className={styles.icons} key={index}>
                  <a
                    className={styles.link}
                    rel="noreferrer"
                    target="_blank"
                    href={item.href}
                  >
                    {item.icon}
                  </a>
                </Text>
              );
            })}
          </div>
        </div>
        <div className={styles.div2}>
          <h2>WIDGETS 2</h2>
          <table className={styles.table}>
            <tbody className={styles.tbody}>
              <td>
                <tr>Monday</tr>
                <tr>Tuesday</tr>
                <tr>Wednesday</tr>
                <tr>Thursday</tr>
                <tr>Friday</tr>
                <tr>Saturday</tr>
                <tr>Sunday</tr>
              </td>
              <td>
                <tr>5pm- 12pm</tr>
                <tr>5pm- 12pm</tr>
                <tr>5pm- 12pm</tr>
                <tr>5pm- 12pm</tr>
                <tr>5pm- 12pm</tr>
                <tr>5pm- 12pm</tr>
                <tr>5pm- 12pm</tr>
              </td>
            </tbody>
          </table>
        </div>
        <div className={styles.div3}>
          <h2>WIDGETS 3</h2>
          <Card />
        </div>
        <div className={styles.div4}>
          <h2>WIDGETS 4</h2>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </Text>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email address"
            required
            name="email"
            min="8"
          />
          <button className={styles.btn}>Order Now</button>
        </div>
      </div>
      <div className={styles.copyright}>
        <Text> 2022 ©️ All Rights Reserved | Privacy Policy</Text>
      </div>
    </section>
  );
};

export default Footer;
