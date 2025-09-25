
import { useState } from "react";

export default function E3({ volver }) {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  const agregarTarea = () => {
    if (texto.trim() === "") 
    return; 
    setTareas([...tareas, texto]); 
    setTexto(""); 
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
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
      <h1>Lista dinámica</h1>

      <div>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe algo..."
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid gray",
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            cursor: "pointer",
            border: "none",
            borderRadius: "6px",
            background: "black",
            color: "white",
          }}
        >
          Agregar
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              padding: "8px 12px",
              border: "1px solid gray",
              borderRadius: "6px",
              minWidth: "250px",
            }}
          >
            {tarea}
            <button
              onClick={() => eliminarTarea(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
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
