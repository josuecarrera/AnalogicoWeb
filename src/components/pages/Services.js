import React from "react";
import { Heading } from "../common/Heading";
import { about, services } from "../data/dummydata";
import { BringPdfTwo } from "../DataPDFTwo/BringPdfTwo";

export const Services = () => {
  return (
    <>
      <Heading title="CAPITULO 2" />
      <section className="services">
        <div className="container">
          <Heading title="GENERADORES DE SEÑALES" />
          <div className="content grid3">
            {services.map((item) => (
              <div className="box" data-aos="flip-left">
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <BringPdfTwo />
        </div>
      </section>

      {/* Seccion 1 */}

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title=" INTRODUCCIÓN" />
                <p>{val.desc25}</p>
                <p>{val.desc26}</p>
               
                {/* <BringPdf />
                <button>Download CV</button>
              <button className="primaryBtn">More Information</button> */}
                {/* <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover11} alt="" />
                </div> */}
              </div>
            </>
          ))}
        </div>
      </section>

  

      {/* Seccion 2 */}

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="OSCILADORES" />
                <p>{val.desc27}</p>
                <p>{val.desc28}</p>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover12} alt="" />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      {/* Seccion 3 */}

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="OSCILADORES RETROALIMENTADOS" />
                <p>{val.desc29}</p>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover13} alt="" />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      
    </>
  );
};
