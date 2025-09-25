import { useState } from "react";

export default function E5({ volver }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const sumar = () => {
    if (num1 === "" || num2 === "") {
      setResultado("Debes escribir dos números");
    } else {
      setResultado(Number(num1) + Number(num2));
    }
  };

  const restar = () => {
    if (num1 === "" || num2 === "") {
      setResultado("Debes escribir dos números");
    } else {
      setResultado(Number(num1) - Number(num2));
    }
  };

  const multiplicar = () => {
    if (num1 === "" || num2 === "") {
      setResultado("Debes escribir dos números");
    } else {
      setResultado(Number(num1) * Number(num2));
    }
  };

  const dividir = () => {
    if (num1 === "" || num2 === "") {
      setResultado("Debes escribir dos números");
    } else if (Number(num2) === 0) {
      setResultado("No se puede dividir por 0");
    } else {
      setResultado(Number(num1) / Number(num2));
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <h1>Calculadora sencilla</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid gray" }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid gray" }}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
      </div>

      <h2>Resultado: {resultado}</h2>

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
