import React from 'react'
import styles from './form.module.css'

function Form({ todo,settodo , todos, settodos}) {
    const handleForm = (e) => {
        e.preventDefault()
        settodos([...todos, todo])
       
        settodo("")
    }


    return (
        <div>

            <form className={styles.todoForm}  onSubmit={handleForm} >
                <input className={styles.modernInput}
                    onChange={(e) => {
                        settodo(e.target.value);
                    }}
                    type="text"
                    value={todo}
                    placeholder='Enter Todo Item'
                />
                <button className={styles.modernbutton} > Add</button>
            </form>


        </div>
    )
}

export default Form