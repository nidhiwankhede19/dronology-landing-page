import React from "react";
import styles from "@/styles/components/blogs/bloghero.module.scss";

const BlogHero = () => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.inner_container}>
        {/* <h2>Unlock Knowledge</h2> */}
        {/* <h1>
          Dive into a Sky of Learning with Dronology&apos;s Informative and
          Educational blog posts!
        </h1> */}
        <h1>Unlock Knowledge</h1>
        {/* <h3>
          Explore our blogs for insights into drone technology, industry trends,
          and inspiring stories.
          <br /> Join our community, where the sky&apos;s not the limit,
          <br />
          it&apos;s just the beginning of your aerial knowledge journey.
        </h3> */}
        <h3>
          Dive into a Sky of Learning with Dronology&apos;s Informative and
          Educational blog posts!
        </h3>
      </div>
    </div>
  );
};

export default BlogHero;
