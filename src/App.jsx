import "./App.css";
import Container from "./components/Container";
import GridLayout from "./components/GridLayout";
import { GameProvider } from "./context/GameContext";

function App() {
  
  return (
    <GameProvider>
      <Container>
        <GridLayout />
      </Container>
    </GameProvider>
  );
}

export default App;
