import { useState } from "react";

export default function E8({ volver }) {
  const [texto, setTexto] = useState("");

  let caracteres = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      caracteres = caracteres + 1;
    }
  }

  let palabras = 0;
  let textoRecortado = texto;
  while (textoRecortado.startsWith(" ")) {
    textoRecortado = textoRecortado.substring(1);
  }
  while (textoRecortado.endsWith(" ")) {
    textoRecortado = textoRecortado.substring(0, textoRecortado.length - 1);
  }

  if (textoRecortado !== "") {
    let partes = textoRecortado.split(" ");
    for (let i = 0; i < partes.length; i++) {
      if (partes[i] !== "") {
        palabras = palabras + 1;
      }
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Contador de palabras y caracteres</h1>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí..."
        rows="6"
        cols="40"
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid gray" }}
      />

      <h3>Caracteres: {caracteres}</h3>
      <h3>Palabras: {palabras}</h3>

      <button
        onClick={volver}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Volver al menú
      </button>
    </div>
  );
}
