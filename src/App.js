import './App.css';
// import { NavBar } from "./components/NavBar";
// import { InterfaceCircuit } from "./components/CircuitSimulation/InterfaceCircuit";
// import { BringPdf } from './components/DataPDFOne/BringPdf';
import { Pages } from './components/pages/Pages';
import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

function App() {
   //aos
   useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <Pages />
    </>
  );
}

export default App;