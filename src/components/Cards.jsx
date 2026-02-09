import { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => setProjetos(data.projetos))
      .catch(err => console.error("Erro ao carregar projetos:", err));
  }, []);

  return (
    <div className="cardsContainer">

{projetos.map((projeto, index) => (
  <div 
    className="Card" 
    key={projeto.id}
    style={{ animationDelay: `${index * 0.1}s` }} // Delay de 0.1s entre cada card
  >
<div className="cardPicture">
  <img src={projeto.imagem} alt={projeto.nome} />
</div>

    <h3>{projeto.nome}</h3>
    <p>{projeto.descricao}</p>
    <p><strong>Tecnologias:</strong> {projeto.tecnologias.join(', ')}</p>
    <a href={projeto.link} target="_blank" rel="noopener noreferrer">
      Ver projeto
    </a>
  </div>
))}
    </div>
  );
};

export default Cards;
