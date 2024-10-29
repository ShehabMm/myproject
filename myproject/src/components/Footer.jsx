import React from 'react'
import styles from './footer.module.css'
function Footer({ completed, totalTodos }) {
    return (


        <h1 className={styles.foot}> Completed Todos  {completed} <br />  Total Todos  {totalTodos}</h1>
    )
}

export default Footer