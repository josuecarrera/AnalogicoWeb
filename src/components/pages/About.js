import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import { BringPdf } from "../DataPDFOne/BringPdf";

export const About = () => {
  return (
    <>
  {/* Seccion 1 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="INTRODUCCIÓN A LOS SISTEMAS DE COMUNICACIONES ELECTRÓNICAS" />
                <p>{val.desc}</p>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
              </div>
            </>
          ))}
        </div>

        <div className="">
          {about.map((val) => (
            <>
              <div className="right" data-aos="fade-down-right">
                <p>{val.desc1}</p>
                <img src={val.cover} alt="" />
                <p>{val.desc2}</p>
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
                <Heading title="De lo analógico a lo digital" />
                <p>{val.desc3}</p>
                <h2>{val.desc4}</h2>
                <div className="img-container"  data-aos="fade-down-right" >
                  <img src={val.cover1} alt="" />
                </div>
                {/* <p>Ilustración 1 Historia de las telecomunicaciones</p> */}

                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
                <Heading title="ELEMENTOS DE UN SISTEMA DE COMUNICACIÓN" />
                {/* <p>{val.desc}</p>
                <h2>{val.desc1}</h2> */}
                <div className="img-container"  data-aos="fade-down-right" >
                  <img src={val.cover2} alt="" />
                </div>
                <p>Ilustración 1 Historia de las telecomunicaciones</p>

                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
              </div>

            </>
          ))}
        </div>
      </section>

{/* Seccion 4 */}

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="MEDIOS DE TRANSMISIÓN" />
                <p>{val.desc6}</p>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container"  data-aos="fade-down-right" >
                  <img src={val.cover3} alt="" />
                </div>
                <p>Ilustración 1 Historia de las telecomunicaciones</p>
                <BringPdf/>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>

            </>
          ))}
        </div>
      </section>
    </>
  );
};
