import "./trafficLight.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const config = {
  red: {
    backgroundColor: "red",
    duration: 4000,
    next: "green",
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 500,
    next: "red",
  },
  green: {
    backgroundColor: "green",
    duration: 3000,
    next: "yellow",
  },
};

function Light({ backgroundColor }) {
  return (
    <div
      aria-hidden={true}
      className="traffic-light"
      style={{ backgroundColor }}
    />
  );
}

function TrafficLightComponent({
  initialColor = "green",
  config,
  layout = "vertical",
}) {
  const [currentColor, setCurrentColor] = useState(initialColor);

  useEffect(() => {
    const { duration, next } = config[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div
      aria-live="polite"
      aria-label={`Current light: ${currentColor}`}
      className={[
        "traffic-light-content",
        layout === "vertical" && "traffic-light-content--vertical",
      ]
        .filter((cls) => !!cls)
        .join(" ")}
    >
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          backgroundColor={
            color === currentColor ? config[color].backgroundColor : undefined
          }
        />
      ))}
    </div>
  );
}

function TrafficLight() {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  return (
    <>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <hr />
      <div className="traffic-light-container">
        <TrafficLightComponent config={config} />
        <TrafficLightComponent config={config} layout="horizontal" />
      </div>
      ;
    </>
  );
}

export default TrafficLight;
