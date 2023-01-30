import "./form.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export function Form({ listaFinancias, setListaFinancias }) {
  const [financia, setFinancia] = useState({
    descricao: "",
    tipo: "Entrada",
    valor: "",
    id: uuid(),
  });

  function atualiza() {
    if (financia.descricao != "" && financia.valor != 0) {
      const novaFinancia = [...listaFinancias, financia];
      setListaFinancias(novaFinancia);

      setFinancia({
        descricao: "",
        tipo: "Entrada",
        valor: "",
        id: uuid(),
      });
    }
  }

  return (
    <form>
      <label for="Descrição">Descrição</label>
      <input
        value={financia.descricao}
        id="Descrição"
        type="text"
        onChange={(e) =>
          setFinancia({ ...financia, descricao: e.target.value })
        }
        placeholder="Digite aqui sua descrição"
      />
      <span>Ex: Compra de roupas</span>
      <div className="valores">
        <div>
          <label for="valor">Valor</label>
          <input
            id="valor"
            type="number"
            placeholder="R$ "
            value={financia.valor}
            onChange={(e) =>
              setFinancia({ ...financia, valor: e.target.value })
            }
          />
        </div>

        <div>
          <label for="tipo">Tipo de valor</label>

          <select
            id="tipo"
            name="tipo"
            value={financia.tipo}
            onChange={(e) => setFinancia({ ...financia, tipo: e.target.value })}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
          </select>
        </div>
      </div>

      <button type="button" onClick={() => atualiza()}>
        Inserir valor
      </button>
    </form>
  );
}
