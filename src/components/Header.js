import { Button, Counter, Message } from "./styles/GlobalComponents";

const Header = ({ startNewGame, changeGridSize, turns, gameState }) => {
  return (
    <>
      <h1>Memory Game</h1>
      {gameState === "PLAYING" && (
        <>
          <Button onClick={startNewGame}>New game</Button>
          <Button onClick={changeGridSize}>Change gridsize</Button>
          <Counter>Turns: {turns}</Counter>
          <Counter>Matched: x/x</Counter>
        </>
      )}
      {gameState === "SETTINGGRIDSIZE" && (
        <Message>
          Please click a card to set gridsize! (only an even number of cards is
          possible){" "}
        </Message>
      )}
    </>
  );
};

export default Header;
