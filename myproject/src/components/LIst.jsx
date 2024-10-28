import React from "react";
import styles from "./list.module.css";
function LIst({ settodos, todos, todo }) {
  const handledelete = (item) => {
    settodos(todos.filter((each) => each != item));
  };

  return (
    <div className={styles.list}>
      {todos.map((item, i) => {
        return (
          <ul className={styles.li} key={i}>
            <li>{item}</li>

            <button
              onClick={() => {
                handledelete(item);
                console.log("deleted");
              }}
              className={styles.mobutton}
            >
              x
            </button>
          </ul>
        );
      })}
    </div>
  );
}

export default LIst;
