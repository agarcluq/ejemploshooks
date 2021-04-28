import React, {  useState, useEffect, useRef } from "react";
import "./style.css";

/**
 * Componente Lista de la compra
 */
export default function App() {
  // Lista de tareas/artículos
  const [todos,setTodo]=useState([])
  // Contador de tareas/artículos
  const [totalTodo,setTotalTodo]=useState(0)

  // Posición de los colores
  const [colorPosition,setColorPosition]=useState(0)

  // Añadir artículo
  const addTodo = (todo) => {
    setTodo([...todos,todo]);
    setTotalTodo(totalTodo+1)
    document.getElementById("input-todo").value='';
  }
  // Eliminar artículo
  const deleteTodo = (todo) => {
    var index=todos.indexOf(todo);
    todos.splice(index,1);
    setTodo([...todos])
    setTotalTodo(totalTodo-1)
  }

  // Efecto que depende del total de artículos
  useEffect(()=>{
    const colors =['red','green','grey','purple']
    let total= document.getElementById('total');
    if(colorPosition<colors.length){
    setColorPosition(colorPosition+1)
    }else{
      setColorPosition(0)
    }
      total.style.color=colors[colorPosition];
      console.log(totalTodo)
  },[totalTodo])

  // Efecto que depende del Primer render
  useEffect(()=>{
    console.log('Primer render')
  },[])

  // Efecto por cada cambio 
  useEffect(()=>{
    console.log('has cambiado algo')
  })

  return (
    <div className="app">
      <h2>Mi lista de la compra🛒</h2>
      <input type="text" id="input-todo"/>
      <button 
      onClick={() => {addTodo(document.getElementById("input-todo").value)}}>
      Añadir artículo</button>

      <p>Has añadido <span id="total">{totalTodo}</span> artículos</p>
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
