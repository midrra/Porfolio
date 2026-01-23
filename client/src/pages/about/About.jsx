import React , { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import styles from "./about.module.scss";

const About = () => {
  return (
    <Fragment>
      <div className={styles.about}>
        <div className={styles.left}>
          <h1>About</h1>
          <h1>me</h1>
          <p>
            My name is Mohamed Awad I am a highly skilled and passionate
            Front-End Developer, specializing in crafting dynamic, responsive,
            and high-performance web applications. With expertise in HTML, CSS,
            JavaScript, and React, I transform ideas into seamless digital
            experiences. My commitment to clean code, innovation, and
            cutting-edge technology drives me to build exceptional user
            interfaces that stand out.
          </p>
          <a href="https://github.com/midrra" target="_blank">
            My Github Account
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={"/photes/about.png"} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
