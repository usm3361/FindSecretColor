import { useState } from "react";
import "./Cell.css";
import { createConfetti } from "./hooks/confetti";

const Cell = ({ rand, index, setCount, gameOver, setGameOver }) => {
  const [pressed, setPressed] = useState(false);
  const isWon = rand === index;

  if (pressed)
    return <div className={isWon ? "won" : "failed"} id={index}></div>;
  function handleClick() {
    if (!gameOver) {
      if (isWon) {
        setGameOver(true);
        createConfetti();
      }

      setPressed(true);
      setCount((prev) => prev + 1);
    }
  }

  return <div className="cell" id={index} onClick={handleClick}></div>;
};

export default Cell;
