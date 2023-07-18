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

    saveAs(fileUrl, "Capitulo3.docx");
  };

  const url = "https://www.youtube.com/watch?v=Tt8ieZs5XKA";
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
                <h2>{val.desc61}</h2>
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
                <Heading title="MODULACIÓN AM" />
                {/* <p>{val.desc3}</p> */}
                <h2>{val.desc32}</h2>
                <div className="img-container">
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
                <h2>
                  Un modulador AM (Amplitude Modulation, por sus siglas en
                  inglés) es un dispositivo o sistema utilizado para modificar
                  la amplitud de una señal de alta frecuencia, conocida como
                  portadora, en función de una señal de baja frecuencia llamada
                  moduladora. La modulación AM es un método común utilizado en
                  la transmisión de señales de audio a través de ondas de radio,
                  donde la amplitud de la portadora se modifica
                  proporcionalmente a la amplitud de la señal de audio. Esto
                  permite transmitir la señal de audio a largas distancias,
                  donde la señal modulada puede ser recibida y demodulada para
                  recuperar la señal de audio original. El modulador AM es
                  esencial en este proceso, ya que permite la combinación
                  precisa de la señal moduladora y la portadora para su
                  transmisión efectiva.
                </h2>
                <p>Caracteristicas de un Sistema de Comunicación</p>
                <div className="img-container">
                  <img src={val.cover16} alt="" />
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
          <div>
            <Heading title="VIDEO" />
            <iframe
              title="unique title"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}`}
              width="900"
              height="550"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Seccion 4 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left">
                <Heading title="Características" />
                {/* <p>{val.desc3}</p> */}
                <h2>
                   En la modulación AM la amplitud de la portadora que se
                  necesita varía según la señal que tenga la información.
                </h2>
                <h2>
                   La información de amplitud y frecuencia se montan sobre la
                  portadora, haciendo que su envolvente varíe en función de la
                  señal moduladora o de información
                </h2>
                <p>Ilustración 3 Proceso de la modulación AM</p>
                <div className="img-container">
                  <img src={val.cover46} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
              <div className="left">
                <Heading title="Envolvente AM" />
                {/* <p>{val.desc3}</p> */}
                <h2>
                  Los diversos esquemas de modulación de amplitud se designan
                  también como de envolvente variable y comprenden los
                  siguientes:
                </h2>
                <h2>
                   AM con portadora completa y dos bandas laterales o AM
                  completa.
                </h2>
                <h2>
                   AM con dos bandas laterales y portadora suprimida
                  (AM-DSB-SC5).
                </h2>
                <h2>
                   AM con dos bandas laterales y vestigio o piloto de
                  portadora.
                </h2>
                <h2> Banda lateral única (BLU o SSB6) sin portadora.</h2>
                <h2> Banda lateral única con piloto de portadora.</h2>
                <h2>
                   AM con vestigio de banda lateral o AM con banda lateral
                  vestigial
                </h2>
                <p>
                  Ilustración 4: Relación de la señal de mensaje, la señal
                  portadora y la envolvente
                </p>
                <div className="img-container">
                  <img src={val.cover47} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
              <div className="left">
                <Heading title="ARQUITECTURA" />
                {/* <p>{val.desc3}</p> */}
                <h2>
                   Oscilador: A veces designado también como oscilador maestro,
                  que genera una portadora senoidal de amplitud y frecuencia muy
                  estables. (Perez, 2010)
                </h2>
                <h2>
                   Modulador: Tiene como entradas a la portadora generada por
                  el oscilador y a la señal de información o moduladora. En AM
                  completa, la salida del modulador es una señal en banda de
                  paso, con dos bandas laterales simétricas y la portadora.
                  (Perez, 2010)
                </h2>
                <h2>
                   Amplificadores: de potencia. Amplifican la potencia de la
                  señal al nivel necesario para entregarla a la línea de
                  transmisión y la antena. (Perez,2010)
                </h2>

                <p>Ilustración 5: arquitectura de la modulación AM</p>
                <div className="img-container">
                  <img src={val.cover48} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
              <div className="left">
                <Heading title="Clase 2: TIPOS DE MODULACIÓN AM" />
                {/* <p>{val.desc3}</p> */}
                <h2>Modulación AM DSB o Convencional</h2>
                <h2>
                  La onda modulada de salida contiene todas las frecuencias que
                  compone la señal AM y se utiliza para llevar la información a
                  través del sistema. A la forma de onda modulada se le denomina
                  envolvente. Cuando se aplica una señal moduladora a una señal
                  portadora, la onda de salida varía de acuerdo a la señal
                  moduladora, en donde la envolvente de la onda modulada es
                  exactamente igual a la señal moduladora AM. (Cruz, 2010)
                </h2>

                <p>Ilustración 6: Modulación AM DSB o Convencional</p>
                <div className="img-container">
                  <img src={val.cover49} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
              <div className="left">
                <Heading title="Modulación AM DSB-SC" />
                {/* <p>{val.desc3}</p> */}
                <h2>Modulación AM DSB o Convencional</h2>
                <h2>
                  Esta modulación se obtiene a partir del producto directo entre
                  la señal en banda base y la portadora. El principio de
                  funcionamiento de este es una inversión de fase de la señal
                  modulada en los cruces por cero, lo cual provoca que la señal
                  envolvente de una DSB-SC sea diferente a la señal del mensaje.
                  (Garcia, 2019)
                </h2>

                <p>Ilustración 7: Modulación AM DSB-SC</p>
                <div className="img-container">
                  <img src={val.cover50} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
              <div className="left">
                <Heading title="Modulación AM SSB" />
                {/* <p>{val.desc3}</p> */}

                <h2>
                  En este tipo de modulación sólo se transmite una de las bandas
                  de la señal, ya sea, la banda inferior o superior. Este tipo
                  de modulación se genera mediante un filtro discriminador de
                  frecuencias. Por medio del espectro mostrado en la figura 8 a,
                  se debe generar una onda modulada DSB-SC, ejemplificada en la
                  figura 8 b, donde por medio de un filtro (muy selectivo), se
                  procede a la selección de la banda a utilizar, obteniendo la
                  banda superior (USB) con un filtro pasabanda o la banda
                  inferior (LSB) con un filtro pasabajas para lo mostrado en la
                  figura 8. Con este tipo de modulación, se aumenta la
                  eficiencia en la transmisión, ya que no requiere más ancho de
                  banda que la señal en banda base original y sólo la mitad
                  respecto a la modulación DSB. (Garcia, 2019)
                </h2>

                <p>Ilustración 8: Modulación AM SS</p>
                <div className="img-container">
                  <img src={val.cover51} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 11 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left">
                <Heading title="Modulación AM VSB" />
                {/* <p>{val.desc3}</p> */}

                <h2>
                  Este tipo de modulación suprime parcialmente una de las bandas
                  laterales y un residuo de la otra banda es transmitido para
                  generar una compensación de dicha supresión. Es el diseño
                  especial del filtro pasabanda lo que distingue la modulación
                  VSB de SSB. (Garcia, 2019)
                </h2>

                <p>Ilustración 9: Filtro VSB</p>
                <div className="img-container">
                  <img src={val.cover52} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
              <div className="left">
                <Heading title="Clase 3: Demodulación AM" />
                {/* <p>{val.desc3}</p> */}

                <h2>
                  Engloba el conjunto de técnicas utilizadas para recuperar la
                  información transportada por una onda portadora, que en el
                  extremo transmisor fue modulada con dicha información.
                  (Anonimo, RAE, 2014)
                </h2>

                <p>Ilustración 12: Diagrama de un demodulador básico</p>
                <div className="img-container">
                  <img src={val.cover53} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
              <div className="left">
                <Heading title="Funcionamiento" />
                {/* <p>{val.desc3}</p> */}

                <h2>
                  Cuando se demodula una onda AM, la portadora y la porción de
                  la envolvente que lleva la información (las bandas laterales)
                  se convierten o se trasladan del espectro de radio frecuencia
                  a la fuente original de información. La función del
                  demodulador AM es recuperar y reproducir la amplitud de la
                  fuente original, esta debe tenerlas mismas características
                  relativas de amplitud y frecuencia
                </h2>

                <p>Ilustración 13: Funcionamiento de un Demodulador AM</p>
                <div className="img-container">
                  <img src={val.cover54} alt="" />
                </div>
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
              </div>
            </>
          ))}
        </div>
      </section>

      {/* Seccion 14 */}
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left">
                <Heading title="Mas sobre demodulación AM" />
                {/* <p>{val.desc3}</p> */}

                <h2>
                  Las señales de información deben ser transportadas entre un
                  transmisor y un receptor sobre alguna forma de medio de
                  transmisión. Sin embargo, las señales de información
                  encuentran una forma adecuada para la transmisión. La
                  modulación hace que ésta adquiera una forma más apropiada para
                  su transmisión y por eso este proceso se utiliza en sistemas
                  de comunicación, como radio y televisión, y de transmisión de
                  datos. Demodulación es el proceso inverso; la recepción de AM
                  es el proceso de la transmisión AM. Cuando se demodula una
                  onda AM, la portadora y la porción de la envolvente que lleva
                  la información (es decir, las bandas laterales) se convierten
                  o trasladan del espectro de radio frecuencia a la fuente
                  original de información (banda base). El propósito de este
                  trabajo es describir el proceso de demodulación AM y diseñar
                  un sistema receptor de señales AM.
                </h2>

                {/* <p>Ilustración 13: Funcionamiento de un Demodulador AM</p>
                <div className="img-container">
                  <img src={val.cover54} alt="" />
                </div> */}
                {/* <button>Download CV</button> */}
                {/* <button className="primaryBtn">Download CV</button> */}
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
              <div className="left">
                <Heading title="PARÁMETROS TÉCNICOS DE LA COMUNICACIÓN POR MODULACIÓN" />
                {/* <p>{val.desc3}</p> */}
                <h2></h2>
                <p>Ilustración 12: Diagrama de un demodulador básico</p>
                <div className="img-container" data-aos="fade-down-right">
                  <img src={val.cover53} alt="" />
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
              <div className="left" data-aos="fade-down-left">
                <Heading title="REPRESENTACIÓN FASORIAL DE AM" />
                {/* <p>{val.desc3}</p> */}
                <h2>
                  La representación fasorial de AM (Amplitud Modulada) es una
                  forma de visualizar y analizar una señal modulada en amplitud.
                  Consiste en representar la señal modulada como un vector en un
                  plano complejo, donde la amplitud de la señal se muestra como
                  la magnitud del vector y la frecuencia de la portadora se
                  representa como la velocidad de rotación del vector. Esta
                  representación permite comprender de manera intuitiva la
                  relación entre la señal modulada y la portadora, así como
                  facilitar el análisis de sus características, como la
                  amplitud, la frecuencia y la fase. La representación fasorial
                  de AM es una herramienta útil en la ingeniería de
                  comunicaciones para el diseño y la evaluación de sistemas de
                  modulación.
                </h2>
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
                <Heading title="REPRESENTACIÓN FASORIAL DE UNA ONDA DE AMPLITUD MODULADA" />
                <h2>{val.desc7}</h2>
                {/* <h2>{val.desc1}</h2> */}
                <p>Ilustracion 5 Pares trenzados</p>
                <div className="img-container">
                  <img src={val.cover35} alt="" />
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

// Función auxiliar para obtener el ID del video de YouTube
const getYouTubeVideoId = (videoUrl) => {
  // Extrae el ID del video de la URL de YouTube
  const regExp =
    /^(?:(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/|www\.youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
  const match = videoUrl.match(regExp);
  return match && match[1];
};
