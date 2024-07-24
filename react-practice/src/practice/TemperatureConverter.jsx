import "./temperatureConverter.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TemperatureConverter = () => {
    const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (!isNaN(value) && value !== "") {
      const fahrenheitValue = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(4));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (!isNaN(value) && value !== "") {
      const celsiusValue = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(celsiusValue.toFixed(4));
    } else {
      setCelsius("");
    }
  };

  return (
    <div className="temperature-converter-page-container">
         <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      
      <h1>Temperature Converter</h1>
      <form>
        <label>
          <input type="text" value={celsius} onChange={handleCelsiusChange} />
          Celsius
        </label>
        <p>=</p>
        <label>
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
          Fahrenheit
        </label>
      </form>
    </div>
  );
};

export default TemperatureConverter;
