import React, { useState } from "react";
import { data } from "./Data";
import Image from "next/image";
import { FaCaretRight, FaCaretLeft, FaArrowRight } from "react-icons/fa";
import Text from "./Text";
import styles from "../styles/Slider.module.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <FaCaretLeft className={styles.left_arrow} onClick={prevSlide} />
      {data.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className={styles.card}>
                <div className={styles.img}>
                  <Image
                    src={slide.image}
                    height={100}
                    width={120}
                    layout="fixed"
                    alt="meal images"
                    className={styles.image}
                  />
                </div>
                <Text className={styles.text}>{slide.text}</Text>
              </div>
            )}
            {index === current + 1 && (
              <div className={styles.card}>
                <div className={styles.img}>
                  <Image
                    src={slide.image}
                    height={100}
                    width={120}
                    layout="fixed"
                    alt="meal images"
                    className={styles.image}
                  />
                </div>
                <Text className={styles.text}>{slide.text}</Text>
              </div>
            )}
          </div>
        );
      })}
      <FaCaretRight className={styles.right_arrow} onClick={nextSlide} />
    </div>
  );
};

export default Slider;
