import { useState } from "react";

export default function E2({volver}) {
    const [contador, setContador] = useState(0);

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
      <h1>Cliks: {contador}</h1>

      <button
        onClick={() => setContador(contador + 1)}
        style={{
          padding: "20px 40px",
          fontSize: "1.2rem",
          cursor: "pointer",
          border: "1px solid black",
          borderRadius: "8px",
          background: "white",
        }}
      >
        Haz clik
      </button>

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
