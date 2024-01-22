import styles from "@/styles/components/contact/contacthero.module.scss";

const ContactHero = () => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.inner_container}>
        {/* <h2>Contact Us</h2> */}
        <h1>
          Connect with Dronology: Soaring Together into Limitless Aerial
          Possibilities!
        </h1>
        {/* <h3>
          Contact Dronology for personalized drone solutions and services.
          <br /> Were here to answer inquiries, discuss projects, and guide you
          towards an unparalleled aerial journey.
          <br /> Lets make your vision take flight
        </h3> */}
      </div>
    </div>
  );
};

export default ContactHero;
