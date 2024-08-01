import "./stopwatch.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const MS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND;
const MS_IN_MINUTE = SECONDS_IN_MINUTE * MS_IN_SECOND;

function formatTime(timeParam) { //函数将总时间（以毫秒为单位）转换为小时、分钟、秒和毫秒的对象。逐级计算小时、分钟和秒，并剩余的部分为毫秒。
  let time = timeParam;
  const parts = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  };
  if (time > MS_IN_HOUR) {
    parts.hours = Math.floor(time / MS_IN_HOUR);
    time %= MS_IN_HOUR;
  }

  if (time > MS_IN_MINUTE) {
    parts.minutes = Math.floor(time / MS_IN_MINUTE);
    time %= MS_IN_MINUTE;
  }

  if (time > MS_IN_SECOND) {
    parts.seconds = Math.floor(time / MS_IN_SECOND);
    time %= MS_IN_SECOND;
  }

  parts.ms = time;

  return parts;
}

function padTwoDigit(number) { //将数字格式化为两位数。如果数字小于 10，前面加 0。
  return number >= 10 ? String(number) : `0${number}`;
}

export default function Stopwatch() {
  const lastTickTiming = useRef(null); //使用 useRef 存储上一次计时的时间戳。
  const [totalDuration, setTotalDuration] = useState(0);
  // Timer ID of the active interval, if one is running.
  const [timerId, setTimerId] = useState(null);

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  // Derived state to determine if there's a timer running. 派生状态，判断计时器是否在运行。
  const isRunning = timerId != null;

  function startTimer() { //启动计时器，使用 setInterval 每 1 毫秒更新一次总时间。
    lastTickTiming.current = Date.now(); //lastTickTiming.current 存储当前时间。
    setTimerId(
      window.setInterval(() => {
        const now = Date.now();
        const timePassed = now - lastTickTiming.current;
        setTotalDuration(
          (duration) =>
            // Use the callback form of setState to ensure
            // we are using the latest value of duration.
            duration + timePassed
        );
        lastTickTiming.current = now;
      }, 1)
    );
  }

  function stopInterval() {
    window.clearInterval(timerId);
    setTimerId(null);
  }

  function resetTimer() {
    stopInterval();
    setTotalDuration(0);
  }

  function toggleTimer() {
    if (isRunning) {
      stopInterval();
    } else {
      startTimer();
    }
  }

  const formattedTime = formatTime(totalDuration); //将总时间格式化为小时、分钟、秒和毫秒。

  return (
    <div className="stopwatch-container">
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>

      <br />
      <button //用于显示时间
        className="stopwatch-time"
        onClick={() => {
          toggleTimer();
        }}
      >
        {formattedTime.hours > 0 && (
          <span>
            <span className="stopwatch-time-number">{formattedTime.hours}</span>
            <span className="stopwatch-time-unit">h</span>
          </span>
        )}{" "}
        {formattedTime.minutes > 0 && (
          <span>
            <span className="stopwatch-time-number">
              {formattedTime.minutes}
            </span>
            <span className="stopwatch-time-unit">m</span>
          </span>
        )}{" "}
        <span>
          <span className="stopwatch-time-number">{formattedTime.seconds}</span>
          <span className="stopwatch-time-unit">s</span>
        </span>{" "}
        <span className="stopwatch-time-number stopwatch-time-number--small">
          {padTwoDigit(Math.floor(formattedTime.ms / 10))} {/*将毫秒数除以 10 并向下取整，以显示两位数的精度 */}
        </span>
      </button>
      <div>
        <button //点击时切换计时器状态。
          onClick={() => {
            toggleTimer();
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>{" "}
        <button
          onClick={() => {
            resetTimer();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
