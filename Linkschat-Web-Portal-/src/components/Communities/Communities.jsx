import styles from "./Communities.module.css";

function Communities() {
  return (
    <section className={styles.communities} id="communities">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.image}>
          <div className={styles.circle}></div>
        </div>

        <div className={styles.content}>
          <span>COMMUNITIES</span>

          <h2>Bring People Together In One Place</h2>

          <p>
            Whether you're running a business, managing a school, organizing
            events, or building a community, LINKSCHAT helps everyone stay
            connected.
          </p>

          <button>Learn More →</button>
        </div>
      </div>
    </section>
  );
}

export default Communities;
