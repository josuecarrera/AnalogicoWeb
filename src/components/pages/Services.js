import React from "react";
import { saveAs } from "file-saver";
import { Heading } from "../common/Heading";
import { about, services } from "../data/dummydata";
import { BringPdfTwo } from "../DataPDFTwo/BringPdfTwo";

export const Services = () => {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/documents/Capitulo_2info.docx`;

    saveAs(fileUrl, "Capitulo2.docx");
  };

  const url = "https://www.youtube.com/watch?v=V6bl4VKcbKo";

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
          <button onClick={handleDownload}>Download CV</button>
          <button className="primaryBtn">More Information</button>
        </div>
      </section>

      {/* Seccion 1 */}

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title=" INTRODUCCIÓN" />
                <h2>{val.desc25}</h2>
                {/* <h2>{val.desc26}</h2> */}

                {/* <BringPdf />
                <button>Download CV</button>
              <button className="primaryBtn">More Information</button> */}
                {/* <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover11} alt="" />
                </div> */}
                <div className="img-container">
                  <img src={val.cover36} alt="" />
                </div>
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
                <h2>{val.desc27}</h2>
                <div className="img-container">
                  <img src={val.cover38} alt="" />
                </div>
                <h2>{val.desc28}</h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}

                {/* <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover12} alt="" />
                </div> */}
              </div>
            </>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="container flex"></div>
      </section>
      {/* Seccion 3 */}

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

      

      {/* Seccion 3 */}

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="OSCILADORES RETROALIMENTADOS" />
                <h2>{val.desc29}</h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                <div className="img-container">
                  <img src={val.cover13} alt="" />
                </div>
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
                <Heading title="OSCILADORES NO SINTONIZADOS (PUENTE DE WIEN)" />
                <h2>El oscilador de puente de Wien es un oscilador RC no sintonizado de corrimiento de fase, que usa retroalimentación tanto positiva como negativa. Es un circuito oscilador relativamente estable, de baja frecuencia, que se sintoniza con facilidad, y se suele usar en generadores de señal para producir frecuencias de 5 Hz a 1 MHz. Este circuito oscilador de puente de Wien fue el que utilizó la compañía Hewlett Packard en su diseño original de generador de señales.</h2>
                <div className="img-container">
                  <img src={val.cover40} alt="" />
                </div>
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
                <Heading title="OSCILADOR CON PUENTE DE WIEN " />
                <h2>El puente de Wien es un circuito electrónico compuesto por una combinación de resistencias y condensadores en serie-paralelo. Se utiliza generalmente en instrumentos de medida y generadores de señales de baja frecuencia para laboratorios y servicios de electrónica.</h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                <div className="img-container">
                  <img src={val.cover41} alt="" />
                </div>
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
                <Heading title="OSCILADORES SINTONIZADOS" />
                <h2>Los osciladores LC son circuitos osciladores que usan circuitos tanque LC para establecer la frecuencia. El funcionamiento de un circuito tanque implica intercambio de energía entre cinética y potencial. </h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                <div className="img-container">
                  <img src={val.cover42} alt="" />
                </div>
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
                <Heading title="OSCILADOR DE HARTLEY" />
                <h2>Oscilador de Hartley es un tipo de oscilador armónico que fue inventado por Ralph Hartley en 1915. Estos son los osciladores de circuito sintonizado que se utilizan para producir las ondas en el rango de radiofrecuencia y, por lo tanto, también se conocen como osciladores de RF. </h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                <div className="img-container">
                  <img src={val.cover43} alt="" />
                </div>
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
                <Heading title="OSCILADOR COLPITTS" />
                <h2>El oscilador Colpitts es un tipo de oscilador LC que cae bajo la categoría de oscilador armónico y fue inventado por Edwin Colpitts en 1918. La figura 1 muestra un oscilador típico de Colpitts con un circuito de tanque en el que un inductor L está conectado en paralelo a la combinación en serie de los condensadores C1 y C2</h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                <div className="img-container">
                  <img src={val.cover44} alt="" />
                </div>
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
                <Heading title="OSCILADORES DE CRISTAL" />
                <h2>Los osciladores a cristal presentan la ventaja de su gran exactitud y estabilidad en su frecuencia de oscilación. A lo largo de este capítulo veremos el porqué de esta estabilidad y exactitud.</h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                <h2>Cristales de cuarzo:</h2>
                <h2>Los cristales de cuarzo presentan un efecto piezoeléctrico. Cuando se les aplica una tensión alterna de frecuencia f, vibran a esta frecuencia. Inversamente, si mecánicamente se los obliga a vibrar generan una tensión alterna de la misma frecuencia</h2>
                <div className="img-container">
                  <img src={val.cover45} alt="" />
                </div>
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