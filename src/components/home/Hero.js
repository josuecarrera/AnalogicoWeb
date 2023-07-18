import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect"


export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContent">
            <h3 className="fontSize">{val.text}</h3>
            <h1>
                <Typewriter 
                    options={{
                        strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <p data-aos='fade-left'>Integrantes: </p>
            <h2 data-aos='fade-left'>Jessica López</h2>
            <h2 data-aos='fade-left'>Josue Carrera</h2>
            <h2 data-aos='fade-left'>Mateo Llerena</h2>
            <h2 data-aos='fade-left'>Christian Morales</h2>
            {/* <BringPdf/> */}
            {/* <button className="primaryBtn" data-aos='fade-up-right'>
                Dowload CV
            </button> */}
          </div>
        ))}
      </section>
    </>
  );
};
