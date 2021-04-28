import React, {  useState, useEffect, useRef } from "react";
import "./style.css";


export default function App() {

  const [todos,setTodo]=useState([])
  const [totalTodo,setTotalTodo]=useState(0)
  const [colors,setColors]=useState(0)
  function addTodo(todo){
    setTodo([...todos,todo]);
  }

  function deleteTodo(todo){
    var index=todos.indexOf(todo);
    todos.splice(index,1);
    setTodo([...todos])
  }

  useEffect(()=>{
    const colores =['red','green','grey','purple']
    let total= document.getElementById('total');
    for(let i=0; i<colores.length;){
      console.log(colores[i])
      total.style.color=colores[i+1];

    }
    
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
