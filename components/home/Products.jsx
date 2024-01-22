import styles from "@/styles/components/home/products.module.scss";
import Image from "next/image";

const Products = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headings}>
        <h3>Our Products</h3>
        <p>
          Explore a curated selection of cutting-edge drones at Elevate-where
          innovation meets excellence. Elevate your experience with our
          exceptional products
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="/agri_image.png" alt="agri drone" fill />
          <h3>Agri Drones</h3>
        </div>
        <div className={styles.card}>
          <Image src="/fpv_image.png" alt="agri drone" fill />
          <h3>FPV Drones</h3>
        </div>
        <div className={styles.card}>
          <Image src="/rc_image.png" alt="agri drone" fill />
          <h3>RC Planes</h3>
        </div>
      </div>
    </div>
  );
};

export default Products;
