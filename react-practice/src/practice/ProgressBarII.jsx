import "./progressBarII.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProgressBarComponent = ({ isEmpty, onCompleted }) => {
  const [startTransition, setStartTransition] = useState(false);

  // Start transition when the bar is no longer empty.
  useEffect(() => {
    if (isEmpty || startTransition) {
      return;
    }

    setStartTransition(true);
  }, [isEmpty]);

  return (
    <div className="progress-bar-ii-single-bar">
      <div
        className={["bar-contents", startTransition && "bar-contents--filled"]
          .filter(Boolean)
          .join(" ")}
        onTransitionEnd={() => {
          onCompleted();
        }}
      />
    </div>
  );
};

const ProgressBarII = () => {
  const [bars, setBars] = useState(0);
  const [numFilledUpBars, setNumFilledUpBars] = useState(0);

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  return (
    <>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <div className="progress-bar-ii-container">
        <div>
          <button
            onClick={() => {
              setBars(bars + 1);
            }}
          >
            Add
          </button>
        </div>
        <div className="progress-bar-ii-bars-containers">
          {Array(bars)
            .fill(null)
            .map((_, index) => (
              <ProgressBarComponent
                isEmpty={index > numFilledUpBars}
                key={index}
                onCompleted={() => {
                  setNumFilledUpBars(numFilledUpBars + 1);
                }}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProgressBarII;
