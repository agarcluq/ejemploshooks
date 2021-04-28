import React, {  useState, useEffect, useRef } from "react";
import "./style.css";
import { ProgressBar } from 'primereact/progressbar';

export default function App() {

  //Tenemos un array donde va guardar las tareas, este nos devuleve
  // un array de dos pposiciones, posición y la posición para actualizar el estado
  const [todos,addTodo]=useState([])

  function setTodo(todo){

    addTodo([...todos,todo]);
  }
  function deleteTodo(todo){
    var index=todos.indexOf(todo);
    todos.splice(index,1);
    addTodo([...todos])
  }

  useEffect(()=>{
    console.log()
  })
  return (
    <div className="App">
    <h2>Mi lista de la compra🛒</h2>
      <input type="text" id="input-todo"/>
      <button 
      onClick={() => {setTodo(document.getElementById("input-todo").value)}}>Añadir artículo</button>
      <ul>
      {todos.map(todo =>(
        <div className="todo">
          <li key={todo}>{todo}</li>
          <p onClick={() =>deleteTodo(todo)}>Eliminar</p>
          
        </div>
        ))}
      </ul>

    </div>
  );
}
