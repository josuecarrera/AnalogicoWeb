import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../data/dummydata";
import { BringPdfTwo } from "../DataPDFTwo/BringPdfTwo"

export const Services = () => {
  return (
    <>
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
    </>
  );
};
