import styles from "./ChecklistItem.module.css";

function ChecklistItem() {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input type="checkbox" />
        <span>Sample Checklist Item</span>
      </label>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}

export default ChecklistItem;
