import React from "react";
import { Heading } from "../common/Heading";
// import { portfolio } from "../data/dummydata";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import { useState } from "react";
import { about } from "../data/dummydata";
import { saveAs } from "file-saver";
import { BringPdfThree } from "../DataPdfThree/BringPdfThree";

// const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

export const Portfolio = () => {
  // const [list, setLists] = useState(portfolio);
  // const [category, setCategory] = useState(allCategory);
  // console.log(setCategory);

  // const filterItems = (category) => {
  //   const newItems = portfolio.filter((item) => item.category === category);
  //   setLists(newItems);
  //   if (category === "all") {
  //     setLists(portfolio);
  //     return;
  //   }
  // };

  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/documents/Capitulo_3info.docx`;

    saveAs(fileUrl, 'Capitulo3.docx');

  }
  return (
    <>
      {/* Seccion 1 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="CAPITULO 3" />
                <Heading title="TRANSMISIÓN POR MODULACIÓN DE AMPLITUD" />
                <p>{val.desc61}</p>
                <BringPdfThree />
                <button onClick={handleDownload}>Download Word</button>
                <button className="primaryBtn">More Information</button>
              </div>
            </>
          ))}
          <div className="">
          {about.map((val) => (
            <>
              <div className="right" data-aos="fade-down-right">
                <img src={val.cover14} alt="" />
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
                <Heading title="Modulación AM" />
                {/* <p>{val.desc3}</p> */}
                <h2>{val.desc32}</h2>
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover15} alt="" />
                </div>
                {/* <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover16} alt="" />
                </div> */}
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
                <Heading title="Modulador AM" />
                {/* <p>{val.desc8}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover16} alt="" />
                </div>
                <p>Caracteristicas de un Sistema de Comunicación</p>
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
              <div className="left" >
                <Heading title="Parametros tecnicos de la comunicación por modulación" />
                {/* <p>{val.desc3}</p>
                <h2>{val.desc4}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover17} alt="" />
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
                <Heading title="Representación fasorial de Am" />
                {/* <p>{val.desc3}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                {/* <p>Ilustracion 4 Medios de transmisión</p> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover34} alt="" />
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
                <Heading title="Representacion fasorial de una onda de amplitud modulada" />
                <p>{val.desc7}</p>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover35} alt="" />
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

      {/* Seccion 5 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                {/* <Heading title="Representacion fasorial de una onda de amplitud modulada" />
                <p>{val.desc7}</p> */}
                {/* <h2>{val.desc1}</h2> */}
                {/* <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover35} alt="" />
                </div> */}
                {/* <p>Ilustracion 5 Pares trenzados</p> */}
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
                <Heading title="Cable coaxial" />
                <p>{val.desc8}</p>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover5} alt="" />
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

      {/* Seccion 7 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title="Radio enlaces de VHF y UHF" />
                <p>{val.desc9}</p>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover6} alt="" />
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
                <Heading title="Microondas" />
                <p>{val.desc10}</p>
                {/* <h2>{val.desc1}</h2> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover7} alt="" />
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
                <Heading title="Señal digital" />
                <p>{val.desc11}</p>
                <p>{val.desc12}</p>
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
                <Heading title="Señal Analógica" />
                <p>{val.desc13}</p>
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

      <section className="about">
      </section>

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
