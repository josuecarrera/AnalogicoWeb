import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  return (
    <>
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
                <h2>{val.desc1}</h2>
                <img src={val.cover} alt="" />
                <p>{val.desc2}</p>
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
                <Heading title="INTRODUCCIÓN A LOS SISTEMAS DE COMUNICACIONES ELECTRÓNICAS" />
                <p>{val.desc}</p>
                <h2>{val.desc1}</h2>
                <div className="img-container"  data-aos="fade-down-right" >
                  <img src={val.cover} alt="" />
                </div>
                <p>Ilustración 1 Historia de las telecomunicaciones</p>

                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
                <Heading title="INTRODUCCIÓN A LOS SISTEMAS DE COMUNICACIONES ELECTRÓNICAS" />
                <p>{val.desc}</p>
                <h2>{val.desc1}</h2>
                <div className="img-container"  data-aos="fade-down-right" >
                  <img src={val.cover} alt="" />
                </div>
                <p>Ilustración 1 Historia de las telecomunicaciones</p>

                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
                <Heading title="INTRODUCCIÓN A LOS SISTEMAS DE COMUNICACIONES ELECTRÓNICAS" />
                <p>{val.desc}</p>
                <h2>{val.desc1}</h2>
                <div className="img-container"  data-aos="fade-down-right" >
                  <img src={val.cover} alt="" />
                </div>
                <p>Ilustración 1 Historia de las telecomunicaciones</p>

                {/* <button>Download CV</button> */}
                <button className="primaryBtn">More Information</button>
              </div>

            </>
          ))}
        </div>
      </section>
    </>
  );
};
