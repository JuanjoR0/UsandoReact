import { useState } from "react";

export default function E7({ volver }) {
  const [longitud, setLongitud] = useState("");
  const [password, setPassword] = useState("");

  const generar = () => {
    if (longitud === "" || Number(longitud) < 4) {
      setPassword("La longitud debe ser al menos 4");
      return;
    }

    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";

    for (let i = 0; i < Number(longitud); i++) {
      const aleatorio = Math.floor(Math.random() * caracteres.length);
      pass += caracteres[aleatorio];
    }

    setPassword(pass);
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
        gap: "20px",
      }}
    >
      <h1>Generador de contraseñas</h1>

      <input
        type="number"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        placeholder="Longitud"
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid gray" }}
      />

      <button onClick={generar}>Generar contraseña</button>

      <h2>{password}</h2>

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
