import "./total.css";

export function Total({ listaFinancias }) {
  function atualizaValor() {
    let valorTotal = 0;

    listaFinancias.map((financia) => {
      if (financia.tipo == "Entrada") {
        valorTotal = valorTotal + parseInt(financia.valor);
      } else {
        valorTotal = valorTotal - parseInt(financia.valor);
      }
    });

    if (valorTotal < 0) {
      return <span className="negativo">$ {valorTotal},00</span>;
    } else {
      return <span className="positivo">$ {valorTotal},00</span>;
    }
  }

  return (
    <div className="total">
      <div>
        <h1>Valor total </h1>

        {atualizaValor()}
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}
