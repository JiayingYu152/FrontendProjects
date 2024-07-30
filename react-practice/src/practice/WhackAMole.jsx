import "./whackAMole.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Fisher-Yates shuffle. 洗牌算法， 随机打乱数组顺序。
function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateMolePositions(molesAtOnce, totalCount) { //生成地鼠出现的位置
  // Generate an array containing values [0, totalCount].
  const indices = Array.from({ length: totalCount }).map((_, index) => index);
  shuffle(indices);
  // Take the first `totalCount` items from the shuffled array.
  const shuffledIndices = indices.slice(0, molesAtOnce);

  return new Set(shuffledIndices); //返回打乱后的前 molesAtOnce 个索引的集合，表示地鼠出现的位置。
}

function WhackAMoleComponent({
  rows = 3,
  cols = 3,
  roundDuration = 30,
  molesAtOnce = 1,
  molesAppearingInterval = 1500,
}) {
  const totalCount = rows * cols;

  // Set of indices for currently visible moles.
  const [visible, setVisible] = useState(new Set());
  // Current player score.
  const [score, setScore] = useState(null);
  // Whether the game is in progress.
  const [running, setRunning] = useState(false);
  // Time left for the current round.
  const [timeLeft, setTimeLeft] = useState(roundDuration);
  const countdownTimerId = useRef(null);

  //使用 useEffect 根据 running 状态控制地鼠的出现。如果 running 为 true，每 molesAppearingInterval 毫秒调用 generateMolePositions 更新可见地鼠的位置。
  useEffect(() => {
    let timerId;
    if (running) {
      // Generate moles at fixed intervals.
      timerId = setInterval(() => {
        setVisible(generateMolePositions(molesAtOnce, totalCount));
      }, molesAppearingInterval);
    }
    return () => {
      clearInterval(timerId);
      setVisible(new Set());
    };
  }, [running, molesAtOnce, molesAppearingInterval, totalCount]);


  function startGame() {//重置游戏状态，开始计时。
    // Reset variables to default values.
    setRunning(true);
    setTimeLeft(roundDuration);
    setScore(0);

    // Interval to decrement the timer to 0.
    countdownTimerId.current = setInterval(() => {
      setTimeLeft((currTimeLeft) => {
        if (currTimeLeft <= 0) {
          clearInterval(countdownTimerId.current);
          setRunning(false);
          return 0;
        }

        return currTimeLeft - 1;
      });
    }, 1000);
  }

  //使用 useEffect 确保组件卸载时清除倒计时定时器。
  useEffect(() => {
    return () => {
      // Clear countdown timer on unmount if it's running.
      clearInterval(countdownTimerId.current);
    };
  }, []);

  //打地鼠逻辑: 点击事件处理程序 whackMole，如果点击的地方有地鼠，从 visible 集合中删除该地鼠的索引，并增加分数。
  function whackMole(index) {
    // Whacking on an empty cell, no-op.
    if (!visible.has(index)) {
      return;
    }

    const newVisible = new Set(visible);
    newVisible.delete(index);
    setVisible(newVisible);
    setScore((score ?? 0) + 1);
  }

  return (
    <div className="whack-a-mole-component-container">
      <div className="whack-a-mole-header">
        {score == null ? (
          <button
            className="whack-a-mole-start-button"
            type="button"
            onClick={startGame}
          >
            Start Game
          </button>
        ) : (
          <div className="whack-a-mole-round-information">
            <p>Score: {score}</p>
            {!running && (
              <button
                className="whack-a-mole-start-button"
                type="button"
                onClick={startGame}
              >
                Play again
              </button>
            )}
            <p>Time Left: {timeLeft}</p>
          </div>
        )}
      </div>
      <div
        className="whack-a-mole-grid"
        style={{
          gridTemplateColumns: `repeat(${rows}, 1fr)`,
          gridTemplateRows: `repeat(${cols}, 1fr)`,
        }}
      >
        {Array(totalCount)
          .fill(null)
          .map((_, index) => {
            return (
              <button
                className="whack-a-mole-grid__cell"
                key={index}
                onClick={() => whackMole(index)}
              >
                <img
                  src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-head.png"
                  alt="Mole head"
                  className={[
                    "whack-a-mole-grid__cell-contents",
                    "whack-a-mole-mole-head",
                    visible.has(index) && "whack-a-mole-mole-head--visible",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
                <img
                  src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-hill.png"
                  alt="Mole hill"
                  className="whack-a-mole-grid__cell-contents mole-hill"
                />
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default function WhackAMole() {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  return (
    <div className="whack-a-mole-container">
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <hr />
      <WhackAMoleComponent
        rows={3}
        cols={3}
        roundDuration={15}
        molesAtOnce={2}
        molesAppearingInterval={1500}
      />{" "}
    </div>
  );
}
