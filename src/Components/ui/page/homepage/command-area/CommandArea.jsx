import styles from "./CommandArea.module.css";
function CommandArea() {
  return (
    <div className={styles.commandAreaWrapper}>
      <div>
        <ul className={styles.list}>
          <h2 className={styles.headingStyle2}>Use following commands</h2>
          <li>
            "<span className={styles.listSpanStyle}># </span> " - to make
            heading -H1
          </li>
          <li>
            "<span className={styles.listSpanStyle}>* </span>" - to make BOLD
          </li>
          <li>
            "<span className={styles.listSpanStyle}>** </span>" - to make RED
            text
          </li>
          <li>
            "<span className={styles.listSpanStyle}>*** </span>" - to make
            UNDERLINE text
          </li>
          <li>
            "<span className={styles.listSpanStyle}>``` </span>" - to make
            CODEBLOCK text
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CommandArea;
