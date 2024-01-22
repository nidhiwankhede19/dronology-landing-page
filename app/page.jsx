import styles from "@/styles/app/page.module.scss";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Blogs from "@/components/home/Blogs";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Services />
      <Products />
      <Blogs />
      <Testimonial />
    </main>
  );
}
