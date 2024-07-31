import "./analogClock.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FULL_ROTATION_DEGREES = 360;

/*
Hand 组件用于渲染时钟的指针，它接收高度、宽度和旋转角度作为属性，并通过CSS transform 属性来旋转指针。
*/
function Hand({ height = 1, width = 1, angle }) {
  return (
    <div
      aria-hidden={true} /*该元素及其子元素将从屏幕阅读器的访问中隐藏 / user更关系视觉上如何显示时间，而不是关心时间的文字描述(e.g. 2:30PM) */
      className="analog-clock-page-clock-hand"
      style={{
        transform: `rotate(${angle}deg) scaleY(${height}) scaleX(${width})`,
      }}
    />
  );
}

/*
useCurrentDate 是一个自定义Hook，用于 每1000毫秒/1秒 更新一次当前时间。它返回一个当前时间的Date对象。
*/
function useCurrentDate() {
  const [date, setDate] = useState(new Date());

  // Kick off the timer. 
  useEffect(() => {
    const timer = window.setInterval(() => {
      setDate(new Date());
    }, 1000); // Update the date every second.

    // Clear the timer upon unmount.
    return () => {
      window.clearInterval(timer);
    };
  }, []); /*useEffect 没有依赖项，意味着这个副作用只会在组件挂载（mount）和卸载（unmount）时运行一次 。 简单理解为 一次 rendering*/

  return date;
}

/*
padTwoDigit函数 用于将单个数字格式化为两位数的字符串，例如将9转换为“09”。
*/
function padTwoDigit(number) {
  return number >= 10 ? String(number) : `0${number}`;
}

/* 
ClockImplement 组件用于计算时钟指针的角度，并渲染指针。它接收小时、分钟、秒和时钟大小作为属性。通过百分比计算和常量 FULL_ROTATION_DEGREES 计算出每个指针的旋转角度。
*/
const ClockImplement = ({ hours, minutes, seconds, size }) => {
  const secondsPercentage = seconds / 60;
  // To have second-level precision in the minute hand angle.
  const minutesPercentage = (minutes + secondsPercentage) / 60;
  // To have minute-level precision in the hour hand angle.
  const hoursPercentage = ((hours % 12) + minutesPercentage) / 12;

  const hourAngle = hoursPercentage * FULL_ROTATION_DEGREES;
  const minutesAngle = minutesPercentage * FULL_ROTATION_DEGREES;
  const secondsAngle = secondsPercentage * FULL_ROTATION_DEGREES;

  const dateTimeDisplay = `${padTwoDigit(hours)}:${padTwoDigit(
    minutes
  )}:${padTwoDigit(seconds)}`;

  return (
    <time
      className="analog-clock-page-clock"
      dateTime={dateTimeDisplay}
      style={{
        "--size": `${size}px`,
      }}
    >
      <Hand height={0.5} angle={hourAngle} width={3} />
      <Hand height={0.9} angle={minutesAngle} width={2} />
      <Hand height={0.8} angle={secondsAngle} />
    </time>
  );
};

/*
AnalogClock组件使用 useCurrentDate Hook 获取当前时间，并传递给 ClockImplement 组件来渲染模拟时钟。
*/
const AnalogClock = () => {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const date = useCurrentDate();
  const hours = date.getHours() % 12;
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

      <ClockImplement
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        size={300}
      />
    </>
  );
};

export default AnalogClock;
