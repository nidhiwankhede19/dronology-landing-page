import styles from "@/styles/components/home/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_content}>
        <h1>A Sky Full <br />
          of<br /> 
          <span>Possibilities</span>
        </h1>
        <p>Your journey into drone excellence starts here</p>
        <button>Get started</button>
      </div>
    </div>
  );
};

export default Hero;
