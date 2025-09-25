import { useState } from "react";
import "./App.css";

import E1 from "./ejercicios/E1";
import E2 from "./ejercicios/E2";
import E3 from "./ejercicios/E3";
import E4 from "./ejercicios/E4";
import E5 from "./ejercicios/E5";
import E6 from "./ejercicios/E6";
import E7 from "./ejercicios/E7";
import E8 from "./ejercicios/E8";
import E9 from "./ejercicios/E9";

function App() {
  const [ejercicio, setEjercicio] = useState(null);

  const renderEjercicio = () => {
    switch (ejercicio) {
      case 1: return <E1 volver={() => setEjercicio(null)} />;
      case 2: return <E2 volver={() => setEjercicio(null)} />;
      case 3: return <E3 volver={() => setEjercicio(null)} />;
      case 4: return <E4 volver={() => setEjercicio(null)} />;
      case 5: return <E5 volver={() => setEjercicio(null)} />;
      case 6: return <E6 volver={() => setEjercicio(null)} />;
      case 7: return <E7 volver={() => setEjercicio(null)} />;
      case 8: return <E8 volver={() => setEjercicio(null)} />;
      case 9: return <E9 volver={() => setEjercicio(null)} />;
      default:
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              width: "800px",
              height:"600px",
              margin: "50px auto",
            }}
          >
            {Array.from({ length: 9 }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setEjercicio(i + 1)}
                style={{
                  padding: "40px",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "12px",
                  background: "black",
                  color: "white",
                }}
              >
                Ejercicio {i + 1}
              </button>
            ))}
          </div>
        );
    }
  };

  return <div>{renderEjercicio()}</div>;
}

export default App;
