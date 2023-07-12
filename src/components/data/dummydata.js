import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "Capitulo Uno",
    submenu: [
      {
        title: "Web desing",
      },
    ],
  },
  {
    url: "/services",
    text: "Capitulo Dos",
  },
  {
    url: "/portfolio",
    text: "Capitulo Tres",
  },
  {
    url: "/testimonials",
    text: "Capitulo Cuatro",
  },
  {
    url: "/blog",
    text: "Videos",
  },
  {
    url: "/contact",
    text: "Simulador",
  },
];
export const home = [
  {
    text: "BIENVENIDOS",
    name: "AL CURSO DE",
    post: "COMUNICACION ANALOGICA",
    design: "SEXTO / A",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
export const about = [
  {
    desc: "Las telecomunicaciones han sufrido un gran cambio desde el siglo 19. Las comunicaciones apropiadas surgieron con la llegada del telégrafo en 1833. Un gran paso adelante en el establecimiento de comunicación entre personas a largas distancias. El telégrafo y el correo postal se convirtieron más tarde en los dos medios por los cuales las personas mantienen contacto entre sí a distancia. El sistema es lento y puede tardar días o semanas en estar disponibles las noticias. [1]",
    desc1: "Línea de tiempo",
    desc2: "Ilustración 1 Historia de las telecomunicaciones",
    desc3:
      "En la era de la información en la que vivimos, son muy comunes los términos analógico y digital, en poco tiempo, poco a poco se ha ido abandonando el uso de sistemas analógicos para dar paso a componentes y tecnologías digitales. Con el desarrollo de los ordenadores y la demanda de una comunicación más rápida comienza la era de la comunicación. Con la generalización del uso de los ordenadores y el uso de Internet se desarrollan sistemas de comunicación entre usuarios, como los e-mails y los chats.",
    desc4: "Convertidor A/D",
    desc6:
      "El medio de transmisión constituye el soporte físico a través del cual emisor y receptor pueden comunicarse en un sistema de transmisión de datos. Se Distinguen dos tipos de medios: guiados y no guiados. En ambos casos la transmisión se realiza por medio de ondas electromagnéticas. Los medios guiados conducen (guían) las ondas a través de un camino físico, ejemplos de estos medios son el cable coaxial, la fibra óptica y el par trenzado. Los medios no guiados proporcionan un soporte para que las ondas se transmitan, pero no las dirigen; como ejemplo de ellos son el aire y el vacío",
    desc7:
      "Este consiste en dos alambres de cobre aislados, en general de 1mm de espesor. Los alambres se entrelazan en forma helicoidal, como en una molécula de DNA. La forma trenzada del cable se utiliza para reducir la interferencia eléctrica con respecto a los pares cercanos que se encuentran a su alrededor. Los pares trenzados se pueden utilizar tanto paratransmisión analógica como digital, y su ancho de banda depende del calibre del alambre yde la distancia que recorre; en muchos casos pueden obtenerse transmisiones de varios megabits, en distancias de pocos kilómetros",
    desc8:
      "Es un cable de transmisión de datos que se compone de dos conductores que se orientan de forma coaxial y separados por una capa de aislamiento dieléctrico. La estructura de un cable coaxial típico se basaría en un núcleo compuesto de un alambre de metal rodeado por un aislante llamado dieléctrico. Dicho aislamiento está protegido por una malla metálica (lámina o trenza) y todo el cable entero está envuelto en una cubierta externa protectora, resguardando así el cable de la humedad. ",
    desc9:
      "Estas bandas cubren aproximadamente desde 55 a 550 Mhz. Son también omnidireccionales, pero a diferencia de las anteriores la ionosfera es transparente a ellas. Su alcance máximo es de un centenar de kilómetros, y las velocidades que permite del orden de los 9600 bps. Su aplicación suele estar relacionada con los radioaficionados y con equipos de comunicación militares, también la televisión y los aviones.",
    desc10:
      "Además de su aplicación en hornos, las microondas permiten transmisiones tanto terrestres como con satélites. Dada sus frecuencias, del orden de 1 a 10 Ghz, las microondas son muy direccionales y sólo se pueden emplear en situaciones en que existe una línea visual que une emisor y receptor. Los enlaces de microondas permiten grandes velocidades de transmisión, del orden de 10 Mbps.",
    desc11: `En el otro lado de la balanza las señales digitales, que se usan de una forma más frecuente debido a su flexibilidad y polivalencia. La información no se transmite de la misma forma, sino que en este caso se utiliza un sistema de códigos binarios (los números 0 y 1) con los que se lleva a cabo la transmisión bajo una pareja de amplitudes que proporciona grandes posibilidades.`,
    desc12: `El proceso del que se habla con las ondas senoidales en las señales analógicas cambia de forma completa para dar paso a ondas cuadradas, lo que permite hacer uso de la modulación digital y de un tipo de señal que no es continua Las muchas opciones que proporcionan las señales digitales, la facilidad que hay para
    transmitir información con ella y la manera en la cual se pueden usar sin pérdida de
    información, han hecho que se impongan en el mercado. Y aunque, las señales analógicas
    aún se usan en algunos contextos, es más frecuente que se opte por las digitales incluso
    teniendo en cuenta que sus costes son más altos. Al fin y al cabo, el sector tecnológico ha
    visto que, en este sentido, en la transmisión de información, era más importante contar con
    una señal eficiente que con una económica. Y esto es algo que también esta aplicado al sector
    de los dispositivos móviles cada vez que se los utiliza.`,
    desc13: `Las medidas físicas se utilizan cuando se habla de utilizar señales analógicas, que son
    especialmente usadas para llevar a cabo la transmisión de elementos de vídeo o sonido.
    Aunque son señales de tipo continuo hay que decir que su expansión se produce por la entrada
    en escena de las ondas de tipo senoidal. Para que las distintas señales analógicas que se
    transmitan puedan ser interpretadas de una manera adecuada habrá que tener un
    decodificador que permita cumplir con el proceso de trabajo. Una de las ventajas del uso de
    la señal analógica es que hay poco consumo de ancho de banda, mientras que por otro lado
    es un tipo de acción que se procesa en tiempo real.`,
    desc14: `Hay menores necesidades en términos de inversión y la calidad suele ser más fiel a la
    realidad, Pero también tiene sus desventajas. La principal es lo complicado que resulta
    solucionar una transmisión fallida en comparación a si estuviera usando una señal digital.`,
    desc15: `Alto costo de generación de potencia en el espacio y enormes distancias de transmisión. Se
    requiere eficiencia en el uso de energía.`,
    desc16: `Bajo costo en la potencia, pero ancho de banda limitado por las regulaciones. Se requiere
    eficiencia en el uso del ancho de banda`,
    desc17: `Aumento del costo con la potencia (impacto en el tamaño y la duración de las baterías)
    además está limitado el ancho de banda. Se requiere a la vez eficiencia en la energía y en el
    ancho de banda`,
    desc18: `La Comunicación es la transferencia de información con sentido desde un lugar (remitente,
      origen, fuente, transmisor) a otro lugar (destino, receptor). Por otra parte, Información es un
      patrón físico al cual se le ha asignado un significado comúnmente acordado. El patrón debe
      ser único (separado y distinto), capaz de ser enviado por el transmisor, y capaz de ser
      detectado y entendido por el receptor.`,
    desc19: `Si la información es intercambiada entre comunicadores humanos, por lo general se transmite
    en forma de sonido, luz o patrones de textura en forma tal que pueda ser detectada por los
    sentidos primarios del oído, vista y tacto. El receptor asumirá que no se está comunicando
    información si no se reciben patrones reconocibles. En la siguiente figura se muestra un diagrama a bloques del modelo básico de un sistema de
    comunicaciones, en éste se muestran los principales componentes que permiten la
    comunicación`,
    desc20: `En toda comunicación existen tres elementos básicos (imprescindibles uno del otro) en un
    sistema de comunicación: el transmisor, el canal de transmisión y el receptor. Cada uno tiene
    una función característica`,
    desc21: `Pasa el mensaje al canal en forma de señal. Para lograr una transmisión
    eficiente y efectiva, se deben desarrollar varias operaciones de procesamiento de la
    señal. La más común e importante es la modulación, un proceso que se distingue por
    el acoplamiento de la señal transmitida a las propiedades del canal, por medio de una
    onda portadora.`,
    desc22: `De Transmisión o medio es el enlace eléctrico entre el transmisor y el
    receptor, siendo el puente de unión entre la fuente y el destino. Este medio puede ser
    un par de alambres, un cable coaxial, el aire, etc. Pero sin importar el tipo, todos los
    medios de transmisión se caracterizan por la atenuación, la disminución progresiva
    de la potencia de la señal conforme aumenta la distancia.`,
    desc23: `Es extraer del canal la señal deseada y entregarla al transductor de salida.
    Como las señales son frecuentemente muy débiles, comoresultado de la atenuación,
    el receptor debe tener varias etapas de amplificación. En todo caso, la operación clave
    que ejecuta el receptor es la demodulación, el caso inverso del proceso de modulación
    del transmisor, con lo cual vuelve la señal a su forma original`,
    desc24: `Información que se pretende llegue del emisor al receptor por medio de
    un sistema de comunicación. Puede ser en formas como ser texto, número, audio,
    gráficos, etc. Este también puede ser de forma verbal o no verbal.`,
    desc25: `Se conoce con el nombre de oscilador a todo circuito que, partiendo de una fuente de 
    alimentación continua, es capaz de proporcionar una salida de corriente alterna, 
    independientemente de su forma de onda. Es posible, pues, encontrar osciladores de onda senoidal, onda cuadrada, diente de sierra, etc. Tradicionalmente, sin embargo, se reserva 
    el nombre de osciladores a aquellos cuya salida es una senoide, recibiendo el resto 
    nombres especiales. (Bolaños, 2018)`,
    desc26: `La función de un generador de señal es producir una señal dependiente del tiempo con unas características determinadas de frecuencia, amplitud y forma. Algunas veces estas 
    características son externamente controladas a través de señales de control; el oscilador 
    controlado por tensión (voltage-controlled oscillator o VCO) es un claro ejemplo. Para ejecutar la función de los generadores de señal se emplea algún tipo de realimentación 
    conjuntamente con dispositivos que tengan características dependientes del tiempo (normalmente condensadores). Hay dos categorías de generadores de señal: osciladores 
    sintonizados o sinusoidales y osciladores de relajación.`,
    desc27: `Oscilador es un circuito que genera una señal periódica, es decir, que produce una señal periódica a la salida sin tener ninguna entrada periódica. Los osciladores se clasifican en armónicos, cuando la salida es sinusoidal, o de relajación, si generan una onda cuadrada`,
    desc28: `Un oscilador a cristal es un oscilador armónico cuya frecuencia está determinada por un 
    cristal de cuarzo o una cerámica piezoeléctrica. Los sistemas de comunicación suelen 
    emplean osciladores armónicos, normalmente controlados por cristal, como oscilador de 
    referencia. Pero también osciladores de frecuencia variable. La frecuencia se puede 
    ajustar mecánicamente (condensadores o bobinas de valor ajustable) o aplicando tensión 
    a un elemento, estos últimos se conocen como osciladores controlados por tensión o VCO, 
    es decir, osciladores cuya frecuencia de oscilación depende del valor de una tensión de 
    control. Y también es posible hallar osciladores a cristal controlados por tensión`,
    desc29: `Un oscilador retroalimentado es un amplificador con un lazo de retroalimentación, es 
    decir, con un paso para que la energía se propague desde la salida y regrese a la entrada. 
    Los osciladores autosostenidos (o monoestables) son osciladores retroalimentados. Una 
    vez encendido, un oscilador retroalimentado genera una señal de salida de ca, de la cual 
    se regresa una pequeña parte a la entrada, donde se amplifica. La señal amplificada de la 
    entrada aparece en la salida, y el proceso se repite; se produce un proceso regenerativo, 
    en el que la salida depende de la entrada y viceversa. De acuerdo con el criterio de 
    Barkhausen, para que un circuito retroalimentado sostenga oscilaciones, la ganancia neta 
    de voltaje en torno al lazo de retroalimentación debe ser igual o mayor que la unidad, y 
    el desplazamiento neto de fase en torno al lazo debe ser un múltiplo entero positivo de 
    360°`,
    desc30: `Las señales de información deben ser transportadas entre un transmisor y un receptor sobre alguna forma de medio de transmisión. Sin embargo, las señales de información pocas veces encuentran una forma adecuada para la transmisión. la modulación se define como el proceso de transformar información de su forma original a una forma más adecuada para la transmisión. Demodulación es el proceso inverso. La modulación se realiza en el transmisor en un circuito llamado modulador. (Vega, 2018)`,
    desc31: `Ilustración 1: Esquema básico de una transmisión en telecomunicaciones`,
    desc32: `Modulación de amplitud (AM es el proceso de cambiar la amplitud de una portadora de frecuencia relativamente alta de acuerdo con la amplitud de la señal modulante (información). Las frecuencias que son lo suficientemente altas para radiarse de manera eficiente por una antena y propagase por el espacio libre se llaman comúnmente radiofrecuencias o simplemente RF. Con la modulación de amplitud, la información se imprime sobre la portadora en la forma de cambios de amplitud`,

    desc33: `La modulación de amplitud es una forma de modulación relativamente barata y de baja calidad de modulación que se utiliza en la radiodifusión de señales de audio y vídeo. La banda de radiodifusión comercial AM abarca desde 535 a 1605 kHz. La radiodifusión comercial de tv se divide en tres bandas (dos de VHF y una de UHF). (Vega, 2018)`,

    desc34: `Modulación AM DSB o Convencional`,
    desc35: `La onda modulada de salida contiene todas las frecuencias que compone la señal AM y se utiliza para llevar la información a través del sistema. A la forma de onda modulada se le denomina envolvente. Cuando se aplica una señal moduladora a una señal portadora, la onda de salida varía de acuerdo a la señal moduladora, en donde la envolvente de la onda modulada es exactamente igual a la señal moduladora AM. (Cruz, 2010)`,
    desc36: `La señal portadora Vc y la señal moduladora Vm se representan mediante las siguientes ecuaciones: (Cruz, 2010)`,
    desc37: `La modulación de frecuencia consiste en variar la frecuencia de la onda portadora de acuerdo con la intensidad de la onda de información. La amplitud de la onda modulada es constante e igual que la de la onda portadora.
La frecuencia de la portadora oscila más o menos rápidamente, según la onda moduladora, esto es, si aplicamos una moduladora de 100 Hz , la onda modulada se desplaza arriba y abajo cien veces en un segundo respecto de su frecuencia central , que es la portadora; además el grado de esta variación dependerá del volumen con que modulemos la portadora, a lo que denominamos “índice de modulación”.
`,
    desc38: `Aplicaciones de FM:`,
    desc39: `La radio, en donde los receptores emplean un detector de FM y exhiben un fenómeno llamado efecto de captura, en donde el sintonizador es capaz de recibir la señal más fuerte de las que transmiten en la misma frecuencia`,
    desc40: `Transmite señales estereofónicas`,
    desc42: `Sus aplicaciones se encuentran la televisión, como sub-portadora de sonido`,
    desc43: `En micrófonos inalámbricos`,
    desc44: `Como ayuda en navegación aérea`,
    desc45: `La modulación angular, es la que resulta de variar la fase o la frecuencia instantánea de una portadora, con una función proporcional a la señal de modulación. En este tipo de modulación, la potencia de la señal de salida no depende de la potencia de la señal de entrada, y la banda final de la señal modulada es mayor o igual que el doble de la frecuencia más alta de modulación. La modulación angular analógica puede ser de fase (PM) o de frecuencia (FM). La modulación angular digital puede ser PSK.  Los moduladores y/o demoduladores están basados en PLL, utilizados tanto en señales analógicas como en señales digitales, debido a su integración, reducción de tamaño y sea la tensión de una portadora no modulada`,
    desc46: `Variar la fase de una portadora de amplitud constante en proporción directa a la amplitud de la señal moduladora, con una rapidez igual a la frecuencia de la señal moduladora.`,
    desc47: `Un modulador de fase es un circuito en el que se hace variar Ia portadora de tal modo que su fase instantánea es proporcional a Ia señal moduladora.
    Un modulador de FM que está precedido por un diferenciador produce una onda de salida en la que la desviación de fase es proporcional a la señal moduladora y equivale, en consecuencia, a un modulador de fase. Son posibles algunas otras equivalencias interesantes. Por ejemplo, un demodulador de frecuencia seguido de un integrador equivale a un demodulador de fase. 
    `,
    desc48: `Las funciones Jo (mf), J1 (mf), J2 (mf)….Jn (mf) son funciones de Bessel de primera especie, orden n y argumento mf. En la Fig.2 se muestra la representación gráfica de las funciones de Bessel de orden 0, 1, 2 y 3, en función de mf.`,
    desc49: `Carson estableció una regla general paro estimar el ancho de banda de todos los sistemas con modulación angular, independiente del índice de modulación. A esto se llama regla 
    de Carson. Enunciada en forma sencilla. esta regla establece el ancho de banda necesario para trasmitir una onda con modulación angular. como igual a dos veces la suma de la desviación máxima de frecuencia por la frecuencia máxima de señal moduladora`,
    desc50: `En esta sección de la guía se explicar ‘a, de forma general, cual es la metodología de trabajo a seguir durante la práctica. Aunque la práctica se centra en las modulaciones de fase y de frecuencia, para la realización de la misma es necesario conocer algunos conceptos adicionales como la cuantización, muestreo, conversión analógico-digital y viceversa, etc. `,
    desc51: `Moduladores de FM directos`,
    desc52: `La FM directa es la modulación angular en la cual la frecuencia de la portadora varía (es desviada) directamente por la señal modulante. Con la FM directa, la desviación de frecuencia instantánea es directamente proporcional a la amplitud de la señal modulante.`,
    desc53: `Se muestra el diagrama esquemático para un generador de FM más práctico y directo que usa un diodo varactor para desviar la frecuencia de un oscilador de cristal. R1 y R2 desarrollan un voltaje de c.c. que invierte el diodo varactor polarizado VD1 y determinan la frecuencia de reposo del oscilador. El voltaje de la señal modulante externa agrega y resta del nivel de c.c. polarizado, lo cual cambia la capacitancia del diodo y por lo tanto la frecuencia de oscilación. `,
    desc54: `Transmisores de FM directos`,
    desc55: `Los transmisores de FM directos producen una forma de onda de salida, en la cual la desviación de frecuencia es directamente proporcional a la señal modulante. Consecuentemente, el oscilador de la portadora debe desviarse directamente. Por lo tanto, para los sistemas de FM de índice mediano y alto, el oscilador no puede ser un cristal, porque la frecuencia a la cual el cristal oscila no puede variarse de manera significativa. Como resultado, la estabilidad de los osciladores en los transmisores de FM directos frecuentemente no puede llenar las especificaciones.`,
    desc56: `En el diagrama en bloques para un transmisor de banda de radiodifusión comercial. Esta configuración en particular se llama transmisor directo de FM de Crosby e incluye un circuito de AFC (automatic frequency control) El modulador de frecuencia puede ser un modulador de reactancia o un oscilador de voltaje controlado. La frecuencia de descanso de la portadora es la frecuencia de salida no modulada del oscilador principal (fc) Para el transmisor mostrado en la figura, la frecuencia central del oscilador principal fc=5.1 MHz, el cual se multiplica por 18, en tres etapas (3*2*3), para producir una frecuencia de portadora de transmisión final f1=91.8 MHz.`,
    desc57: `Moduladores de FM indirectos`,
    desc58: `La FM indirecta es una modulación angular en la cual la frecuencia de la portadora se desvía indirectamente por la señal modulante. La FM indirecta se logra cambiando directamente la fase de la portadora y es, por lo tanto, una forma de modulación en fase directa. La fase instantánea de la portadora es directamente proporcional a la señal modulante.`,
    desc59: `Los transmisores de FM indirectos producen una forma de onda de salida, en la cual la desviación de fase es directamente proporcional a la señal modulante. Consecuentemente, el oscilador de la portadora no se desvía directamente. Por lo tanto, el oscilador de la portadora puede ser un cristal, ya que el oscilador, por sí mismo, no es el modulador.`,
    desc60: `Con la FM indirecta, la señal modulante desvía directamente la fase de la portadora, la cual cambia indirectamente la frecuencia. La figura 6-23 muestra el diagrama a bloques para un transmisor de FM indirecto de Armstrong de banda ancha. La fuente de la portadora es un cristal. Por lo tanto, los requerimientos de estabilidad para la frecuencia de la portadora establecida por la FCC, se pueden lograr sin usar un circuito de AFC. (Velasco, 2013)`,
    desc61: `Las señales de información deben ser transportadas entre un transmisor y un receptor 
    sobre alguna forma de medio de transmisión. Sin embargo, las señales de información 
    pocas veces encuentran una forma adecuada para la transmisión. la modulación se 
    define como el proceso de transformar información de su forma original a una forma 
    más adecuada para la transmisión. Demodulación es el proceso inverso. La modulación 
    se realiza en el transmisor en un circuito llamado modulador. (Vega, 2018)`,
    desc62: ``,
    desc63: ``,
    desc64: ``,
    desc65: ``,
    desc66: ``,
    desc67: ``,
    desc68: ``,
    desc69: ``,
    desc70: ``,


    cover: "./images/LineaDeTiempo.png",
    cover1: "./images/ConvertidorAD.png",
    cover2: "./images/ElementosCom.png",
    cover3: "./images/MediosTransmision.png",
    cover4: "./images/paresTrensados.png",
    cover5: "./images/CableCoaxial.png",
    cover6: "./images/RadioEnlace.png",
    cover7: "./images/microondas.png",
    cover8: "./images/SenialDigAna.png",
    cover9: "./images/AmplitudTiempo.png",
    cover10: "./images/basicosistema.png",
    cover11: `./images/captwo/puentewein.png`,
    cover12: `./images/captwo/oscilador.png`,
    cover13: `./images/captwo/osciladorRetroalimentado.png`,
    cover14: `./images/capthree/ModulacionAmplitud.png`,
    cover15: `./images/capthree/Modulacion_AM.png`,
    cover16: `./images/capthree/Modulador_Am.png`,
    cover17: `./images/capthree/Parametrostecnicosdelacomunicaciónpormodulación.png`,
    cover18: `./images/capfour/modulacionFM.png`,
    cover19: `./images/capfour/procesodeModulacion.png`,
    cover20: `./images/capfour/modulacionfrecuencia.png`,
    cover21: `./images/capfour/modulacionPm.png`,
    cover22: `./images/capfour/demoduladoresPm.png`,
    cover23: `./images/capfour/funcionBessel.png`,
    cover24: `./images/capfour/anchominimoBanda.png`,
    cover25: `./images/capfour/etapasdeModulacion.png`,
    cover26: `./images/capfour/moduladorFm.png`,
    cover27: `./images/capfour/moduladorDiodo.png`,
    cover28: `./images/capfour/transmisoresFm.png`,
    cover29: `./images/capfour/transmisorCrosby.png`,
    cover30: `./images/capfour/estereofobico.png`,
    cover31: `./images/capfour/TransmirionArmstrong.png`,
    cover32: `./images/DigAnal.png`,
    cover33: `./images/CaracteristicasMedioTx.png`,
    cover34: `./images/capthree/RepresentaciónfasorialdeAm.png`,
    cover35: `./images/capthree/RepreModuladAm.png`,
    cover36: `./images/captwo/capitulo2.jpeg`,
    cover37: `./images/mediosdeTransmision.png`,
    cover38: `./images/captwo/OSCILADORES.png`,
    cover39: `./images/capfour/IntroduccionFrecuenciaAnalogica.png`,
    cover40: `./images/capfour/.png`,
    cover41: `./images/capfour/.png`,
    
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "OSCILADORES",
    desc: "Oscilador es un circuito que genera una señal periódica, es decir, que produce una señal periódica a la salida sin tener ninguna entrada periódica. Los osciladores se clasifican en armónicos, cuando la salida es sinusoidal, o de relajación, si generan una onda cuadrada.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: " OSCILADORES RETROALIMENTADOS ",
    desc: "Un oscilador retroalimentado es un amplificador con un lazo de retroalimentación, es decir, con un paso para que la energía se propague desde la salida y regrese a la entrada. Los osciladores autosostenidos (o monoestables) son osciladores retroalimentados.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "OSCILADOR CON PUENTE DE WIEN ",
    desc: "El puente de Wien es un circuito electrónico compuesto por una combinación de resistencias y condensadores en serie-paralelo. Se utiliza generalmente en instrumentos de medida y generadores de señales de baja frecuencia para laboratorios y servicios de electrónica",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "OSCILADORES SINTONIZADOS",
    desc: "Los osciladores LC son circuitos osciladores que usan circuitos tanque LC para establecer la frecuencia. El funcionamiento de un circuito tanque implica intercambio de energía entre cinética y potencial. ",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Osciladores a Cristal",
    desc: "Los osciladores a cristal presentan la ventaja de su gran exactitud y estabilidad en su frecuencia de oscilación. A lo largo de este capítulo veremos el porqué de esta estabilidad y exactitud.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "OSCILADOR COLPITTS ",
    desc: "El oscilador Colpitts es un tipo de oscilador LC que cae bajo la categoría de oscilador armónico y fue inventado por Edwin Colpitts en 1918. La figura 1 muestra un oscilador típico de Colpitts con un circuito de tanque en el que un inductor L está conectado en paralelo a la combinación en serie de los condensadores C1 y C2",
  },
];
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
];
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/ModulacionAMDSB.PNG",
    name: "Convencional",
    category: "Tipos de modulacion AM",
    title: "Modulación AM DSB",
  },
  {
    id: 2,
    cover: "../images/port/DemoduladorAM.png",
    name: "Detector de Pico",
    category: "Demodulación AM",
    title: "Demodulacion de AM",
  },
  {
    id: 3,
    cover: "../images/port/DetectorDiodo.png",
    name: "Brand",
    category: "Tipos de Modulación",
    title: "Detector por diodo",
  },
  {
    id: 4,
    cover: "../images/port/ModulacionAMVSB.png",
    name: "VSB",
    category: "Tipos de modulacion AM",
    title: "Modulación AM VSB",
  },
  {
    id: 5,
    cover: "../images/port/FuncionesDemodulador.png",
    name: "Brand",
    category: "Demodulación AM",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/DetectorResistencia.png",
    name: "Brand",
    category: "Tipos de Modulación",
    title: "Detector por resistencia de rejilla",
  },
];
export const testimonials = [
  {
    id: 1,
    text: "La modulación de frecuencia consiste en variar la frecuencia de la onda portadora de acuerdo con la intensidad de la onda de información. La amplitud de la onda modulada es constante e igual que la de la onda portadora.",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Modulación por frecuencia analógica (FM)",
  },
  {
    id: 2,
    text: "La modulación angular, es la que resulta de variar la fase o la frecuencia instantánea de una portadora, con una función proporcional a la señal de modulación.",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Modulación angular",
  },
  {
    id: 3,
    text: "Un modulador de fase es un circuito en el que se hace variar Ia portadora de tal modo que su fase instantánea es proporcional a Ia señal moduladora.",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "Moduladores y demoduladores de fase y de frecuencia",
  },
  {
    id: 3,
    text: "Un modulador de fase es un circuito en el que se hace variar Ia portadora de tal modo que su fase instantánea es proporcional a Ia señal moduladora.",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "Moduladores y demoduladores de fase y de frecuencia",
  },
  {
    id: 3,
    text: "Un modulador de fase es un circuito en el que se hace variar Ia portadora de tal modo que su fase instantánea es proporcional a Ia señal moduladora.",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "Moduladores y demoduladores de fase y de frecuencia",
  },
  {
    id: 3,
    text: "Un modulador de fase es un circuito en el que se hace variar Ia portadora de tal modo que su fase instantánea es proporcional a Ia señal moduladora.",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "Moduladores y demoduladores de fase y de frecuencia",
  },
];
export const blog = [
  {
    id: 1,
    video: "https://www.youtube.com/watch?v=dS4Mq70cf4g",
  },
  {
    id: 2,
    video: "https://www.youtube.com/watch?v=oCxtsTU4BWg",
  },
  {
    id: 3,
    video: "https://www.youtube.com/watch?v=xCDp5xg1Oac",
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
];
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
];
