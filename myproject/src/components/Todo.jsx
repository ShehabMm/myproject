import React, { useState } from "react";

function Todo() {
    const [tasks, settasks] = useState([]);
    const [activity, setactivitiy] = useState('');

 
const handleForm = (e) => { 
    e.preventDefault()
    settasks([...tasks, activity])
    console.log(tasks);
     }

    return (
        <div>
            <form onSubmit={handleForm} action="Todo">
            <input
                onChange={(e) => {
                    setactivitiy(e.target.value);
                }}
                type="text"
            />
            <button > Add</button>
            </form>

            {tasks.map((item, index)=>{
return (
<ul key={item.index}>

    <li>{item}</li>
</ul>


)

            })}
        </div>
    );
}

export default Todo;
