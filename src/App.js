import React, { useState } from "react";
import "./style.css";

export default function App() {
  const word='patata';
  const winBoolean=false;
  const [win,seTwin]=useState(false)
  const [countPoint,setCountPoint]=useState(0);
  return (
    <div>
      <h1>{countPoint}</h1>
      <p>
      {win ? 'Ganador' :'Perdedor'}</p>
      <input type="text" name="letra" id="letra"/>
      <button onClick={()=>{
        setCountPoint(countPoint+1)
      }}>Enviar</button>

    </div>
  );
}
