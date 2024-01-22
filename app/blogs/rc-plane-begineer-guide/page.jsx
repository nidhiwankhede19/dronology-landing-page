"use client";
import React from "react";
import styles from "@/styles/app/blogs/blog_view/page.module.scss";
import Image from "next/image";

const RcPlaneBegineer = () => {
  return (
    <div className={styles.main}>
      <h1>Taking Flight: A Beginner&apos;s Guide to RC Plane Nomenclature</h1>
      <div className={styles.tags}>12 JAN 2024</div>
      <div className={styles.thumbnail}>
        <Image
          src="/blogs/essential_electronics/materials-behind-rc-planes.jpg"
          fill
          // width={800}
          // height={400}
          alt="essential; electonics"
        />
      </div>

      <div className={styles.content}>
        <p>
          The captivating world of RC planes can feel intimidating at first,
          with a jargon that seems like another language. But fear not, future
          aviators! This guide will equip you with the basic vocabulary to
          understand the anatomy of your RC plane, unlocking the door to
          confident communication and exciting flight adventures
        </p>

        <h3>Fuselage</h3>
        <p>
          The heart of the aircraft, the fuselage houses the engine, battery,
          electronics, and sometimes the landing gear. Think of it as the
          plane&apos;s backbone, holding everything together and providing a
          sleek aerodynamic shape
        </p>

        <h3>Wings</h3>
        <p>
          These majestic, outstretched arms generate lift, the magical force
          that keeps your plane airborne. The wing&apos;s design and angle play
          a crucial role in determining flight characteristics like stability
          and manoeuvrability ( chord length , le , te) ( dihedral , spar , ribs
          )
        </p>

        <h3>Tail</h3>
        <p>
          This feathered tailpiece, consisting of the horizontal and vertical
          stabilizers, keeps your plane&apos;s pirouettes under control. The
          horizontal stabilizer balances pitch (movement up and down), while the
          vertical stabilizer keeps yaw (steering left and right) in check
        </p>

        <h3>Control Surfaces</h3>
        <p>
          These are the puppeteers that control your plane&apos;s every move.
          Imagine ailerons on the wings like miniature elevators, tilting to
          bank left or right. The elevator on the tail acts like a pitch lever,
          pushing up to climb and pulling down to descend. Finally, the rudder
          on the vertical stabilizer (control horn , clevices , linkage stopper
          ) steers your plane like a boat&apos;s rudder, turning left or right
        </p>

        <h3>Propeller</h3>
        <p>
          This whirling marvel converts engine power into thrust, pulling your
          plane forward through the air. Different propeller sizes and designs
          can influence speed, climb rate, and overall performance
        </p>

        <h3>Landing Gear</h3>
        <p>
          Just like shoes for your plane, the landing gear allows for graceful
          takeoffs and smooth landings. Wheels are the most common, but some
          planes sport sophisticated retractable gear or even rugged skids for
          rough terrain
        </p>

        <h3>Canopy</h3>
        <p>
          A transparent cockpit cover, adding a touch of realism and protecting
          your precious electronics from wind and weather.
        </p>

        <h3>Spinner</h3>
        <p>
          This cone-shaped cap fits over the propeller hub, streamlining airflow
          and adding a touch of style
        </p>

        <h3>Winglets</h3>
        <p>
          These upward-curving extensions on the wingtips enhance flight
          efficiency and stability, making your plane a smooth operator
        </p>
      </div>
    </div>
  );
};

export default RcPlaneBegineer;
