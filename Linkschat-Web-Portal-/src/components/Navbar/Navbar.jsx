import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import linkschatlogo from "../../assets/linkschatlogo.png";

function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <div className={styles.logo}>
          <img
            src={linkschatlogo}
            alt="LINKSCHAT Logo"
            className={styles.logoImage}
          />
          <span>LINKSCHAT</span>
        </div>

        <nav className={styles.navLinks}>
          <a
            href="#features"
            className={active === "features" ? styles.active : ""}
            onClick={() => setActive("features")}
          >
            Features
          </a>

          <a
            href="#privacy"
            className={active === "privacy" ? styles.active : ""}
            onClick={() => setActive("privacy")}
          >
            Privacy
          </a>

          <a
            href="#communities"
            className={active === "communities" ? styles.active : ""}
            onClick={() => setActive("communities")}
          >
            Communities
          </a>
        </nav>

        <button
          aria-label="Download LINKSCHAT app"
          className={styles.downloadBtn}
        >
          Download
        </button>

        <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#">Features</a>
          <a href="#">Privacy</a>
          <a href="#">Communities</a>
          <a href="#">Download</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
