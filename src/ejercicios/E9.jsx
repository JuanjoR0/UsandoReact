import { useState, useEffect } from "react";

export default function E9({ volver }) {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState(() => {
    try {
      const guardadas = localStorage.getItem("e9_tareas");
      return guardadas ? JSON.parse(guardadas) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("e9_tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregar = () => {
    const t = texto.trim();
    if (!t) return;
    setTareas([...tareas, { texto: t, completada: false }]);
    setTexto("");
  };

  const marcarCompletada = (i) => {
    const nuevas = [...tareas];
    nuevas[i].completada = !nuevas[i].completada;
    setTareas(nuevas);
  };

  const limpiarCompletadas = () => {
    setTareas(tareas.filter((t) => !t.completada));
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
      <h1>Lista de tareas</h1>

      <div>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid gray" }}
        />
        <button onClick={agregar} style={{ marginLeft: "10px" }}>
          Agregar
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tareas.map((tarea, i) => (
          <li key={i} style={{ marginBottom: "8px" }}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => marcarCompletada(i)}
            />
            <span
              style={{
                marginLeft: "8px",
                textDecoration: tarea.completada ? "line-through" : "none",
              }}
            >
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={limpiarCompletadas}>Limpiar completadas</button>

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
