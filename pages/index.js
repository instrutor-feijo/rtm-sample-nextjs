import styles from "./index.module.css";
const Cover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.coverChild} />
      <div className={styles.coverItem} />
      <div className={styles.edgeFunctions}>Edge Functions</div>
      <div className={styles.realTimeManager}>Real Time Manager</div>
    </div>
  );
};

export default Cover;
