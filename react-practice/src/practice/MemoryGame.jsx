import "./memoryGame.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const emojis = [
  "🐵",
  "🐶",
  "🦊",
  "🐱",
  "🦁",
  "🐯",
  "🐴",
  "🦄",
  "🦓",
  "🦌",
  "🐮",
  "🐷",
  "🐭",
  "🐹",
  "🐻",
  "🐨",
  "🐼",
  "🐽",
  "🐸",
  "🐰",
  "🐙",
];

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate cards configuration with the required groups of emojis.
function generateCards(totalCount, matchCount) {
  const numGroups = totalCount / matchCount;
  if (numGroups > emojis.length) {
    throw new Error("Not enough emojis");
  }

  const emojisList = emojis.slice(0, numGroups);
  const cards = Array.from({ length: numGroups }, () => null)
    .map((_, idx) => idx)
    .map((idx) => Array.from({ length: matchCount }, () => emojisList[idx]))
    .flat();

  shuffle(cards);
  return cards;
}

function MemoryGameComponent({
  cols = 4,
  rows = 4,
  delay = 2000,
  matchCount = 2,
}) {
  // Total number of cells.
  const totalCount = rows * cols;
  // An array of emojis to represent the cards.
  const [cards, setCards] = useState(generateCards(totalCount, matchCount));
  // Currently flipped cards.
  const [flipped, setFlipped] = useState([]);
  // Identifier of matched cards.
  const [matched, setMatched] = useState(new Set());
  // Delay before cards are flipped back.
  const waitTimer = useRef(null);
  // Whether the game has completed.
  const [gameCompleted, setGameCompleted] = useState(false);

  const resetGame = useCallback(() => {
    waitTimer.current = null;
    setCards(generateCards(totalCount, matchCount));
    setFlipped([]);
    setMatched(new Set());
    setGameCompleted(false);
  }, [matchCount, totalCount]);

  useEffect(() => {
    resetGame();
  }, [cols, rows, matchCount, resetGame]);

  if (matchCount < 2) {
    throw new Error(`${matchCount} should be 2 or more`);
  }

  if (totalCount % matchCount !== 0) {
    throw new Error(
      `Cannot divide total cells of ${totalCount} by ${matchCount}`
    );
  }

  function onFlip(index) {
    let currFlipped = flipped;

    // Player flips more cards while there are
    // unmatched cards flipped open.
    if (waitTimer.current != null) {
      clearTimeout(waitTimer.current);
      waitTimer.current = null;
      currFlipped = [];
    }

    const newflipped = [...currFlipped, index];
    setFlipped(newflipped);

    // Not enough cards are flipped.
    if (newflipped.length < matchCount) {
      return;
    }

    const allFlippedAreSame = newflipped.every(
      (index) => cards[newflipped[0]] === cards[index]
    );

    if (allFlippedAreSame) {
      const newMatchedSet = new Set(matched);
      newMatchedSet.add(cards[newflipped[0]]);
      setMatched(newMatchedSet);
      setFlipped([]);

      if (newMatchedSet.size * matchCount === totalCount) {
        setGameCompleted(true);
      }

      return;
    }

    const timer = setTimeout(() => {
      // After a delay if no new cards were flipped, flip all cards back.
      setFlipped([]);
      waitTimer.current = null;
    }, delay);

    waitTimer.current = timer;
  }

  return (
    <div className="memory-game-container">
      <div
        className="memory-game-grid"
        style={{
          gridTemplateRows: `repeat(${rows}, var(--size))`,
          gridTemplateColumns: `repeat(${cols}, var(--size))`,
        }}
      >
        {cards.map((card, index) => {
          const isMatched = matched.has(cards[index]);
          const isFlipped = flipped.includes(index);

          return (
            <button
              key={index}
              className={[
                "memory-game-card",
                matched.has(cards[index]) && "memory-game-card--revealed",
              ]
                .filter(Boolean)
                .join(" ")}
              disabled={isMatched || isFlipped}
              onClick={() => {
                onFlip(index);
              }}
            >
              {(isMatched || isFlipped) && card}
            </button>
          );
        })}
      </div>
      {gameCompleted && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
}

export default function MemoryGame() {
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  return (
    <>
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>
      <hr />
      <MemoryGameComponent rows={4} cols={4} waitTime={3000} matchCount={2} />
    </>
  );
}
