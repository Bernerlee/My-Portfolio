import styles from "./Privacy.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Privacy() {
  return (
    <section className={styles.privacy} id="privacy">
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.phone}>
            <div className={styles.lock}>🔒</div>
          </div>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span>PRIVACY FIRST</span>

          <h2>
            Your Conversations Stay Between You and the People You Choose.
          </h2>

          <p>
            LINKSCHAT uses advanced encryption technology to protect your
            messages, calls, media, and files.
          </p>

          <ul>
            <li>
              <FaCheckCircle />
              End-to-End Encryption
            </li>

            <li>
              <FaCheckCircle />
              Two-Factor Authentication
            </li>

            <li>
              <FaCheckCircle />
              Device Protection
            </li>

            <li>
              <FaCheckCircle />
              Secure Cloud Backup
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Privacy;
