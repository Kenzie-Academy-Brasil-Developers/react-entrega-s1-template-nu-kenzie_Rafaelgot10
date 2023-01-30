import { useState } from "react";
import "./dash.css";

import { Cards } from "../card/card.jsx";
import { Total } from "../total/total.jsx";
import { Form } from "../form/form.jsx";
import { Header } from "../header/header.jsx";
import { Filtro } from "../filtro/filtro.jsx";

function Dash({ setpage }) {
  const [listaFinancias, setListaFinancias] = useState([]);
  const [filtro, setFiltro] = useState("todos");

  return (
    <div className="dash__container">
      <Header setpage={setpage} />
      <div>
        <Form
          listaFinancias={listaFinancias}
          setListaFinancias={setListaFinancias}
        />
        <div className="resumoFinanceiro">
          {listaFinancias.length <= 0 ? (
            <>
              <h2>Resumo Financeiro</h2>
              <p>Você ainda não possui nenhum lançamento</p>

              <div className="empty">
                <div></div>

                <div className="barra"></div>
              </div>

              <div className="empty">
                <div></div>

                <div className="barra"></div>
              </div>

              <div className="empty">
                <div></div>

                <div className="barra"></div>
              </div>
            </>
          ) : (
            <>
              <Total listaFinancias={listaFinancias} />
              <Filtro setFiltro={setFiltro} />

              <Cards
                setFiltro={setFiltro}
                filtro={filtro}
                listaFinancias={listaFinancias}
                setListaFinancias={setListaFinancias}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dash;
