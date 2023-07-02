import React from "react";
import { InterfaceCircuit } from "../CircuitSimulation/InterfaceCircuit";
import { Heading } from "../common/Heading";


export const Contact = () => {
  return (
    <>
     <Heading title="Simulador de Circuitos" />
      <InterfaceCircuit/>
    </>
  );
};
