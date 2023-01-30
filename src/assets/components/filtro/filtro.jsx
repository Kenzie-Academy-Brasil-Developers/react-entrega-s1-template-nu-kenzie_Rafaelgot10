import "./filtro.css";

export function Filtro({ setFiltro }) {
  function todos() {
    setFiltro("todos");
  }
  function entrada() {
    setFiltro("entrada");
  }
  function saida() {
    setFiltro("saida");
  }

  return (
    <div className="filtro">
      <h2>Resumo Financeiro</h2>
      <div>
        <button onClick={() => todos()} type="button">
          Todos
        </button>
        <button onClick={() => entrada()} type="button">
          Entrada
        </button>
        <button onClick={() => saida()} type="button">
          Saida
        </button>
      </div>
    </div>
  );
}
