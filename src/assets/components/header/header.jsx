import "./header.css";
import { useState } from "react";

export function Header({ setpage }) {
  function home() {
    setpage("home");
  }

  return (
    <header>
      <h2>
        <span>Nu</span> Kenzie
      </h2>
      <button onClick={() => home()}>Inicio </button>
    </header>
  );
}
