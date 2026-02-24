import { useContext, useState } from "react";
import "./Cell.css";
import { createConfetti } from "./hooks/confetti";
import { GameContext } from "../context/GameContext";

const Cell = ({ index }) => {
  const [pressed, setPressed] = useState(false);
  const {rand, setCount, gameOver, setGameOver} = useContext(GameContext)

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
