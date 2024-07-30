import "./starRating.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Star = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={["star-icon", filled ? "star-icon-filled" : ""].join(" ")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
};

const StarRatingComponent = ({ max, value, onChange }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); //用于处理渲染和交互，是否hover在某一颗星星上
  //hoveredIndex: 当前悬停的星星索引，用于在鼠标悬停时显示星星的高亮状态。

  return (
    <div>
      {Array.from({ length: max }).map(
        (
          _,
          index //Array.from({ length: max })：创建一个长度为 max 的数组，用于生成星星。
        ) => (
          <span //每个 span 元素包裹一个 Star 组件，并处理鼠标事件
            key={index}
            tabIndex={0}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onChange(index + 1)}
          >
            <Star
              filled={
                hoveredIndex != null ? index <= hoveredIndex : index < value
              }
            />
          </span>
        )
      )}
    </div>
  );
};

const StarRating = () => {
  const [rating, setRating] = useState(3); //setRating 用于更新评分值的状态更新函数。

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  return (
    <>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <div className="star-rating-container">
        <StarRatingComponent max={5} value={rating} onChange={setRating} />
      </div>
    </>
  );
};

export default StarRating;
