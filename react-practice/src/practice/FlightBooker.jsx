import React, { useState } from "react";
import "./flightBooker.css";
import { useNavigate } from "react-router-dom";

const formatDate = (date) => {
  //目的是将JavaScript的Date对象转换成一个格式化的日期字符串，具体格式为YYYY-MM-DD
  console.log("before converting, date is: ", date); // Thu May 16 2024 18:06:05 GMT-0400 (Eastern Daylight Time)

  const year = date.getFullYear(); //getFullYear()直接返回一个数值，通常用于表示年份
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); //getMonth()返回月份，范围从0（1月）到11（12月）。因此，在使用时需要加1来得到常规的月份表示（1-12月）。
  const day = date.getDate().toString().padStart(2, "0"); //返回月份中的日，范围从1到31

  // 对于月份和日期，使用了toString()方法将数值转换为字符串，这是因为你需要在这些值为个位数时用"0"进行填充，确保它们始终是两位数（例如，5月变为"05"）。这通过padStart(2, "0")实现，它确保字符串至少有两个字符的长度，如果不足则在前面填充"0"。

  console.log("after converting, date becomes: ", [year, month, day].join("-")); // after converting, date becomes:  2024-05-16

  return [year, month, day].join("-"); //当数组中的元素通过join()方法连接成字符串时，所有的元素（包括数字）自动转换为字符串
};

const TODAY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

const FlightBooker = () => {
  const [flightOption, setFlightOption] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(
    formatDate(new Date(Date.now() + DAY_IN_SECONDS))
  );
  const [returnDate, setReturnDate] = useState(departureDate);
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const handleSumbit = (event) => {
    event.preventDefault(); //用来阻止事件的默认行为。对于表单提交事件，浏览器的默认行为是发送表单数据到服务器并重新加载页面。
    if (flightOption === "one-way") {
      alert(`You have booked a one-way flight on ${departureDate}`);
    } else {
      alert(
        `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
      );
    }
  };

  return (
    <div>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <form className="flight-booker-form-container" onSubmit={handleSumbit}>
        <select
          value={flightOption}
          onChange={(event) => setFlightOption(event.target.value)}
        >
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>

        {/* 使用aria-label是提高网页可访问性的一种有效方法，特别是在标签不可见或元素难以准确描述时。这对于确保所有用户，特别是使用辅助技术的用户，都能有效地与网页交互非常重要。 */}

        <input
          aria-label="Departure date"
          type="date"
          value={departureDate}
          onChange={(event) => setDepartureDate(event.target.value)}
          min={TODAY}
        />
        {flightOption === "return" && (
          <input
            aria-label="Return date"
            type="date"
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
            min={departureDate}
          />
        )}
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default FlightBooker;
