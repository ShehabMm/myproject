import React, { useState } from "react";
import Form from "./Form";
import LIst from "./LIst";

function Todo() {
    const [tasks, settasks] = useState([]);




    return (
        <div>
            <Form tasks={tasks} settasks={settasks}   />
            <LIst  tasks={tasks}  />
        </div>
    );
}

export default Todo;
