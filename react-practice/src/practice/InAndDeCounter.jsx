import "./inAndDeCounter.jsx.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InAndDeCounter = () => {
  const [lightingType, setLightType] = useState("increment"); //either increment or decrement
  const [increment, setIncrement] = useState(100);
  const [decrement, setDecrement] = useState(26);

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const handleIncrementButtonClick = (event) => {
    event.preventDefault();
    if (lightingType === "decrement") {
      setLightType("increment");
      setDecrement(26);
    }
    setIncrement(increment + 1);
  };

  const handleDecrementButtonClick = (event) => {
    event.preventDefault();
    if (lightingType === "increment") {
      setLightType("decrement");
      setIncrement(100);
    }
    setDecrement(decrement - 1);
  };

  const handleResetButton = (event) => {
    event.preventDefault();
    setLightType("increment");
    setIncrement(100);
    setDecrement(26);
  };

  const incrementButtonClass =
    lightingType === "increment" ? "button-light" : "button-dark";
  const decrementButtonClass =
    lightingType === "decrement" ? "button-light" : "button-dark";

  return (
    <>
      {" "}
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <div className="in-and-de-counter-container">
        <button
          type="button"
          className={`increment-button ${incrementButtonClass}`}
          onClick={handleIncrementButtonClick}
        >
          Increment: {increment}
        </button>
        <button
          type="button"
          className={`decrement-button ${decrementButtonClass}`}
          onClick={handleDecrementButtonClick}
        >
          Decrement: {decrement}
        </button>
        <button type="reset" onClick={handleResetButton}>
          RESET
        </button>
      </div>
    </>
  );
};

export default InAndDeCounter;
