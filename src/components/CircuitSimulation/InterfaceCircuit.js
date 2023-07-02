import React from "react";

export const InterfaceCircuit = () => {
    const url = 'https://www.lushprojects.com/circuitjs/circuitjs.html';
  
    return (
      <div className="containerInterface">
        <iframe src={url} title="Interfaz de Otra Página" width="950" height="650"></iframe>
      </div>
    );
  }
  