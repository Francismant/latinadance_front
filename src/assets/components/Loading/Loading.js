import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className="df jcc aic flex-fill">
      <i className={`fas fa-spinner ${styles.spinner}`}></i>
    </div>
  );
}