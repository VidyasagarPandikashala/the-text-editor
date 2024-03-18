import styles from "./Button.module.css";
function Button({ onClickEvent }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.buttonStyle} onClick={onClickEvent}>
        {" "}
        Save{" "}
      </button>
    </div>
  );
}

export default Button;
