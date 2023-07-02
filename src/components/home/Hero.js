import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect"
import { BringPdf } from "../DataPDFOne/BringPdf";


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
            <p data-aos='fade-left'>{val.desc}</p>
            <BringPdf/>
            {/* <button className="primaryBtn" data-aos='fade-up-right'>
                Dowload CV
            </button> */}
          </div>
        ))}
      </section>
    </>
  );
};
