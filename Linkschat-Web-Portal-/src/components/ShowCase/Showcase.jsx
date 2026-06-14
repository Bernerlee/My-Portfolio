import styles from "./Showcase.module.css";

function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.heading}>
          <h2>Messaging Designed For Modern Conversations</h2>

          <p>Fast, secure, and beautifully simple.</p>
        </div>

        <div className={styles.phones}>
          <div className={styles.phone}>
            <div className={styles.message}>Hey 👋</div>

            <div className={styles.reply}>What's up?</div>
          </div>

          <div className={styles.phone}>
            <div className={styles.message}>Team meeting at 2pm</div>

            <div className={styles.reply}>I'll be there 👍</div>
          </div>

          <div className={styles.phone}>
            <div className={styles.message}>New photos uploaded</div>

            <div className={styles.reply}>Awesome 🔥</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
