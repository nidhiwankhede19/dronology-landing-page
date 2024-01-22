import React from "react";
import data from "@/data/blog";
import styles from "@/styles/components/blogs/blogview.module.scss";

const BlogPost = ({ params }) => {
  const { slug } = params;

  // Find the blog post with the matching id (slug)
  const selectedPost = data.find((post) => post.id === slug);

  // Check if the post with the given id exists
  if (!selectedPost) {
    return <h1>Blog Post not found!</h1>;
  }

  // Destructure properties for easier use
  const { title, content, date, author } = selectedPost;

  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Date: {date}</p>
      <p>Author: {author}</p>
      {/* Add other elements based on your needs */}
      {/* <img src={card_url} alt={`Thumbnail for ${title}`} /> */}
      {/* <img src={profile_url} alt={`Author ${author}`} /> */}
    </div>
  );
};

export default BlogPost;
