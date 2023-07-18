import React from "react";
import { about } from "../data/dummydata";
import { saveAs } from "file-saver";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "../common/Heading";
import { BringPdfFour } from "../DataPDFFour/BringPdfFour";

export const Testimonials = () => {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/documents/Capitulo_4info.docx`;

    saveAs(fileUrl, "Capitulo4.docx");
  };

  const url = "https://www.youtube.com/watch?v=RQ_Z6uMhLUo";
  return (
    <>
      {/* Seccion 1 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="CAPITULO 4" />
                <Heading title="1.MODULACIÓN POR FRECUENCIA ANALÓGICA (FM)" />
                <h2>{val.desc37}</h2>
                <BringPdfFour />
                <button onClick={handleDownload}>Download Word</button>
              </div>
            </>
          ))}
          <div className="">
            {about.map((val) => (
              <>
                <div className="right">
                  <img src={val.cover18} alt="" />
                  {/* <p>{val.desc1}</p> */}
                  {/* <p>{val.desc2}</p> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <div className="img-container">
                  <img src={val.cover39} alt="" />
                </div>
                {/* <p>Ilustración 1 Historia de las telecomunicaciones</p> */}

                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
              </div>
            </>
          ))}
        </div>
      </section>
      {/*  */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      {/* Seccion 2 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="APLICACIONES DE FM" />
                <h2>{val.desc39}</h2>
                <h2>{val.desc40}</h2>
                <h2>{val.desc41}</h2>
                <h2>{val.desc42}</h2>
                <p>Ilustración 3: Aplicaciones de FM</p>
                <div className="img-container">
                  <img src={val.cover19} alt="" />
                </div>

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
                <Heading title="MODULACIÓN ANGULAR" />
                <h2>{val.desc45}</h2>
                {/* <h2>{val.desc46}</h2>
                <h2>{val.desc47}</h2>
                <h2>{val.desc48}</h2> */}
                <p>Ilustración 4: Modulación angular</p>
                <div className="img-container">
                  <img src={val.cover20} alt="" />
                </div>

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
              <Heading title="MODULACIÓN DIRECTA DE FASE (PM)" />
              <div className="left" data-aos="fade-down-left">
                {/* <p>{val.desc46}</p> */}
                <h2>{val.desc46}</h2>
                <div className="img-container">
                  <img src={val.cover21} alt="" />
                </div>
                <p>Ilustración 5: Modulación directa de fase (PM)</p>
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
                <Heading title="ANÁLISIS EN FRECUENCIA DE LAS ONDAS CON MODULACIÓN ANGULAR" />

                <h2>{val.desc48}</h2>
                <p>Ilustracion 6: Modulación Angular</p>
                <div className="img-container">
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

      {/* VIDEO*/}
      <section className="about">
        <div className="container flex">
          <div>
            <Heading title="Video" />
            <iframe
              title="unique title"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}`}
              width="900"
              height="550"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Seccion 6 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="ANCHO MÍNIMO DE BANDA" />
                <h2>{val.desc49}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <p>Ilustracion 7: Ancho de banda</p>
                <div className="img-container">
                  <img src={val.cover24} alt="" />
                </div>
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
                <Heading title="ETAPAS DE UN MODULADOR POR FRECUENCIA ANALÓGICO" />
                <h2>{val.desc50}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container">
                  <img src={val.cover25} alt="" />
                </div>
                <p>Ilustracion 8: Etapas Frecuencia Analógico</p>
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
                <Heading title="MODULADORES" />
                <h2>{val.desc51}</h2>
                <h2>{val.desc52}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container">
                  <img src={val.cover26} alt="" />
                </div>
                <p>Ilustracion 9: Moduladores</p>
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
                <Heading title="MODULADORES DE DIODO VARACTOR" />
                <h2>{val.desc53}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container">
                  <img src={val.cover27} alt="" />
                </div>
                <p>Ilustracion 10: Moduladores de diodo varactor</p>
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
                <Heading title="TRANSMISORES" />
                <h2>{val.desc54}</h2>
                <h2>{val.desc55}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container">
                  <img src={val.cover28} alt="" />
                </div>
                <p>Ilustracion 11 Transmisores</p>
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
                <Heading title="TRANSMISOR DIRECTO DE FM DE CROSBY" />
                <h2>{val.desc56}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container">
                  <img src={val.cover27} alt="" />
                </div>
                <p>Ilustracion 12: Transmisor directo de FM de Crosby</p>
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
                <Heading title="MODULADORES INDIRECTOS" />
                {/* <p>{val.desc11}</p> */}
                <h2>{val.desc57}</h2>
                <h2>{val.desc58}</h2>
                <div className="img-container">
                  <img src={val.cover30} alt="" />
                </div>
                <p>Ilustracion 13: Moduladores indirectos</p>
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
                <Heading title="TRANSMISORES DE FM INDIRECTOS" />
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
                <Heading title="TRANSMISOR FM INDIRECTO DE ARMSTRONG" />
                <h2>{val.desc60}</h2>
                {/* <p>{val.desc14}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container">
                  <img src={val.cover31} alt="" />
                </div>
                <p>Ilustracion 14: Transmisor FM indirecto de Armstrong</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      {/* Seccion 12*/}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="DEMODULACIÓN FM" />
                <h2>
                  Si recordamos lo visto en clase, FM se define como una
                  modulación angular, concretamente una modulación en
                  frecuencia; esto es, mediante variaciones en la frecuencia de
                  la portadora se puede codificar la señal analógica para
                  transmitir la información.{" "}
                </h2>
                <h2>
                  La red más simple para la demodulación de FM consiste en un
                  diferenciador ideal seguido de un detector de envolvente. Bajo
                  la suposición de que la entrada al diferenciador es una onda
                  de FM de amplitud constante (en caso contrario se utiliza un
                  limitador pasa banda) su salida es una onda modulada en
                  amplitud y frecuencia.{" "}
                </h2>
                {/* <p>{val.desc14}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container">
                  <img src={val.cover58} alt="" />
                </div>
                <p>Ilustracion 15: Demodulación FM</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 13*/}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="DEMODULACIÓN CON GNURADIO Y HACKRF" />
                <h2>
                  Las modulaciones FM pueden modelarse del mismo modo que las de
                  PM, pero con un integrador a la entrada de la señal
                  moduladora; o con un VCO realimentado (PLL), lo que minimiza
                  el error, pero vuelve el circuito más caro. No obstante, nos
                  interesa saber cómo demodular, pues de la difusión de radio
                  nos llega ya la señal modulada en FM.
                </h2>
                <h2>Para demodular una señal FM tenemos dos opciones:</h2>
                <h2>
                  • Discriminador reactivo: conseguimos que la señal de salida
                  aparezca modulada en amplitud (AM) y aplicamos un detector de
                  envolvente.{" "}
                </h2>
                <h2>
                  • Detector de fase con PLL: Primeramente, debemos conocer el
                  espectro de la radio FM, comprendido entre los 85 MHz y los
                  107 MHz aproximadamente. Cada uno de los canales de radio FM
                  suelen tener un ancho de banda alrededor de los 200 KHz para
                  evitar interferencias entre ellas (cada emisora no suele
                  ocupar más ancho de banda que 80 KHz){" "}
                </h2>

                <div className="img-container">
                  <img src={val.cover59} alt="" />
                </div>
                <p>Ilustracion 16: Demodulación con GNURADIO y HACKRF</p>
                {/* <BringPdf/> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">More Information</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 14*/}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="DEMODULADOR FM POR DISCRIMINADOR" />
                <h2>
                  Detector clásico de FM, consiste en derivar la señal con
                  respecto al tiempo y obtener la señal original más una señal
                  modulada en AM.
                </h2>
                <div className="img-container">
                  <img src={val.cover60} alt="" />
                </div>
                <p>Ilustracion 17: Demodulador FM por discriminador</p>
                {/* <BringPdf/> */}
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

// Función auxiliar para obtener el ID del video de YouTube
const getYouTubeVideoId = (videoUrl) => {
  // Extrae el ID del video de la URL de YouTube
  const regExp =
    /^(?:(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/|www\.youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
  const match = videoUrl.match(regExp);
  return match && match[1];
};
