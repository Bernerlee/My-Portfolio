import styles from "./Features.module.css";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import {
  FaComments,
  FaVideo,
  FaUsers,
  FaFileAlt,
  FaLaptop,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaComments />,
    title: "Instant Messaging",
    description:
      "Send messages instantly to friends and family around the world.",
  },
  {
    icon: <FaVideo />,
    title: "Voice & Video Calls",
    description:
      "Stay connected with crystal-clear voice and video communication.",
  },
  {
    icon: <FaUsers />,
    title: "Communities",
    description: "Create groups and communities for work, friends, and events.",
  },
  {
    icon: <FaFileAlt />,
    title: "File Sharing",
    description: "Share photos, videos, documents, and more in seconds.",
  },
  {
    icon: <FaLaptop />,
    title: "Cross Platform",
    description: "Use LINKSCHAT on mobile, tablet, and desktop devices.",
  },
  {
    icon: <FaLock />,
    title: "Secure Messaging",
    description: "End-to-end encryption keeps your conversations private.",
  },
];

function Features() {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className={styles.heading}>
          <h2>Everything You Need to Stay Connected</h2>

          <p>
            Powerful communication tools designed for individuals, teams, and
            communities.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.article
              key={index}
              className={styles.card}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
