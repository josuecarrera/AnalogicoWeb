import React from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import { about } from "../data/dummydata";
import { saveAs } from "file-saver";
import { BringPdfThree } from "../DataPdfThree/BringPdfThree";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

export const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setLists(newItems);
    if (category === "all") {
      setLists(portfolio);
      return;
    }
  };

  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/documents/Capitulo_3info.docx`;

    saveAs(fileUrl, 'Capitulo3.docx');

  }
  return (
    <>
      <article>
        <div className="container">
          <Heading title=" TRANSMISIÓN POR MODULACIÓN DE AMPLITUD" />
          <div className="catButton">
            {category.map((category) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item) => (
              <div className="box" data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Seccion 1 */}

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-left">
                <Heading title=" TRANSMISIÓN POR MODULACIÓN DE AMPLITUDN" />
                <h2>{val.desc30}</h2>
                <p>{val.desc31}</p>

                 
              {/*<button className="primaryBtn">More Information</button> */}
                 
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover14} alt="" />
                </div>
                <BringPdfThree />
                <button onClick={handleDownload}>Download Word</button>
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
                <Heading title="Modulación AM" />
                <h2>{val.desc32}</h2>
                <h2>{val.desc33}</h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}

                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover15} alt="" />
                </div>
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
                <Heading title="TIPOS DE MODULACIÓN AM" />
                <h1>{val.desc34}</h1>
                <h2>{val.desc35}</h2>
                <h2>{val.desc36}</h2>
                {/* <BringPdf />
                <button>Download CV</button>
                <button className="primaryBtn">More Information</button> */}
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover16} alt="" />
                </div>
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover17} alt="" />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>

    
   

    </>
  );
};
