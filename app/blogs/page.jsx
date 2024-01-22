import React from "react";
import BlogsCards from "@/components/blogs/BlogsCards";
import styles from "@/styles/app/blogs/page.module.scss";
import BlogHero from "@/components/blogs/BlogHero";

export default function BlogsPage() {
  return (
    <main className={styles.main}>
      <BlogHero />
      <BlogsCards />
    </main>
  );
}
