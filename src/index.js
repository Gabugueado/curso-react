


// const element = document.createElement("h1"); // creamos elemento

// element.innerText = "JovenesProgramadores"; //el texto que vamos a colocar

// const container = document.getElementById("root");//creamos variable que obtienie la ID

// container.appendChild(element); // que queremos mostrar



import React  from "react";
import ReactDOM from 'react-dom';

const style = {
  color: "red"
}


function tictac(){
  const element = (
    <div>
      <h1 style={style} > Reloj en React! </h1>
      <h2>Son las {new Date().toLocaleTimeString() }. </h2>
    </div>  
  );

  const container = document.getElementById("root");
  ReactDOM.render(element, container);
}
setInterval(tictac, 1000);

