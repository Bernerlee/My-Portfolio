import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops!</h1>

      <p style={styles.text}>Something went wrong or the page doesn’t exist.</p>

      {error && <p style={styles.error}>{error.statusText || error.message}</p>}

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  error: {
    color: "red",
    marginBottom: "20px",
  },

  button: {
    textDecoration: "none",
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
  },
};
