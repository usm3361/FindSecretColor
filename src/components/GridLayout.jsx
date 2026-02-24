import "./GridLayout.css";
import Cell from "./Cell";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const GridLayout = () => {
  const { grid } = useContext(GameContext);
  return (
    <div className="grid-erea">
      {grid.map((id, i) => (
        <Cell key={id} index={i + 1} />
      ))}
    </div>
  );
};

export default GridLayout;
