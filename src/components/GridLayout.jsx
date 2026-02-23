import "./GridLayout.css";
import Cell from "./Cell";
import { useState } from "react";

const rand = Math.floor(Math.random() * 100);
console.log(rand);
const GridLayout = ({ setCount }) => {
  const [gameOver, setGameOver] = useState(false);
  const grid = new Array(100)
    .fill("")
    .map((_, i) => (
      <Cell
        key={i}
        index={i+1}
        rand={rand}
        setCount={setCount}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
    ));
  return <div className="grid-erea">{grid.map((e) => e)}</div>;
};

export default GridLayout;
