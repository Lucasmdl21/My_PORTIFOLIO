import React from "react";

// CSS
import "./About.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <h1 className="Subtitle">Sobre</h1>
        <p className="textAbout">
          Olá! Meu nome é Lucas, sou desenvolvedor em formação e apaixonado por
          tecnologia e programação. Atualmente estudo Java e React,
          buscando criar projetos modernos e funcionais. Meu objetivo é evoluir
          na área de desenvolvimento e transformar ideias em soluções reais.
        </p>
      </div>

      <div className="aboutPicture">
       <img src="/images/me.png" alt="Minha foto" />

      </div>
    </div>
  );
};

export default About;
