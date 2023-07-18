import React from "react";
import { InterfaceCircuit } from "../CircuitSimulation/InterfaceCircuit";
import { Heading } from "../common/Heading";


export const Contact = () => {
  const openNewTab = () => {
    window.open('https://utaedu-my.sharepoint.com/:f:/g/personal/jcarrera2089_uta_edu_ec/EkSuJAa99ltAlr_VbjPJsMoBNDJAAj2cxS0ziify6m_Hig?e=yCmOUo', '_blank');
  };

  const openNewTabBoton = () => {
    window.open('https://utaedu-my.sharepoint.com/:f:/g/personal/jcarrera2089_uta_edu_ec/EqV7lU4-kbtGv-7C1tdocZgB0HO0GcOoGlc6De5J1JekPg?e=0QgzPs', '_blank');
  };
  return (
    <>
     <Heading title="Simulador de Circuitos" />
      <InterfaceCircuit/>

      {/* Seccion 2 */}
      <div className="left" data-aos="fade-down-left">

          {/* <button>Download CV</button> */}
          <button className="primaryBtn" onClick={openNewTab}>LIBROS</button>
          <button className="primaryBtn" onClick={openNewTabBoton}>SOFTWARE</button>

      </div>
        
       
  
    </>
  );
};
