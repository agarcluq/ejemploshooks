import React, {  useState, useEffect, useRef } from "react";
import "./style.css";


export default function App() {

  const [todos,setTodo]=useState([])
  const []

  function addTodo(todo){
    setTodo([...todos,todo]);
  }

  function deleteTodo(todo){
    var index=todos.indexOf(todo);
    todos.splice(index,1);
    setTodo([...todos])
  }

  useEffect(()=>{
    console.log('hola')
  },[todo])

  return (
    <div className="app">
    <h2>Mi lista de la compra🛒</h2>

      <input type="text" id="input-todo"/>

      <button 
      onClick={() => {addTodo(document.getElementById("input-todo").value)}}>
      Añadir artículo</button>

      <ul>
      {todos.map(todo =>(
        <div className="todoContainer">
          <li className="todoItem" key={todo}>{todo}</li>
          <button className="todoButton" onClick={() => deleteTodo(todo)}>x</button>          
        </div>
        ))}
      </ul>

    </div>
  );
}
