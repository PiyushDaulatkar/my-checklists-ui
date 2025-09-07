import ChecklistItem from "./ChecklistItem/ChecklistItem";

import ChecklistListData from "../../../../mockdata/checkListItems.json";
import { useState } from "react";

function Checklist() {
  const [ChecklistList, setChecklistList] =
    useState<{ id: string; text: string }[]>(ChecklistListData);
  const [currentEditingId, setCurrentEditingId] = useState<string | null>(null);

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
      {ChecklistList.map((item) => {
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
}

export default Checklist;
