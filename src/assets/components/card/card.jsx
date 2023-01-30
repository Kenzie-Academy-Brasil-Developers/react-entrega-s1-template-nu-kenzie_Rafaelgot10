import { ImBin } from "react-icons/im";

import "./card.css";

export function Cards({ listaFinancias, setListaFinancias, filtro }) {
  function remover(id) {
    let novoarray = listaFinancias.filter((card) => card.id != id);

    setListaFinancias(novoarray);
  }

  if (filtro == "todos") {
    return listaFinancias.map((card) => {
      if (card.tipo == "Entrada") {
        return (
          <div key={card.id} className="cardEntrada">
            <div className="descricao">
              <h1>{card.descricao}</h1>
              <p>{card.tipo}</p>
            </div>
            <div className="valor">
              <span>R$ {card.valor},00</span>
              <ImBin onClick={() => remover(card.id)} />
            </div>
          </div>
        );
      } else {
        return (
          <div key={card.id} className="cardDespesa">
            <div className="descricao">
              <h1>{card.descricao}</h1>
              <p>{card.tipo}</p>
            </div>
            <div className="valor">
              <span>R$ {card.valor},00</span>
              <ImBin onClick={() => remover(card.id)} />
            </div>
          </div>
        );
      }
    });
  } else if (filtro == "entrada") {
    return listaFinancias.map((card) => {
      if (card.tipo == "Entrada") {
        return (
          <div key={card.id} className="cardEntrada">
            <div className="descricao">
              <h1>{card.descricao}</h1>
              <p>{card.tipo}</p>
            </div>
            <div className="valor">
              <span>R$ {card.valor},00</span>
              <ImBin onClick={() => remover(card.id)} />
            </div>
          </div>
        );
      }
    });
  } else if (filtro == "saida") {
    return listaFinancias.map((card) => {
      if (card.tipo == "Saida") {
        return (
          <div key={card.id} className="cardDespesa">
            <div className="descricao">
              <h1>{card.descricao}</h1>
              <p>{card.tipo}</p>
            </div>
            <div className="valor">
              <span>R$ {card.valor},00</span>
              <ImBin onClick={() => remover(card.id)} />
            </div>
          </div>
        );
      }
    });
  }
}
