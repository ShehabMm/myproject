import React from "react";
import styles from "./form.module.css";

function Form({ todo, settodo, todos, settodos }) {
  const handleForm = (e) => {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name:"", done: false });
  
  };

  return (
    <div>
      <form className={styles.todoForm} onSubmit={handleForm}>
        <input
          className={styles.modernInput}
          onChange={(e) => {
            settodo({ name: e.target.value, done: false  });
          }}
          type="text"
          placeholder="Enter Todo Item"
          value={todo.name}
        />
        <button className={styles.modernbutton}> Add</button>
      </form>
    </div>
  );
}

export default Form;
