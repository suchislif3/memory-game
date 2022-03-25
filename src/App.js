import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import theme from "./Themes/default";
import {
  CardGrid,
  MainContainer,
  Stat,
} from "./components/styles/GlobalComponents";
import { gameStates, basicGridSize, images } from "./constants/constants";
import NewGameSection from "./components/NewGameSection";
import SingleCard from "./components/SingleCard";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [choosingDisabled, setChoosingDisabled] = useState(false);
  const [gridSize, setGridSize] = useState(basicGridSize);
  const [gameState, setGameState] = useState(gameStates.settingGridSize);
  const [cardTheme, setCardTheme] = useState("ANIMALS");
  const [hoveredOverCard, setHoveredOverCard] = useState("");
  const [numberOfCards, setNumberOfCards] = useState(
    gridSize.rows * gridSize.columns
  );
  const [showCards, setShowCards] = useState(true);

  const shuffleCards = () => {
    //getting random cards
    let halfOfCards = [];
    for (let i = 0; i < numberOfCards / 2; ) {
      const randomNumber = Math.floor(
        Math.random() * images.FRONT[cardTheme].length
      );
      if (halfOfCards.indexOf(images.FRONT[cardTheme][randomNumber]) === -1) {
        halfOfCards.push(images.FRONT[cardTheme][randomNumber]);
        i++;
      }
    }
    //doubling the selected cards
    let setOfCards = [...halfOfCards, ...halfOfCards];

    //getting random order of the cards
    for (let i = setOfCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = setOfCards[i];
      setOfCards[i] = setOfCards[j];
      setOfCards[j] = temp;
    }

    //sorting cards into a 2d array with additional properties
    let cardsArray = [];
    for (let i = 0; i < gridSize.rows; i++) {
      cardsArray.push([]);
      for (let j = 0; j < gridSize.columns; j++) {
        cardsArray[i].push({
          ...setOfCards[j + i * gridSize.columns],
          position: [i, j],
          matched: false,
          animDelay: `${(i + j) * 0.1}s`,
        });
      }
    }
    setCards(cardsArray);
  };

  const resetGame = () => {
    setTurns(0);
    setMatchedPairs(0);
    resetChoices();
    // setting property 'matched' to false to prevent revealing the new game's cards while flipping cards
    setCards((prevCards) => {
      let newCardsArray = [...prevCards];
      for (let i = 0; i < gridSize.rows; i++) {
        for (let j = 0; j < gridSize.columns; j++) {
          newCardsArray[i][j].matched = false;
        }
      }
      return newCardsArray;
    });
  };

  const startNewGame = () => {
    resetGame();
    setTimeout(() => {
      shuffleCards();
    }, 100);
  };

  const isGridSizeValid = (card) => {
    return (
      !(((card.position[0] + 1) * (card.position[1] + 1)) % 2) &&
      (card.position[0] + 1) * (card.position[1] + 1) >= 4
    );
  };

  const handleCardClick = (card) => {
    switch (gameState) {
      case gameStates.playing:
        handleChoice(card);

        break;
      case gameStates.settingGridSize:
        if (isGridSizeValid(card)) handleSettingGridSize(card);
        break;

      default:
        break;
    }
  };

  const handleChoice = (card) => {
    if (!choosingDisabled) choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const handleSettingGridSize = (card) => {
    setShowCards(false);
    startNewGame();
    setTimeout(() => {
      setGridSize({
        rows: card.position[0] + 1,
        columns: card.position[1] + 1,
      });
      setHoveredOverCard("");
      setGameState(gameStates.playing);
      setShowCards(true);
    }, 700 + (gridSize.rows + gridSize.columns - 2) * 100);
  };

  const changeGridSize = () => {
    setShowCards(false);
    setTimeout(() => {
      setGridSize(basicGridSize);
      setGameState(gameStates.settingGridSize);
      setShowCards(true);
      resetGame();
    }, 700 + (gridSize.rows + gridSize.columns - 2) * 100);
  };

  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setChoosingDisabled(false);
  };

  useEffect(() => {
    setNumberOfCards(gridSize.rows * gridSize.columns);
  }, [gridSize]);

  useEffect(() => {
    shuffleCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfCards]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setChoosingDisabled(true);
      setTurns((prevTurns) => prevTurns + 1);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          let newCardsArray = [...prevCards];
          newCardsArray[choiceOne.position[0]][
            choiceOne.position[1]
          ].matched = true;
          newCardsArray[choiceTwo.position[0]][
            choiceTwo.position[1]
          ].matched = true;
          return newCardsArray;
        });
        resetChoices();
        setMatchedPairs((prevMatchedPairs) => prevMatchedPairs + 1);
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
        <NewGameSection
          startNewGame={startNewGame}
          gridSize={gridSize}
          changeGridSize={changeGridSize}
          gameState={gameState}
          hoveredOverCard={hoveredOverCard}
          cardTheme={cardTheme}
          setCardTheme={setCardTheme}
          numberOfCards={numberOfCards}
          matchedPairs={matchedPairs}
        />

        {gameState === "PLAYING" ? (
          matchedPairs === numberOfCards / 2 ? (
            <span>You did it in {turns} turns!</span>
          ) : (
            <Stat>
              <span>Turns: {turns}</span>
              <span>
                Matched: {matchedPairs} / {numberOfCards / 2}
              </span>
            </Stat>
          )
        ) : (
          <span>
            Please select theme and click on a card to set the grid size and
            start the game!
          </span>
        )}

        <CardGrid columns={gridSize.columns} rows={gridSize.rows}>
          {cards.map((cardRow) => {
            return cardRow.map((card, id) => (
              <div
                key={id}
                onMouseEnter={() => {
                  if (
                    gameState === gameStates.settingGridSize &&
                    isGridSizeValid(card)
                  )
                    setHoveredOverCard(card);
                }}
                onMouseLeave={() => setHoveredOverCard(null)}
              >
                <SingleCard
                  key={showCards ? id : id + gridSize.columns}
                  card={card}
                  handleCardClick={handleCardClick}
                  flipped={
                    card === choiceOne || card === choiceTwo || card.matched
                  }
                  gameState={gameState}
                  showCards={showCards}
                  hoveredOverCard={hoveredOverCard}
                  isGridSizeValid={isGridSizeValid(card)}
                />
              </div>
            ));
          })}
        </CardGrid>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
