import type React from "react";

import styles from "./ChecklistItem.module.css";
import { useState } from "react";

interface ChecklistItemProps {
  id: string;
  checklistItemText: string;
  currentEditingId: string | null;
  onStartEdit: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onConfirmEdit: (id: string, editedText: string) => void;
  onCancelEdit: () => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = (props) => {
  const isCurrentEditing = props.currentEditingId === props.id;
  const [editedText, setEditedText] = useState(props.checklistItemText);

  function handleConfirmEdit(id: string) {
    props.onConfirmEdit(id, editedText);
  }

  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input type="checkbox" />
        {!isCurrentEditing ? (
          <span>{props.checklistItemText}</span>
        ) : (
          <input
            type="text"
            defaultValue={props.checklistItemText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        )}
      </label>
      {isCurrentEditing ? (
        <>
          <button onClick={() => handleConfirmEdit(props.id)}>Yes</button>
          <button onClick={() => props.onCancelEdit()}>No</button>
        </>
      ) : (
        <>
          <button
            disabled={props.currentEditingId !== null}
            onClick={() => props.onStartEdit(props.id)}
          >
            Edit
          </button>
          <button
            disabled={props.currentEditingId !== null}
            onClick={() => props.onDeleteItem(props.id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default ChecklistItem;
