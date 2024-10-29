import React, { useState } from "react";
import Form from "./Form";
import LIst from "./LIst";
import Footer from './Footer'

function Todo() {
const [todo, settodo]= useState({name:"", done:false})
const [todos, settodos]=useState([])
const completed = todos.filter((iit)=>iit.done).length
const totalTodos= todos.length
    return (
        <div>

            <Form todo={todo} settodo={settodo}  todos={todos} settodos={settodos} />
            <LIst  todo={todo} settodo={settodo}  todos={todos} settodos={settodos}/>
            <Footer  completed={completed}  totalTodos={totalTodos}  />

        </div>
    );
}

export default Todo;
