import { useState } from "react";
import "./assets/styles/home.css";
import main_img from "./assets/img/main-img.svg";
import Dash from "./assets/components/dash/dash.jsx";

function App() {
  const [page, setpage] = useState("home");

  function dash() {
    setpage("dash");
  }

  if (page == "home") {
    return (
      <div className="App">
        <div className="home__container">
          <h1>
            <span>Nu</span> Kenzie
          </h1>

          <h2>Centralize o controle das suas finanças</h2>

          <span>de forma raida e segura</span>

          <button onClick={() => dash()}>Iniciar</button>
        </div>

        <div className="img__container">
          <img src={main_img} />
        </div>
      </div>
    );
  } else if (page == "dash") {
    return <Dash setpage={setpage} />;
  }
}

export default App;
