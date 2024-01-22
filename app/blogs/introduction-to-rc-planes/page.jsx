"use client";
import React from "react";
import styles from "@/styles/app/blogs/blog_view/page.module.scss";
import Image from "next/image";
const IntroRcPlanes = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.mainHeading}>Introduction to RC Planes</h1>
      <div className={styles.tags}>12 JAN 2024</div>
      <div className={styles.thumbnail}>
        <Image
          src="/blogs/essential_electronics/essential-electronics-thumbnail.jpg"
          fill
          // width={800}
          // height={400}
          alt="essential; electonics"
        />
      </div>

      <div className={styles.content}>
        <h3>Welcome to the Thrilling World of RC Planes</h3>
        <p>
          Embark on an exciting journey with RC (Radio-Controlled) planes, a
          hobby that blends technology, creativity, and the joy of flying. This
          guide introduces you to the diverse world of RC aviation, where
          you&apos;ll learn about different types of planes, the basics of
          flight, and how to choose and care for your aircraft. Whether
          you&apos;re a beginner eager to take your first flight or an
          experienced pilot looking to expand your skills, there&apos;s always
          something new and thrilling to discover in RC flying.
        </p>

        <p>Let&apos;s understand the Basics of RC Aviation</p>

        <h3>What Is An RC Plane?</h3>
        <p>
          An RC plane is a scaled-down aircraft that&apos;s remotely controlled
          via a radio transmitter. These planes range from simple gliders to
          complex scale models, each offering a unique flying experience. They
          can be powered by electric motors, gas engines, or even jet turbines.
          The joy of RC flying lies in the ability to control these miniature
          aircraft, experiencing the nuances of flight from the ground.
        </p>
      </div>
    </div>
  );
};

export default IntroRcPlanes;
