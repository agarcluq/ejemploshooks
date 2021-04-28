import React, {  useState, useEffect, useRef } from "react";
import "./style.css";


export default function App() {

  const [todos,setTodo]=useState([])
  const [totalTodo,setTotalTodo]=useState(0)
  const [colors,setColors]=useState(0)
  function addTodo(todo){
    setTodo([...todos,todo]);
    setTotalTodo(totalTodo+1)
  }

  function deleteTodo(todo){
    var index=todos.indexOf(todo);
    todos.splice(index,1);
    setTodo([...todos])
    setTotalTodo(totalTodo-1)
  }

  useEffect(()=>{
    const colores =['red','green','grey','purple']
    let total= document.getElementById('total');
    if(colors<4){
    setColors(colors+1)
    }else{
      setColors(0)

    }

      total.style.color=colores[colors];
 
  },[totalTodo])

  return (
    <div className="app">
    <h2>Mi lista de la compra🛒</h2>

      <input type="text" id="input-todo"/>

      <button 
      onClick={() => {addTodo(document.getElementById("input-todo").value)}}>
      Añadir artículo</button>
      <p >Has añadido <span id="total">{totalTodo}</span> artículos</p>
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
