import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectShowcase from "./components/ProjectShowcase";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />

        <About />
        <ProjectShowcase title="Agua Buena"
          body="El Proyecto Agua Buena de la Fundación Deuda Interna es una iniciativa orientada a mejorar la calidad de vida de comunidades que no cuentan con acceso seguro al agua potable. A través de este proyecto, la fundación trabaja en la perforación y construcción de pozos de agua, permitiendo que familias y poblaciones rurales puedan acceder a una fuente cercana, segura y constante de este recurso esencial.
          La realización de pozos de agua resulta fundamental para garantizar salud, dignidad y desarrollo en estas comunidades. El acceso al agua potable reduce enfermedades, mejora las condiciones de higiene y facilita actividades básicas como la alimentación, el cuidado personal y la producción local. Además, evita que muchas personas —especialmente mujeres y niños— deban recorrer largas distancias para conseguir agua.
          En este sentido, el Proyecto Agua Buena no solo provee infraestructura, sino que también genera oportunidades de desarrollo comunitario, promoviendo mejores condiciones de vida y fortaleciendo la autonomía de las poblaciones beneficiadas. Asegurar el acceso al agua es un paso clave para construir comunidades más saludables, equitativas y sostenibles."
          embedYoutubeUrl="https://www.youtube.com/embed/t3YScTL0pvo?si=DBBz0R2A-SD-pwn2" />
        <ProjectShowcase title="Arbolar"
          body=" El Proyecto Árbolar de la Fundación Deuda Interna es una iniciativa ecológica y social que busca reforestar y recuperar áreas degradadas, contribuyendo al cuidado del medio ambiente y al mejoramiento de la calidad de vida de las comunidades locales. A través de la plantación de árboles y la implementación de prácticas sostenibles, el proyecto tiene como objetivo restaurar los ecosistemas y promover la conciencia ambiental en las poblaciones involucradas.
          El proyecto también fomenta la participación comunitaria, involucrando a los habitantes en actividades de reforestación y cuidado de las áreas verdes, generando empleo local y mejorando la biodiversidad en las zonas intervenidas. Además, el Proyecto Árbolar contribuye al combate del cambio climático mediante la captura de CO2 y la mejora de la calidad del aire.
          En resumen, el Proyecto Árbolar no solo es una acción de restauración ecológica, sino que también busca el desarrollo social y económico de las comunidades, fortaleciendo su relación con el medio ambiente y asegurando un futuro más sostenible para las generaciones venideras."
          inverted={true} embedYoutubeUrl="https://www.youtube.com/embed/R8gmj1unNlg?si=ntNO35cEnrKHAEAr" />
        <ProjectShowcase title="Hospital Móvil"
          body="El Hospital Móvil de la Fundación Deuda Interna cumple un papel fundamental al acercar servicios de salud a comunidades que se encuentran alejadas de los centros médicos o que tienen acceso limitado a la atención sanitaria. A través de unidades móviles equipadas y profesionales de la salud, se brindan controles médicos, atención primaria, prevención de enfermedades y orientación sanitaria.
          La importancia de estas tareas radica en que permiten detectar y tratar problemas de salud a tiempo, mejorar la calidad de vida de las personas y reducir desigualdades en el acceso a la atención médica. Además, el hospital móvil promueve la educación para la salud y la prevención, fortaleciendo el bienestar de las comunidades y generando un impacto positivo y duradero en las poblaciones más vulnerables."
          embedYoutubeUrl="https://www.youtube.com/embed/Fq3eX_IJFYI?si=NnvrY_EKDlvZOpwo" />

        <ProjectShowcase title="Investigación"
          body="La Comisión Nacional de Investigación del Genocidio para el Resarcimiento Histórico de los Pueblos Originarios es una iniciativa orientada a investigar, documentar y visibilizar las masacres y persecuciones sufridas por pueblos originarios en Argentina, especialmente durante las campañas militares y procesos de expansión territorial del Estado entre fines del siglo XIX y mediados del siglo XX.
          Importancia de la Comisión
          1. Reconstrucción histórica y memoria colectiva
          La comisión busca recuperar testimonios, documentos y evidencias sobre episodios de violencia estatal contra pueblos indígenas. Este trabajo permite reconstruir una parte de la historia argentina que durante décadas fue invisibilizada o poco investigada.
          2. Investigación directa con participación de las comunidades
          Un aspecto central es que muchas investigaciones son realizadas con la participación activa de las propias comunidades indígenas, que aportan testimonios orales, localización de sitios de masacres y memoria colectiva transmitida entre generaciones. Esto fortalece la legitimidad del proceso y convierte a las comunidades en protagonistas de la investigación sobre su propia historia.
          3. Identificación y preservación de pruebas históricas
          La comisión trabaja en la identificación de lugares de matanzas y posibles fosas comunes, así como en la documentación audiovisual de testimonios de sobrevivientes y descendientes. Estas pruebas son fundamentales para proteger esos sitios y avanzar en investigaciones históricas y judiciales.
          4. Búsqueda de reconocimiento y reparación histórica
          Uno de sus objetivos es impulsar el reconocimiento institucional del genocidio indígena y promover medidas de reparación histórica, como el acceso a archivos oficiales, la restitución de tierras y políticas públicas que reconozcan los derechos de los pueblos originarios.
          5. Articulación con instituciones académicas y sociales
          La comisión se apoya en organizaciones sociales, universidades y especialistas para desarrollar investigaciones interdisciplinarias que combinen historia, antropología, derechos humanos y memoria social.
          Rol de la Fundación Deuda Interna
          La Fundación Deuda Interna ha sido un actor clave en la conformación y funcionamiento de la comisión, aportando recursos humanos, técnicos y económicos para llevar adelante las investigaciones y apoyar el trabajo de las comunidades indígenas involucradas.
          La Comisión Nacional de Investigación del Genocidio es importante porque contribuye a esclarecer hechos históricos de violencia contra los pueblos originarios, preservar evidencias, fortalecer la memoria colectiva y promover procesos de verdad, justicia y reparación histórica en Argentina. "
          inverted={true} embedYoutubeUrl="https://www.youtube.com/embed/6SRVEUNHBlo?si=SqGP8zA6wdEmWqQJ" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
