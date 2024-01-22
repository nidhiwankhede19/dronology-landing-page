import styles from "@/styles/components/home/blogs.module.scss";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.headings}>
          <h3>Read</h3>
          <h1>Our Blogs</h1>
        </div>

        <div className={styles.description}>
          <p className={styles.description_one}>
            Dive into the world of drones and aerial technology through Elevate
            Drones insightful blogs. Stay updated on industry trends, discover
            tips, and explore captivating stories. Whether youre a novice or an
            enthusiast, our blogs provide a wealth of knowledge, fostering a
            community passionate about the limitless possibilities of the skies.
            Elevate your understanding with us.
          </p>
          <p className={styles.description_two}>
            View our all blogs by clicking below.
          </p>
        </div>

        <button className={styles.cta_button}>View all blogs</button>
      </div>

      <div className={styles.right}>
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
