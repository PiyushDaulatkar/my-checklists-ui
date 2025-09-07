import ChecklistItem from "./ChecklistItem/ChecklistItem";

import React, { useState } from "react";

interface ChecklistProps {
  checklist: {
    id: string;
    title: string;
    items: { id: string; text: string }[];
  };
}

const Checklist: React.FC<ChecklistProps> = ({ checklist }) => {
  const [ChecklistList, setChecklistList] = useState<
    { id: string; text: string }[]
  >(checklist.items);
  const [currentEditingId, setCurrentEditingId] = useState<string | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  function handleDeleteItem(id: string | null) {
    console.log("Delete item with id:", id);
    const filteredList = ChecklistList.filter((item) => item.id !== id);
    setChecklistList(filteredList);
  }

  function handleEditItem(id: string | null) {
    console.log("Edit item with id:", id);
    setCurrentEditingId(id);
  }

  function handleYesEdit(id: string, editedText: string) {
    console.log("Yes edit item with id:", id, "New text:", editedText);
    const updatedList = ChecklistList.map((item) =>
      item.id === id ? { ...item, text: editedText } : item
    );
    setChecklistList(updatedList);
    setCurrentEditingId(null);
  }

  return (
    <ul>
      <button onClick={() => setIsToggled((prev) => !prev)}>toggle</button>
      {isToggled &&
        ChecklistList.map((item) => {
          return (
            <ChecklistItem
              key={item.id}
              id={item.id}
              checklistItemText={item.text}
              currentEditingId={currentEditingId}
              onStartEdit={handleEditItem}
              onDeleteItem={handleDeleteItem}
              onConfirmEdit={handleYesEdit}
              onCancelEdit={() => setCurrentEditingId(null)}
            />
          );
        })}
    </ul>
  );
};

export default Checklist;
