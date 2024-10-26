import React from "react";
import styles from "./list.module.css";
function LIst({ tasks, settasks, activity, setactivitiy }) {


  const handledelete = (item) => {

       settasks( tasks.filter((task)=>task!==item))

  }

  return (
    <div className={styles.list}>
      {tasks.map((item, i) => {
        return (
          <div >
            <ul className={styles.li} key={i}>
              <div className={styles.container}>
                <h2>{item}</h2>

                <button onClick={() => {
                  handledelete(item)
                  console.log('deleted');

                }} className={styles.mobutton}>x</button>
                <hr style={{ border: "0.8px solid black" }} />
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default LIst;
