"use client";
import React from "react";
import styles from "@/styles/app/blogs/blog_view/page.module.scss";
import Image from "next/image";

const GettingIntoFpv = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.mainHeading}>
        Taking Flight : Getting Into Fpv Planes
      </h1>

      <div className={styles.tags}>12 JAN 2024</div>

      <div className={styles.thumbnail}>
        <Image
          src="/blogs/essential_electronics/getting-into-fpv.jpg"
          fill
          // width={800}
          // height={400}
          alt="essential; electonics"
        />
      </div>

      <div className={styles.content}>
        <p>
          FPV, or First Person View, flying has taken the RC world by storm, and
          for good reason. Imagine strapping on a pair of goggles and seeing the
          world from the cockpit of a plane soaring through the air. It&apos;s
          an exhilarating experience that&apos;s unlike anything else. But
          before you jump into the pilot&apos;s seat, there are a few things you
          need to know.{" "}
        </p>
        <h3>Choosing The Parts</h3>
        <p>
          There are a few special parts required apart from these basic
          electronics that will allow to go FPV mode
        </p>
        <h3>Your Window to the Skies: FPV Goggles</h3>

        <ul>
          <li>
            <p>
              Comfort: Ensure the goggles fit snugly and comfortably, especially
              during extended flights
            </p>
          </li>
          <li>
            <p>
              Resolution and field of view: Higher resolutions (like 1080p)
              offer sharper visuals, while wider fields of view provide a more
              immersive experience. Popular models include the FatShark
              Dominator V3 , Sykzone and DJI FPV Goggles V2
            </p>
          </li>
          <li>
            <p>
              Latency: Lower latency minimises the delay between the
              plane&apos;s actions and what you see on the goggles, crucial for
              responsive control
            </p>
          </li>
        </ul>

        <h3>Capturing the World: Camera and Video Transmitter</h3>
        <ul>
          <li>
            <p>
              Camera: Choose a camera with good low-light performance and a wide
              field of view to capture the expansive scenery. Popular options
              include the Runcam Micro Swift 2 and DJI air units
            </p>
          </li>
          <li>
            <p>
              Video transmitter: Match the transmitter&apos;s frequency band and
              power output to your goggles&apos;s capabilities. Consider
              long-range options for expansive flying adventures
            </p>
          </li>
        </ul>

        <h3>FPV Head Tracking</h3>
        <p>
          FPV headtracking adds a whole new dimension to the thrill of flying
          remote-controlled planes. By syncing your head movements with the
          camera view on your goggles, it creates a feeling of being truly in
          the cockpit, making your flight experience even more immersive and
          exhilarating.
        </p>
        <p>Here&apos;s a quick rundown of the technology:</p>
        <p>
          How it works: Head Tracking systems use sensors, often gyroscopes and
          accelerometers, to detect your head&apos;s position and orientation.
          This information is then processed and used to adjust the camera view
          on your goggles in real-time, mimicking your head movements in the
          virtual world.
        </p>

        <h3>Additional Tips for Beginners</h3>
        <ul>
          <li>
            <p>
              Start with a small, lightweight plane. This will be easier to
              control and less likely to cause damage if you crash
            </p>
          </li>
          <li>
            <p>
              Fly with a spotter. Having someone watch your plane can help you
              avoid obstacles and keep you safe
            </p>
          </li>
          <li>
            <p>
              Be patient and don&apos;t give up. Learning to fly FPV takes time
              and practice. But with dedication, you&apos;ll be soaring through
              the skies like a pro in no time
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GettingIntoFpv;
