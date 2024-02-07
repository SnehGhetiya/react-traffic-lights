import { useEffect, useState } from "react";
import "./App.css";

const CIRCLES = [
  {
    id: 0,
    onColor: "red",
    offColor: "white",
  },
  {
    id: 1,
    onColor: "yellow",
    offColor: "white",
  },
  {
    id: 2,
    onColor: "green",
    offColor: "white",
  },
];

function App() {
  const [activeColor, setActiveColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeColor === 0) {
        setActiveColor(2);
      } else if (activeColor === 1) {
        setActiveColor(0);
      } else if (activeColor === 2) {
        setActiveColor(1);
      }
    }, [7000, 2000, 5000][activeColor]);
    return () => clearInterval(interval);
  }, [activeColor]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `calc(100vh - 80px)`,
      }}
    >
      <div
        style={{
          border: "1px solid black",
          height: "70vh",
          width: "10vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          padding: "20px 0",
        }}
      >
        {CIRCLES?.map((circle) => (
          <div
            key={circle.id}
            style={{
              border: "1px solid black",
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              backgroundColor:
                circle?.id === activeColor ? circle?.onColor : circle?.offColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
