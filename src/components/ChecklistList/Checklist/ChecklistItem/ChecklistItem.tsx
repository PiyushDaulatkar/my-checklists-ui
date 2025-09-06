import type React from "react";

import styles from "./ChecklistItem.module.css";

interface ChecklistItemProps {
  checklistItemText: string;
  onEditItem: () => void;
  onDeleteItem: () => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = (props) => {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input type="checkbox" />
        <span>{props.checklistItemText}</span>
      </label>
      <button onClick={props.onEditItem}>Edit</button>
      <button onClick={props.onDeleteItem}>Delete</button>
    </li>
  );
};

export default ChecklistItem;
