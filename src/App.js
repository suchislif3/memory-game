import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import theme from "./Themes/default";
import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import { CardGrid, MainContainer, Button, Counter } from "./components/styles/GlobalComponents";
import Footer from "./components/Footer";
import { Images } from "./constants/constants";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...Images, ...Images]
    .sort(() => Math.random() - 0.5)
    .map((card, id) => ({ ...card, id: id + 1, matched: false }));
    setCards(shuffledCards);
  };
  
  const startNewGame = () => {
    setTurns(0);
    resetChoices();
    setCards(prevCards => prevCards.map(card=>({ ...card, matched: false })));
    setTimeout(() => {
      shuffleCards();
    }, 100);
  }

  const handleChoice = (card) => {
    if (!disabled) choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      setTurns((prevTurns) => prevTurns + 1);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoices();
      } else {
        setTimeout(() => resetChoices(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>
        <h1>Memory Game</h1>
        <Button onClick={startNewGame}>New game</Button>
        <CardGrid columns={4} rows={2}>
          {cards.map((card, id) => (
            <SingleCard
              key={id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </CardGrid>
        <Counter>Turns: {turns}</Counter>
      </MainContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
