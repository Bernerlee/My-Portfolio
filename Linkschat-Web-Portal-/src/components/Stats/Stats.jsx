import styles from "./Stats.module.css";

const stats = [
  {
    number: "50M+",
    title: "Messages Sent Daily",
  },
  {
    number: "120+",
    title: "Countries Reached",
  },
  {
    number: "99.9%",
    title: "Service Uptime",
  },
  {
    number: "24/7",
    title: "Global Support",
  },
];

function Stats() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
