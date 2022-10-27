import Title from "../Title";
import Text from "../Text";
import Slider from "../Slider";
import { data, info } from "../Data";
import styles from "../../styles/Feature.module.css";

const Feature = () => {
  return (
    <div className={styles.Feature}>
      <section id="home" className={styles.section}>
        <div className={styles.container1}>
          <Text className={styles.Text}>DOLOR SIT AMET</Text>
          <Title className={styles.title}> Lorem Ipsum </Title>
          <Text className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <button className={styles.button}>
            <div className={styles.btn1}>VIEW MORE</div>
            <div className={styles.btn2}>Go</div>
          </button>
          <div className={styles.img_slider}>
            <Slider slides={data} />
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.feature}>
          <Title className={styles.h1}> Lorem Ipsum </Title>
          <Title className={styles.subtitle}>Lorem Ipsum </Title>
          {info.map((text, index) => {
            return (
              <div className={styles.info} key={index}>
                <Text>{text.text}</Text>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Feature;
