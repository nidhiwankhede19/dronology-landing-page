import styles from "@/styles/components/home/aboutus.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.img_div}>
        <Image
          src="/about_us_hero.png"
          width={600}
          alt="hii"
          height={600}
          style={{ objectFit: "contain" }}
        />
        <div className={styles.slider_controls}>
          <div className={styles.img_slider}></div>
          <div className={styles.img_slider}></div>
          <div className={styles.img_slider}></div>
        </div>
      </div>
      <div className={styles.content_div}>
        <h2 className={styles.main_heading}>
          Pioneering Innovation in Custom Drones and Aerial Solutions
        </h2>
        <p className={styles.description}>
          Established in 2010 by Sarah Reynolds, Elevate Drones pioneers custom
          solutions, crafting high-performance racing FPV drones, precision
          agriculture, and cutting-edge video shooting drones. Our skilled team
          exceeds expectations, creating not just drones but a community.
          Elevate goes beyond as we share expertise through accessible FPV
          training courses. Elevate Drones — Redefining Aerial Excellence.
        </p>

        <button className={styles.button_secondary}>Learn More</button>
      </div>
    </div>
  );
};

export default About;
