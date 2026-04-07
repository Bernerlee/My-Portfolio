import { useEffect } from "react";

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return function () {
        clearTimeout(timer);
      };
    }
  }, [show, onClose]);

  if (!show) return null;

  return <div style={styles.toast}>{message}</div>;
};

export default Toast;

const styles = {
  toast: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "black",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 999,
  },
};
