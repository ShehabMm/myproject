import React, { useState } from 'react'

function Todo() {

    const [tasks, settasks]=useState("")
    console.log(tasks);
  return (
    <div>
        
<form action="Todo"></form>
<input onChange={(e)=>{

settasks(e.target.value)

}}  type="text" />
<button    type='submit'>Add</button>

    </div>
  )
}

export default Todo