import React from 'react'
import  { useState } from "react";
import styles from './form.module.css'

function Form({ tasks, settasks, }) {
    const handleForm = (e) => {
        e.preventDefault()
        settasks([...tasks, activity])
        console.log(tasks);
        setactivitiy("")
    }
    const [activity, setactivitiy] = useState('');

    return (
        <div>

            <form className={styles.todoForm}  onSubmit={handleForm} action="Todo">
                <input className={styles.modernInput}
                    onChange={(e) => {
                        setactivitiy(e.target.value);
                    }}
                    type="text"
                    value={activity}
                    placeholder='enter todo item'
                />
                <button className={styles.modernbutton} > Add</button>
            </form>


        </div>
    )
}

export default Form