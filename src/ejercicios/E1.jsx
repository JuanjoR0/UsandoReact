import { useState } from "react";

export default function E1({ volver }) {
  const [color, setColor] = useState("blueviolet");

  const colorAleatorio = () => {
    const letras = "0123456789ABCDEF";
    let nuevoColor = "#";
    for (let i = 0; i < 6; i++) {
      nuevoColor += letras[Math.floor(Math.random() * 16)];
    }
    return nuevoColor;
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        position:"absolute",
        top:"0%",
        left:"0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: 0,
        padding: 0,
      }}
    >
      <button
        onClick={() => setColor(colorAleatorio())}
        style={{
          padding: "20px 40px",
          fontSize: "1.2rem",
          cursor: "pointer",
          border: "1px solid black",
          borderRadius: "8px",
          background: "white",
        }}
      >
        Cambiar color
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
