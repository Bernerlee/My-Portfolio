import styles from "./Hero.module.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Connect Freely.
            <br />
            Chat Securely.
          </h1>

          <p>
            LINKSCHAT helps you stay connected through fast, secure and private
            messaging.
          </p>

          <div className={styles.buttons}>
            <button>Download App</button>
            <button className={styles.secondary}>Learn More</button>
          </div>
        </motion.div>

        <div className={styles.phoneMockup}>
          <motion.div
            className={styles.phone}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <div className={styles.chat}>👋 Hello there!</div>

            <div className={styles.chatRight}>Welcome to LINKSCHAT</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
