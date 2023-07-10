import React from "react";
import { about } from "../data/dummydata";
import { saveAs } from "file-saver";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "../common/Heading";
import { BringPdf } from "../DataPDFOne/BringPdf";

export const Testimonials = () => {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/documents/Capitulo_1info.docx`;

    saveAs(fileUrl, "Capitulo1.docx");
  };
  return (
    <>
      {/* Seccion 1 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="CAPITULO 4" />
                <Heading title="1.	Modulación por frecuencia analógica (FM)" />
                <p>{val.desc37}</p>
                <BringPdf />
                <button onClick={handleDownload}>Download Word</button>
                <button className="primaryBtn">More Information</button>
              </div>
            </>
          ))}
          <div className="">
            {about.map((val) => (
              <>
                <div className="right" data-aos="fade-down-right">
                  <img src={val.cover18} alt="" />
                  {/* <p>{val.desc1}</p> */}
                  {/* <p>{val.desc2}</p> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* Seccion 2 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Aplicaciones de FM" />
                <h2>{val.desc39}</h2>
                <h2>{val.desc40}</h2>
                <h2>{val.desc41}</h2>
                <h2>{val.desc42}</h2>
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover19} alt="" />
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
                <Heading title="Modulación angular" />
                <h2>{val.desc45}</h2>
                {/* <h2>{val.desc46}</h2>
                <h2>{val.desc47}</h2>
                <h2>{val.desc48}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover20} alt="" />
                </div>
                {/* <p>Ilustración 1 Historia de las telecomunicaciones</p> */}

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
              <Heading title="Modulación directa de fase (PM) " />
              <div className="left" data-aos="fade-down-left">
                {/* <p>{val.desc46}</p> */}
                <h2>{val.desc46}</h2>
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover21} alt="" />
                </div>
                <p>Ilustración 3 Elementos de un sistema de comunicacion</p>
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
                <Heading title="Análisis en frecuencia de las ondas  con  modulación angular" />

                <h2>{val.desc48}</h2>
                <p>Ilustracion 4 Medios de transmisión</p>
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover23} alt="" />
                </div>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 6 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Ancho mínimo de banda" />
                <p>{val.desc49}</p>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover24} alt="" />
                </div>
                <p>Ilustracion 6 Cable Coaxial</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 5 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Etapas de un modulador por frecuencia analógico" />
                <h2>{val.desc50}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover25} alt="" />
                </div>
                <p>Ilustracion 5 Pares trenzados</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 7 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Moduladores" />
                <h2>{val.desc51}</h2>
                <h2>{val.desc52}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover26} alt="" />
                </div>
                <p>Ilustracion 7 Radio Enlace</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 8 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Moduladores de diodo varactor" />
                <h2>{val.desc53}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover27} alt="" />
                </div>
                <p>Ilustracion 8 Microondas</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 10 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Transmisores" />
                <h2>{val.desc54}</h2>
                <h2>{val.desc55}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover28} alt="" />
                </div>
                <p>Ilustracion 8 Microondas</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 10 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Transmisor directo de FM de Crosby" />
                <h2>{val.desc56}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover27} alt="" />
                </div>
                <p>Ilustracion 8 Microondas</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 9 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Moduladores indirectos" />
                {/* <p>{val.desc11}</p> */}
                <h2>{val.desc57}</h2>
                <h2>{val.desc58}</h2>
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover30} alt="" />
                </div>
                {/* <p>Ilustracion 8 Microondas</p> */}
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 10 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Transmisores de FM indirectos" />
                <h2>{val.desc59}</h2>
                {/* <p>{val.desc12}</p> */}
                {/* <h2>{val.desc1}</h2> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 11*/}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Transmisor FM indirecto de Armstrong" />
                <h2>{val.desc60}</h2>
                {/* <p>{val.desc14}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover31} alt="" />
                </div>
                {/* <p>Ilustracion 9 Señal Analógica</p> */}
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 12 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="EJEMPLOS DE SOLUCIONES EN EL DISEÑO DE SISTEMAS DE COMUNICACIÓN" />
                <Heading title="Comunicaciones Satelitales" />
                <h2>{val.desc15}</h2>
                <Heading title="Comunicaciones de microondas" />
                <h2>{val.desc16}</h2>
                <Heading title="Telefonía celular" />
                <h2>{val.desc17}</h2>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 13 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="MODELO BÁSICO DE TELECOMUNICACIONES" />
                <Heading title="Sistema básico de comunicación" />
                <Heading title="Modelo de un Sistema de Comunicaciones:" />
                <h2>{val.desc18}</h2>
                <h2>{val.desc19}</h2>
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover10} alt="" />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>

      <section className="about"></section>

      {/* Seccion 14 */}

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="ELEMENTOS DEL SISTEMA" />
                <h2>{val.desc20}</h2>

                <Heading title="El Transmisor" />
                <p>{val.desc21}</p>
                <Heading title="El Canal" />
                <p>{val.desc22}</p>
                <Heading title="Receptor" />
                <p>{val.desc23}</p>
                <Heading title="El Mensaje" />
                <p>{val.desc24}</p>
                {/* <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover10} alt="" />
                </div> */}
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
