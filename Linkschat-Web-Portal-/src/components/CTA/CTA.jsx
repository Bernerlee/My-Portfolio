import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <h2>Ready To Start Chatting?</h2>

        <p>Join millions of users connecting through LINKSCHAT.</p>

        <div className={styles.buttons}>
          <button>Download for Android</button>
          <button>Download for iOS</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
