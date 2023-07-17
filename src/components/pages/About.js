import React from "react";
import { saveAs } from "file-saver";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import { BringPdf } from "../DataPDFOne/BringPdf";
import { PracticeGuide } from "../GuiaPracticas/PracticeGuide";

export const About = () => {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/documents/Capitulo_1info.docx`;

    saveAs(fileUrl, "Capitulo1.docx");
  };

  const url = "https://www.youtube.com/watch?v=HcTfsLz_p3Y";

  return (
    <>
      {/* Seccion 1 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="CAPÍTULO 1" />
                <Heading title="INTRODUCCIÓN A LOS SISTEMAS DE COMUNICACIONES ELECTRÓNICAS" />
                <h2>{val.desc}</h2>
                <BringPdf />
                <button onClick={handleDownload}>Download Word</button>
                <PracticeGuide />
              </div>
            </>
          ))}
          <div className="">
            {about.map((val) => (
              <>
                <div className="right" data-aos="fade-down-right">
                  <img src={val.cover} alt="" />
                  {/* <p>{val.desc1}</p> */}
                  <p>{val.desc2}</p>
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
                <Heading title="DE LO ANALÓGICO A LO DIGITAL" />
                <h2>{val.desc3}</h2>
                <p>{val.desc4}</p>
                <div className="img-container">
                  <img src={val.cover1} alt="" />
                </div>
                <div className="img-container">
                  <img src={val.cover32} alt="" />
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
                <Heading title="CARACTERÍSTICAS DESEABLES DE UN SISTEMA DE COMUNICACIÓN" />
                {/* <p>{val.desc8}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                <p>
                  Ilustración 2: Características de un Sistema de Comunicación
                </p>
                <div className="img-container">
                  <img src={val.cover33} alt="" />
                </div>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
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
                <Heading title="ELEMENTOS DE UN SISTEMA DE COMUNICACIÓN" />
                {/* <p>{val.desc3}</p>
                <h2>{val.desc4}</h2> */}
                <div className="img-container">
                  <img src={val.cover2} alt="" />
                </div>
                <p>Ilustración 3 Elementos de un sistema de comunicación</p>

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
                <h2>{val.desc6}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <p>Ilustración 4 Medios de transmisión</p>
                <div className="img-container">
                  <img src={val.cover3} alt="" />
                </div>
                <div className="img-container">
                  <img src={val.cover37} alt="" />
                </div>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="about">
        <div className="container flex">
          <div>
            <Heading title="Video" />
            <h2>INTRODUCCIÓN A LAS COMUNICACIONES ANALOGICAS</h2>
            <iframe
              title="unique title"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}`}
              width="900"
              height="550"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Seccion 5 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Pares trenzados" />
                <h2>{val.desc7}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover4} alt="" />
                </div>
                <p>Ilustración 5 Pares trenzados</p>
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
                <Heading title="CABLE COAXIAL" />
                <h2>{val.desc8}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover5} alt="" />
                </div>
                <p>Ilustración 6 Cable Coaxial</p>
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
                <Heading title="RADIO ENLACES DE VHF Y UHF" />
                <h2>{val.desc9}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover6} alt="" />
                </div>
                <p>Ilustración 7 Radio Enlace</p>
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
                <Heading title="MICROONDAS" />
                <h2>{val.desc10}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover7} alt="" />
                </div>
                <p>Ilustración 8 Microondas</p>
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
                <Heading title="COMUNICACIÓN DIGITAL VS SEÑAL ANALÓGICA" />
                {/* <p>{val.desc11}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover8} alt="" />
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
                <Heading title="SEÑAL DIGITAL" />
                <hh2>{val.desc11}</hh2>
                <hh2>{val.desc12}</hh2>
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
                <Heading title="SEÑAL ANALÓGICA" />
                <h2>{val.desc13}</h2>
                {/* <p>{val.desc14}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover9} alt="" />
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
                <Heading title="COMUNICACIONES SATELITALES" />
                <h2>{val.desc15}</h2>
                <Heading title="COMUNICACIONES DE MICROONDAS" />
                <h2>{val.desc16}</h2>
                <Heading title="TELEFONÍA CELULAR" />
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
                <Heading title="SISTEMA BÁSICO DE COMUNICACIÓN" />
                <Heading title="MODELO DE UN SISTEMA DE COMUNICACIONES:" />
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

                <Heading title="EL TRANSMISOR" />
                <h2>{val.desc21}</h2>
                <Heading title="EL CANAL" />
                <h2>{val.desc22}</h2>
                <Heading title="RECEPTOR" />
                <h2>{val.desc23}</h2>
                <Heading title="EL MENSAJE" />
                <h2>{val.desc24}</h2>
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

// Función auxiliar para obtener el ID del video de YouTube
const getYouTubeVideoId = (videoUrl) => {
  // Extrae el ID del video de la URL de YouTube
  const regExp =
    /^(?:(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/|www\.youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
  const match = videoUrl.match(regExp);
  return match && match[1];
};
