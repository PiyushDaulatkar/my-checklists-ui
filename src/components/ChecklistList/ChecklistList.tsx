import Checklist from "./Checklist/Checklist";

import styles from "./ChecklistList.module.css";
import ChecklistListData from "../../../mockdata/checkListItems.json";

function ChecklistList() {
  return (
    <ul>
      {ChecklistListData.todoLists.map((checklist) => (
        <div key={checklist.id} className={styles.parentList}>
          <p>{checklist.title}</p>
          <Checklist checklist={checklist} />
        </div>
      ))}
    </ul>
  );
}

export default ChecklistList;
