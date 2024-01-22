"use client";
import styles from "@/styles/components/contact/contactform.module.scss";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console (replace with your actual submission logic)
    console.log("Form Data:", formData);

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      question: "",
      message: "",
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1>
            Contact us <br />
            and unleash <br />
            your idea
          </h1>
          <p>
            Reach out to Dronology – Turning Your Aerial Ideas into Reality
            Begins Here.
          </p>
          <div className={styles.bullet_points}>
            <div className={styles.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 15 15"
              >
                <path
                  fill="#55a9f8"
                  fill-rule="evenodd"
                  d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Tailored advice for your drone projects and services.</p>
            </div>
            <div className={styles.point}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 15 15"
              >
                <path
                  fill="#55a9f8"
                  fill-rule="evenodd"
                  d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>
                Explore potential partnerships and innovative ventures in the
                drone industry.
              </p>
            </div>
            <div className={styles.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 15 15"
              >
                <path
                  fill="#55a9f8"
                  fill-rule="evenodd"
                  d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Expect a prompt and attentive reply to your inquiries.</p>
            </div>
          </div>
        </div>

        {/* Right : form */}
        <div className={styles.right}>
          <form onSubmit={handleSubmit}>
            {/* Your form fields go here */}
            <div className={styles.label_and_input}>
              <label>Name</label>
              <input
                placeholder="Enter your name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className={styles.label_and_input}>
              <label>Email</label>
              <input
                placeholder="Enter your mail address"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className={styles.label_and_input}>
              <label>Phone</label>
              <input
                placeholder="Enter your phone number"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className={styles.label_and_input}>
              <label>Question</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={formData.question === "option1"}
                    onChange={() =>
                      setFormData({ ...formData, question: "option1" })
                    }
                  />
                  Option 1
                </label>
                {/* Add similar radio button options for option2, option3, and option4 */}
              </div>
            </div>
            <div className={styles.label_and_input}>
              <label>Message</label>
              <textarea
                placeholder="Your message here"
                className={styles.text_area}
                value={formData.message}
                rows={5}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <div className={styles.submit_btn}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

