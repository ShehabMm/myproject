import React from "react";
import styles from "./list.module.css";
function LIst({ settodos, todos, todo }) {
  const handledelete = (item) => {
    settodos(todos.filter((each) => each != item));
  };

  const handleline = (nam) => {
    const newArr = todos.map((to) =>
      to.name === nam ? { ...to, done: !to.done } : to
    );
    settodos(newArr);
    ;
  };

const sortedTodos= todos.sort((a,b)=>Number(a.done)-(b.done))
  return (
    <div className={styles.list}>
      {sortedTodos.map((item, i) => {
        return (
          <ul className={styles.li} key={i}>
            <li
              className={item.done ? styles.completed : ""}
              onClick={() => {
                handleline(item.name);

                
              }}
            >
              {item.name}
            </li>

            <button
              onClick={() => {
                handledelete(item);
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
