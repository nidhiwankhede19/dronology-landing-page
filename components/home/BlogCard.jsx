import Image from "next/image";
import styles from "@/styles/components/home/blogcard.module.scss";

const BlogCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imageDiv}>
        <Image src="/filler_1.png" alt="agri drone" fill />
      </div>

      <div className={styles.tagAndDate}>
        <p>#Racing</p>
        <p>10 Dec 2023</p>
      </div>
      <div className={styles.blogInfo}>
        <h3>Planning for your first ever drone race</h3>
        <p>
          Embarking on your first drone race is an exhilarating journey,
          blending technology, skill, and sheer excitement...
        </p>
      </div>
      <button>Read More</button>
    </div>
  );
};

export default BlogCard;
