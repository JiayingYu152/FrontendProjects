import "./progressBar.css";
import { useNavigate } from "react-router-dom";

const MIN = 0;
const MAX = 100;

const ProgressBarItem = ({ value }) => {
  // Handle invalid values and convert them to be within [0, 100].
  const validValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className="progress-bar-page-single-progress-bar-content">
      <div
        className="progress-bar-page-single-progress-bar"
        style={{ width: `${validValue}%` }}
        role="progressbar"
        aria-valuenow={validValue}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
      >
        {validValue}%
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  return (
    <div className="progress-bar-page-container">
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>

      <ProgressBarItem value={0} />
      <ProgressBarItem value={25} />
      <ProgressBarItem value={50} />
      <ProgressBarItem value={75} />
      <ProgressBarItem value={100} />
      <ProgressBarItem value={2} />
      <ProgressBarItem value={-10} />
      <ProgressBarItem value={120} />
    </div>
  );
};

export default ProgressBar;
