import "./digitalClock.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Custom Hook to update current date every second
const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return date;
};

// Format time to ensure two digits
const formatTime = (time) => {
  return time >= 10 ? String(time) : `0${time}`;
};

// Component to render time in HH:MM:SS format
const ClockImplement = ({ hours, minutes, seconds }) => {
  return (
    <div className="digital-clock-container" aria-hidden={false}>
      <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:
      <span>{formatTime(seconds)}</span>
    </div>
  );
};

// Main Clock component
const DigitalClock = () => {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const date = useCurrentDate(); // Custom hook to get the current time
  const hours = date.getHours(); // Using 24-hour display
  //   const hours = date.getHours() % 12; // Using 12-hour display
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>

      <ClockImplement hours={hours} minutes={minutes} seconds={seconds} />
    </>
  );
};

export default DigitalClock;
