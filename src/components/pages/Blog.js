import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import { PracticeGuide } from "../GuiaPracticas/PracticeGuide";
import { PracticeGuide2 } from "../GuiaPracticas/PracticeGuide2";
import { PracticeGuide3 } from "../GuiaPracticas/PracticeGuide3";
import { PracticeGuide4 } from "../GuiaPracticas/PracticeGuide4";
import { PracticeGuide5 } from "../GuiaPracticas/PracticeGuide5";
import { PracticeGuide6 } from "../GuiaPracticas/PracticeGuide6";
import { PracticeGuide7 } from "../GuiaPracticas/PracticeGuide7";
import { PracticeGuide8 } from "../GuiaPracticas/PracticeGuide8";
import { PracticeGuide9 } from "../GuiaPracticas/PracticeGuide9";
import { PracticeGuide10 } from "../GuiaPracticas/PracticeGuide10";
import { PracticeGuide11 } from "../GuiaPracticas/PracticeGuide11";
import { PracticeGuide12 } from "../GuiaPracticas/PracticeGuide12";
import { PracticeGuide13 } from "../GuiaPracticas/PracticeGuide13";
import { PracticeGuide14 } from "../GuiaPracticas/PracticeGuide14";
import { Problems } from "../GuiaPracticas/Problems";
import { Problems2 } from "../GuiaPracticas/Problems2";

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading title="PRIMER PARCIAL" />
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="BALANCE DE POTENCIA" />
                  <h2>
                    El principio de balance de potencia indica que la potencia
                    entregada por una fuente siempre será igual a la potencia
                    consumida por los elementos resistivos del circuito.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover61} alt="" />
                  </div>
                  <PracticeGuide />
                  <p>Práctica N 1 : BALANCE DE POTENCIA</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="" />
          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="MEZCLADORES PARA COMUNICACIONES" />
                  <h2>
                    Los mezcladores, también llamados diplexores, son
                    dispositivos cuya función es mezclar dos señales en una para
                    que pueda ser transmitida por un único cable.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover62} alt="" />
                  </div>
                  <PracticeGuide2 />
                  <p>PRÁCTICA N: 2 : MEZCLADORES PARA COMUNICACIONES</p>
                  {/* <BringPdf/> */}
                  {/* <button>Download CV</button> */}
                  {/* <button className="primaryBtn">More Information</button> */}
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="" />
          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="ESPECIFICACIONES DEL OP-AMP" />
                  <h2>
                    El OPAMP llamado también amplificador operacional es un
                    componente electrónico de mayor ganancia conectado en
                    corriente continua que está construido con dos entradas y
                    una salida. Inicialmente, los amplificadores operacionales
                    utilizaban el componente base que es la válvula de vacío.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover64} alt="" />
                  </div>
                  <PracticeGuide3 />
                  <p>PRÁCTICA N°3: ESPECIFICACIONES DEL OP-AMP</p>
                  {/* <BringPdf/> */}
                  {/* <button>Download CV</button> */}
                  {/* <button className="primaryBtn">More Information</button> */}
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="SEGUNDO PARCIAL" />
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="AMPLIFICADORES BASICOS" />
                  <h2>
                    Amplificador electrónico puede significar tanto un tipo de
                    circuito electrónico o etapa de este cuya función es
                    incrementar la intensidad de corriente, la tensión o la
                    potencia de la señal que se le aplica a su entrada;
                    obteniéndose la señal aumentada a la salida.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover65} alt="" />
                  </div>
                  <PracticeGuide4 />
                  <p>PRÁCTICA N°4: AMPLIFICADORES BASICOS</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="APLICACIONES DEL AMPLIFICADOR OPERACIONAL" />
                  <h2>
                    Entre las múltiples aplicaciones que tiene el amplificador
                    operacional, es de gran importancia la del computador
                    analógico, la cual consiste en la implementación y solución
                    de sistemas de ecuaciones lineales además de la solución de
                    ecuaciones diferenciales de cualquier orden.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover66} alt="" />
                  </div>
                  <PracticeGuide5 />
                  <p>PRÁCTICA N°: 5: AMPLIFICADORES BASICOS</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="LAZO DE HISTERESIS O COMPARADORES" />
                  <h2>
                    Este es un circuito con realimentación positiva que se
                    utiliza en el caso en que la señal de entrada vi(t) a
                    comparar esté acompañada de una señal de ruido.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover67} alt="" />
                  </div>
                  <PracticeGuide6 />
                  <p>PRÁCTICA N°: 6: LAZO DE HISTERESIS O COMPARADORES</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="FILTROS ACTIVOS" />
                  <h2>
                    Un filtro activo es un filtro electrónico analógico
                    distinguido por el uso de uno o más componentes activos (que
                    proporcionan una cierta forma de amplificación de energía),
                    que lo diferencian de los filtros pasivos que solamente usan
                    componentes pasivos
                  </h2>
                  <div className="img-container">
                    <img src={val.cover68} alt="" />
                  </div>
                  <PracticeGuide7 />
                  <p>PRÁCTICA N°: 7: FILTROS ACTIVOS</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="RETROALIMENTACION POSITIVA" />
                  <h2>
                    En un sistema con realimentación positiva, una señal de
                    entrada que pasa por un bloque, es amplificada positiva o
                    negativamente, la realimentación positiva hace que esta
                    señal llegue a la salida de manera saturada más rápidamente
                    y sin complicaciones.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover69} alt="" />
                  </div>
                  <PracticeGuide8 />
                  <p>PRÁCTICA N°: 8: RETROALIMENTACION POSITIVA</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="OSCILADORES RF" />
                  <h2>
                    Un oscilador RF es un dispositivo electrónico que genera una
                    tensión oscilante a frecuencias típicas de radiofrecuencia.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover70} alt="" />
                  </div>
                  <PracticeGuide9 />
                  <p>PRÁCTICA N°: 9: OSCILADORES RF</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="FILTROS ACTIVOS PASA BAJO Y PASA BANDA" />
                  <h2>
                    Un filtro paso bajo corresponde a un filtro electrónico
                    caracterizado por permitir el paso de las frecuencias más
                    bajas y atenuar las frecuencias más altas.
                  </h2>
                  <h2>
                    Un filtro paso banda es un tipo de filtro electrónico que
                    deja pasar un determinado rango de frecuencias de una señal
                    y atenúa el paso del resto, para el cálculo de la función de
                    transferencia se puede hacer uso del método de mallas.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover71} alt="" />
                  </div>
                  <PracticeGuide10 />
                  <p>PRÁCTICA N°: 10: FILTROS ACTIVOS PASA BAJO Y PASABANDA</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="MODULADOR AM" />
                  <h2>
                    La amplitud modulada (AM) o modulación de amplitud es una
                    técnica utilizada en el procesamiento de señales y la
                    comunicación electrónica, más comúnmente para la transmisión
                    de información a través de una onda transversal de
                    televisión.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover72} alt="" />
                  </div>
                  <PracticeGuide11 />
                  <p>PRÁCTICA N°: 11: MODULADOR AM</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="DEMODULADOR AM" />
                  <h2>
                    El proceso de demodulación de AM consiste en recuperar la
                    señal de información (fm) contenida en la envolvente de la
                    señal portadora (fc). Para lograrlo deben tomarse en cuenta
                    las componentes de frecuencia de que esta constituida la
                    señal de AM generada. televisión.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover73} alt="" />
                  </div>
                  <PracticeGuide12 />
                  <p>PRÁCTICA N°: 12: DEMODULADOR AM</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="DEMODULADOR FM" />
                  <h2>
                    Los demoduladores de FM son circuitos dependientes de la
                    frecuencia, diseñados para producir un voltaje de salida que
                    sea proporcional a la frecuencia instantánea en su entrada.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover74} alt="" />
                  </div>
                  <PracticeGuide13 />
                  <p>PRÁCTICA N°: 13: DEMODULADOR FM</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Espaciador */}
      <section className="about">
        <div className="container flex"></div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title="PREPARATORIOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  <Heading title="MODULADOR FM" />
                  <h2>
                    La frecuencia modulada (FM),​ o modulación de
                    frecuencia,​ es una técnica de modulación angulara​n 
                    que permite transmitir información a través de una onda
                    portadora variando su frecuencia.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover75} alt="" />
                  </div>
                  <PracticeGuide14 />
                  <p>PRÁCTICA N°: 14: MODULADOR FM</p>
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

    

      <section className="blog">
        <div className="container">
          <Heading title="PROBLEMAS PROPUESTOS" />

          <div className="content grid3">
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left">
                  {/* <Heading title="MODULADOR FM" />
                  <h2>
                    La frecuencia modulada (FM),​ o modulación de
                    frecuencia,​ es una técnica de modulación angulara​n 
                    que permite transmitir información a través de una onda
                    portadora variando su frecuencia.
                  </h2>
                  <div className="img-container">
                    <img src={val.cover75} alt="" />
                  </div> */}
                  <Problems />
                  <Problems2 />
                  {/* <p>PRÁCTICA N°: 14: MODULADOR FM</p> */}
                </div>
              </>
            ))}

            {about.map((val) => (
              <>
                <div className="left" data-aos="fade-down-left"></div>
              </>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};
