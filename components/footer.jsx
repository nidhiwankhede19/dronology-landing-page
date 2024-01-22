import styles from '@/styles/components/footer.module.scss'
import Image from 'next/image';

const Footer = () => {
  return <div className={styles.main}>
    <div className={styles.logo}>
      DRONOLOGY
    </div>
    <ul className={styles.pages}>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>SERVICES</li>
      <li>PRODUCTS</li>
      <li>BLOGS</li>
      <li>CONTACT</li>
    </ul>
    <div className={styles.social_media}>
      <Image
      src="/facebook.png"
      alt="facebook_icon"
      height={25}
      width={25} />

      <Image
      src="/twitter.png"
      alt="twitter_icon"
      height={25}
      width={25} />

      <Image
      src="/instagram.png"
      alt="instagram_icon"
      height={25}
      width={25} /> 
    </div>
    <div className={styles.copyright}>
      All rights reserved @2000
    </div>

  </div>;
 
}
export default Footer;
