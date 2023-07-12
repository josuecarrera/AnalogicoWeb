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
                <div className="img-container" data-aos="fade-down-right">
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
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover38} alt="" />
                </div>
                <h2>{val.desc28}</h2>
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
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                {/* <Heading title="OSCILADORES RETROALIMENTADOS" />
                <p>{val.desc29}</p> */}
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                {/* <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover13} alt="" />
                </div> */}
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
