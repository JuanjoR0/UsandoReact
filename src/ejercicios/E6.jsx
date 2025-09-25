import { useState, useRef } from "react";

export default function E6({ volver }) {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const intervalo = useRef(null);

  const iniciar = () => {
    if (intervalo.current) return;

    intervalo.current = setInterval(() => {
      setSegundos((s) => {
        if (s + 1 === 60) {
          setMinutos((m) => {
            if (m + 1 === 60) {
              setHoras((h) => h + 1);
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return s + 1;
      });
    }, 1000);
  };

  const pausar = () => {
    clearInterval(intervalo.current);
    intervalo.current = null;
  };

  const reiniciar = () => {
    clearInterval(intervalo.current);
    intervalo.current = null;
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
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
      <h1>
        {horas}:{minutos}:{segundos}
      </h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={pausar}>Pausar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>

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
