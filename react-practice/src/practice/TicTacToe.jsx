import "./ticTacToe.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

// List of cell indices that are 3-in-a-row. 定义了所有可能的三连线组合，用于判断胜负。
const CELLS_IN_A_LINE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Determine if there's a winner for the board.
function determineWinner(board) {
  for (let i = 0; i < CELLS_IN_A_LINE.length; i++) {
    const [x, y, z] = CELLS_IN_A_LINE[i];
    // Determine if the cells in a line have the same mark.
    if (board[x] != null && board[x] === board[y] && board[y] === board[z]) {
      return board[x];
    }
  }

  // No winner yet.
  return null;
}

function Cell({ index, disabled, mark, turn, onClick }) {
  return (
    <button
      aria-label={mark == null ? `Mark cell ${index} as ${turn}` : undefined} //aria-label：用于无障碍访问，如果格子为空，则显示当前玩家的操作提示。
      className="tic-tac-toe-cell"
      disabled={disabled}
      onClick={onClick}
    >
      <span aria-hidden={true}>{mark}</span>
    </button>
  );
}

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setIsXPlaying] = useState(true);

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const winner = determineWinner(board);

  function onReset() {
    setBoard(Array(9).fill(null));
    setIsXPlaying(true);
  }

  function getStatusMessage() {
    //根据当前游戏状态生成状态消息
    if (winner != null) {
      return `Player ${winner} wins!`;
    }

    // All cells have been filled up.
    if (!board.includes(null)) {
      return `It's a draw!`;
    }

    return `Player ${xIsPlaying ? "X" : "O"} turn`;
  }

  return (
    <div className="tic-tac-toe-container">
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <h1>Tic Tac Toe</h1>
      <div aria-live="polite">{getStatusMessage()}</div>
      <div className="tic-tac-toe-board">
        {Array(9)
          .fill(null)
          .map((_, index) => index) //将数组的每个元素映射为其索引值，结果是一个 [0, 1, 2, 3, 4, 5, 6, 7, 8] 的数组。
          .map((cellIndex) => {
            //映射索引以生成格子组件
            const turn = xIsPlaying ? "X" : "O";
            return (
              <Cell
                key={cellIndex}
                disabled={board[cellIndex] != null || winner != null} //如果当前格子已经被标记或已有胜者，则禁用按钮。
                index={cellIndex}
                mark={board[cellIndex]}
                turn={turn}
                onClick={() => {
                  const newBoard = board.slice(); //创建一个新的棋盘状态副本。
                  newBoard[cellIndex] = turn; //将当前玩家的标记放置在当前格子中。
                  setBoard(newBoard); //更新棋盘状态。
                  setIsXPlaying(!xIsPlaying); //切换到另一玩家。
                }}
              />
            );
          })}
      </div>
      <button
        onClick={() => {
          if (winner == null) {
            // Confirm whether to reset the game.
            const confirm = window.confirm(
              "Are you sure you want to reset the game?"
            );
            if (!confirm) {
              return;
            }
          }

          onReset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
