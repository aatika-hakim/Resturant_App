import Title from "../Title";
import Text from "../Text";
import Slider from "../Slider";
import { data, info } from "../Data";
import Image from "next/image";
import styles from "../../styles/Feature.module.css";
import { FaArrowRight } from "react-icons/fa";

const link = "";
const Feature = () => {
  return (
    <div className={styles.Feature}>
      {/* section 1 */}
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
      {/* section 2 */}
      <section className={styles.container}>
        <div className={styles.feature}>
          <Title className={styles.h1}> Lorem Ipsum </Title>
          <Title className={styles.subtitle}>Lorem Ipsum </Title>
          {info.map((text, index) => {
            return (
              <div className={styles.info} key={index}>
                <Text>{text.paragraph}</Text>
                &nbsp;
                <Text>{text.text}</Text> &nbsp;
                <Text>{text.paragraph}</Text>
              </div>
            );
          })}
          <div className={styles.div}>
            <div className={styles.wrapper}>
              <Image
                src="/burger.svg"
                alt=""
                height="300"
                width="400"
                layout="fixed"
                className={styles.img1}
              />
              <Image
                src="/meat.svg"
                alt=""
                height="300"
                width="400"
                layout="fixed"
                className={styles.img2}
              />
              <div className={styles.btnKnow}>
                <button className={styles.btn}>
                  KNOW MORE
                  <FaArrowRight className={styles.arr} onClick={link} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className={styles.section3}>
        <div className={styles.container2}>
          {info.map((txt, ind) => {
            return (
              <div key={ind} className={styles.wrapper2}>
                <Title className={styles.head}> Lorem Ipsum </Title>
                <Title className={styles.subhead}>Lorem Ipsum </Title>
                <Text className={styles.txt}>{txt.paragraph}</Text>
                <Text className={styles.txt}>{txt.paragraph}</Text>
              </div>
            );
          })}
          <div className={styles.Img}>
            <Image src="/burger.svg" alt="img" height="300" width="700" />
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className={styles.section4}>
        <div className={styles.container3}>
          <div className={styles.Img}>
            <Image src="/burger.svg" alt="img" height="300" width="700" />
          </div>
          {info.map((txt, ind) => {
            return (
              <div key={ind} className={styles.wrapper2}>
                <Title className={styles.head}> Lorem Ipsum </Title>
                <Title className={styles.subhead}>Lorem Ipsum </Title>
                <Text className={styles.txt}>{txt.paragraph}</Text>
                <Text className={styles.txt}>{txt.paragraph}</Text>
              </div>
            );
          })}
        </div>
      </section>
      {/* section 5 */}
      <section></section>
    </div>
  );
};
export default Feature;
