import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import { PracticeGuide } from "../GuiaPracticas/PracticeGuide";
import { PracticeGuide2 } from "../GuiaPracticas/PracticeGuide2";

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />
          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="BALANCE DE POTENCIA" />
                  <h2>
                    El principio de balance de potencia indica que la potencia
                    entregada por una fuente siempre será igual a la potencia
                    consumida por los elementos resistivos del circuito.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover61} alt="" />
                  </div>
                  {/* <p>Ilustracion 1: Demodulador FM por discriminador</p> */}
                  <PracticeGuide />
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="" />
          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="MEZCLADORES PARA COMUNICACIONES" />
                  <h2>
                    Los mezcladores, también llamados diplexores, son
                    dispositivos cuya función es mezclar dos señales en una para
                    que pueda ser transmitida por un único cable.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover62} alt="" />
                  </div>
                  {/* <p>Ilustracion 17: Demodulador FM por discriminador</p> */}
                  <PracticeGuide2 />
                  {/* <BringPdf/> */}
                  {/* <button>Download CV</button> */}
                  {/* <button className="primaryBtn">More Information</button> */}
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />
          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="MEZCLADORES PARA COMUNICACIONES" />
                  <h2>
                    Los mezcladores, también llamados diplexores, son
                    dispositivos cuya función es mezclar dos señales en una para
                    que pueda ser transmitida por un único cable.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover62} alt="" />
                  </div>
                  {/* <p>Ilustracion 17: Demodulador FM por discriminador</p> */}
                  <PracticeGuide2 />
                  {/* <BringPdf/> */}
                  {/* <button>Download CV</button> */}
                  {/* <button className="primaryBtn">More Information</button> */}
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
