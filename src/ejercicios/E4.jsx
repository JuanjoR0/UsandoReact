import { useState } from "react";

export default function E4({ volver }) {
  const elementos = ["Perro", "Gato", "Pez", "Caballo", "Murcielago", "Gorila"];
  const [busqueda, setBusqueda] = useState("");

  let filtrados = [];
  for (let i = 0; i < elementos.length; i++) {
    if ((elementos[i].toLowerCase()).includes(busqueda.toLowerCase())) {
      filtrados.push(elementos[i]);
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
      <h1>Filtro sencillo</h1>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Escribe algo..."
        style={{
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid gray",
          width: "200px",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtrados.length > 0 ? (
          filtrados.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li style={{ color: "gray" }}>No hay resultados</li>
        )}
      </ul>

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
