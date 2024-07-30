import "./undoableCounter.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OPERATIONS = {
  "/2": { type: "divide", number: 2 },
  "-1": { type: "decrement", number: 1 },
  "+1": { type: "increment", number: 1 },
  x2: { type: "multiply", number: 2 },
};

function performOperation(counter, operationLabel) {
  const operation = OPERATIONS[operationLabel];
  switch (operation.type) {
    case "increment":
      return counter + operation.number;
    case "decrement":
      return counter - operation.number;
    case "multiply":
      return counter * operation.number;
    case "divide":
      return counter / operation.number;
    default:
      return counter;
  }
}

function UndoableCounterHistory({ history }) {
  if (history.length === 0) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Operation</th>
          <th>Old</th>
          <th>New</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr key={index}>
            <td>{item.operation}</td>
            <td>{item.oldCounter}</td>
            <td>{item.newCounter}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function UndoableCounter() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [undoHistory, setUndoHistory] = useState([]);

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  function onReset() {
    setCounter(0);
    setHistory([]);
    setUndoHistory([]);
  }

  function onUndo() {
    const [latest, ...earlierHistory] = history;
    setCounter(latest.oldCounter);
    setUndoHistory([latest, ...undoHistory]);
    setHistory(earlierHistory);
  }

  function onRedo() {
    const [latest, ...earlierUndoHistory] = undoHistory;
    setCounter(latest.newCounter);
    setUndoHistory(earlierUndoHistory);
    setHistory([latest, ...history]);
  }

  function onClickOperation(operation) {
    const oldCounter = counter;
    const newCounter = performOperation(counter, operation);
    setCounter(newCounter);
    setHistory([{ operation, oldCounter, newCounter }, ...history]);
    setUndoHistory([]);
  }

  return (
    <div>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>

      <div className="undoable-counter-row">
        <button disabled={history.length === 0} onClick={onUndo}>
          Undo
        </button>
        <button disabled={undoHistory.length === 0} onClick={onRedo}>
          Redo
        </button>
        <button onClick={onReset}>Reset</button>
      </div>
      <hr />
      <div className="undoable-counter-row">
        <button onClick={() => onClickOperation("/2")}>/2</button>
        <button onClick={() => onClickOperation("-1")}>-1</button>
        <div className="undoable-counter-page-counter">{counter}</div>
        <button onClick={() => onClickOperation("+1")}>+1</button>
        <button onClick={() => onClickOperation("x2")}>x2</button>
      </div>
      <hr />
      <div className="undoable-counter-row">
        <UndoableCounterHistory history={history} />
      </div>
    </div>
  );
}
