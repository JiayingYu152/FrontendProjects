import "./gridLight.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/*
config：定义一个3x3的网格，其中1表示可点击的单元格，0表示不可点击的单元格。
*/
const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const Cell = ({ filled, label, isDisabled, onClick }) => {
  return (
    <button
      aria-label={label} //用于辅助技术的标签。
      type="button"
      className={[ //className根据filled状态动态应用类名。
        "grid-light-page-cell",
        filled && "grid-light-page-cell--actived",  //filled 指示单元格是否被激活。
      ]
        .filter(Boolean)
        .join(" ")} //filter(Boolean)：删除数组中的所有假值。join(" ")：将数组元素连接为一个字符串。这个join后面的空格是不能不写的！！！很重要！！！
      disabled={isDisabled} // disabled prevents cells from responding to clicks. 
      //disabled：防止被禁用的单元格响应点击。 isDisabled：指示单元格是否被禁用。 
      onClick={onClick} //单击单元格时的处理函数。
    ></button>
  );
};

const GridLight = () => {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const [order, setOrder] = useState([]); //order 记录被激活的单元格索引。
  const [isDeactivating, setIsDeactivating] = useState(false); //指示是否在停用单元格。

  const deactivateCells = () => { //每300毫秒停用一个单元格，直到所有单元格都被停用。
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  return (
    <div className="grid-light-container">
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>

      <div
        className="grid-light-page-grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => //flat(1)：将二维数组转换为一维数组。 输出: [1, 1, 1, 1, 0, 1, 1, 1, 1]
          value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              isDisabled={order.includes(index) || isDeactivating}
              onClick={() => {
                const newOrder = [...order, index];
                setOrder(newOrder);

                if (newOrder.length === config.flat(1).filter(Boolean).length) {
                  deactivateCells();
                }
              }}
            />
          ) : (
            <span key={index} />
          )
        )}
      </div>
      {/* Helper to show the state */}
      <pre>order array: {order.join(",")}</pre>
    </div>
  );
};

export default GridLight;
