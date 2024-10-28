import React, { useState } from "react";
import Form from "./Form";
import LIst from "./LIst";

function Todo() {
const [todo, settodo]= useState("")
const [todos, settodos]=useState([])

    return (
        <div>
            <Form todo={todo} settodo={settodo}  todos={todos} settodos={settodos} />
            <LIst  todo={todo} settodo={settodo}  todos={todos} settodos={settodos}/>
        </div>
    );
}

export default Todo;
