import { useContext } from "react";
import "./container.css";
import { createGrid, GameContext } from "../context/GameContext";

const Container = ({ children }) => {
  const { setGameOver, count, setCount, setGrid, setRand } =
    useContext(GameContext);
  return (
    <div className="container">
      <h1>
        Find the <span>Secret Color!</span>
      </h1>
      {children}
      <strong>Clicks: {count}</strong>
      <p>Keep Searching!</p>
      <button
        onClick={() => {
          setCount(0);
          setGrid(createGrid);
          setGameOver(false);

          setRand(Math.floor(Math.random() * 100));
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default Container;
