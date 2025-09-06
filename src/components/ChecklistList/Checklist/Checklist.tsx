import ChecklistItem from "./ChecklistItem/ChecklistItem";

import ChecklistList from "../../../../mockdata/checkListItems.json";

function Checklist() {
  function handleEditItem(id: number) {
    console.log("Edit item with id:", id);
  }

  function handleDeleteItem(id: number) {
    console.log("Delete item with id:", id);
  }

  return (
    <ul>
      {ChecklistList.map((item) => {
        return (
          <ChecklistItem
            key={item.id}
            checklistItemText={item.text}
            onEditItem={() => handleEditItem(item.id)}
            onDeleteItem={() => handleDeleteItem(item.id)}
          />
        );
      })}
    </ul>
  );
}

export default Checklist;
