import { useState } from "react";
import "./container.css";
const Container = ({ children ,count}) => {
    

  return (
    <div className="container">
      <h1>
        Find the <span>Secret Color!</span>
      </h1>
      {children}
      <strong>Clicks: {count}</strong>
      <p>Keep Searching!</p>
    </div>
  );
};

export default Container;
