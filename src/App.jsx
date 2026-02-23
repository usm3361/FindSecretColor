import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import GridLayout from "./components/GridLayout";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Container count={count}>
        <GridLayout setCount={setCount} />
      </Container>
    </>
  );
}

export default App;
