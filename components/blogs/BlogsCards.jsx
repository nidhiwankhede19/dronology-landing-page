import React from "react";
import data from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/blogs/blogcards.module.scss";
const BlogsCards = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Recent blog posts</h2>
      <div className={styles.blog_field}>
        {/* //mapped from data folder */}
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.img}>
              <Image
                src={item.card_url}
                alt="img"
                width={360}
                height={250}
                className={styles.blog_img}
              />
            </div>
            <div className={styles.text}>
              <h2>{item.title}</h2>
              {/* <p>{item.content}</p> */}

              <div className={styles.info}>
                <Link href={`/blogs/${item.url}`} className={styles.link}>
                  Read More
                </Link>
                <p>{item.date}</p>
              </div>
            </div>
            {/* <div className={styles.author}>
              <div className={styles.author_profile}>
                <Image
                  src={item.profile_url}
                  alt="profile-img"
                  width={60}
                  height={40}
                  className={styles.author_profile_image}
                />
                <p>{item.author}</p>
              </div>
              <Link href={`/posts/${item.slug}`} className={styles.link}>
                Read More
              </Link>
              <p>{item.date}</p>
            </div> */}
          </div>
        ))}
      </div>
      <button className={styles.button}>Load More</button>
    </div>
  );
};

export default BlogsCards;
