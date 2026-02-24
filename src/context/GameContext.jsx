import { createContext, useEffect, useState } from "react";

export const GameContext = createContext(null);

export let counter = 0;

export const createGrid = () => {
  const arr = [];
  for (let i = counter; i < counter + 100; i++) {
    arr.push(i);
  }
  counter += 100;

  return arr;
};

export const GameProvider = ({ children }) => {
  const [rand, setRand] = useState(Math.floor(Math.random() * 100));
  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState(createGrid);
  const [gameOver, setGameOver] = useState(false);
  
    useEffect(() => {
    console.log(rand);
  }, [rand]);

  const value = {
    rand,
    setRand,
    count,
    setCount,
    grid,
    setGrid,
    gameOver,
    setGameOver,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
