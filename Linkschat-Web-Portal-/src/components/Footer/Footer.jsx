import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3>LINKSCHAT</h3>
            <p>Secure communication for everyone.</p>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>

          <div>
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#">Help</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="https://linkschat.unaux.com" target="_blank">
              Privacy policy
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          © 2026 LINKSCHAT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
