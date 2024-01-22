"use client";
import Link from "next/link";
import styles from "@/styles/components/navbar.module.scss";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarBlack, setNavbarBlack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 25;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const pathNameSplit = pathname.split("/");

  const lolm = pathNameSplit[2];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      {/* <nav className={styles.navbar}> */}
      <div className={styles.navbarBrand}>
        {/* <Link className={styles.mainLogo} href="/"> */}
        <Link
          className={styles.mainLogo}
          style={{ color: lolm ? "black" : "white", textDecoration: "none" }}
          href="/"
        >
          Dronology
        </Link>
      </div>
      <ul className={styles.navbarLinks}>
        <li>
          <Link
            className={styles.navLink}
            style={{ color: lolm ? "black" : "white", textDecoration: "none" }}
            href="/"
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link className={styles.navLink} href="/courses">
            Courses
          </Link>
        </li> */}
        {/* <li>
          <Link className={styles.navLink} href="/about">
            About
          </Link>
        </li> */}
        <li>
          <Link
            className={styles.navLink}
            style={{ color: lolm ? "black" : "white", textDecoration: "none" }}
            href="/blogs"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            className={styles.navLink}
            style={{ color: lolm ? "black" : "white", textDecoration: "none" }}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
