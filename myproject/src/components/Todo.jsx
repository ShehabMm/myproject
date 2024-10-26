import React, { useState } from "react";
import Form from "./Form";
import LIst from "./LIst";

function Todo() {
    const [tasks, settasks] = useState([]);
    const [activity, setactivitiy] = useState('');



    return (
        <div>
            <Form tasks={tasks} settasks={settasks} activity={activity}  setactivitiy={setactivitiy} />
            <LIst  tasks={tasks}  settasks={settasks} activity={activity}  setactivitiy={setactivitiy} />
        </div>
    );
}

export default Todo;
