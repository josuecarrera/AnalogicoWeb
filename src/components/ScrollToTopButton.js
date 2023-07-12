import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Función que se ejecuta al hacer scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Función para regresar a la parte superior de la pantalla
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Agregar el event listener al montar el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          Regresar arriba
        </button>
      )}
    </>
  );
}
