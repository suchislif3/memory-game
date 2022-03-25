import { useState, useEffect } from "react";
import { gameStates, images } from "../constants/constants";
import { Button } from "./styles/GlobalComponents";
import {
  ThemeSelection,
  NewGameDiv,
  GridSize,
  LibraryItem,
  IconDiv,
  LibraryItemImage,
  LibraryItemText,
  LibraryTheme,
  ThemeHeading,
  GridSizeHeading,
} from "./styles/NewGameSectionStyles";
import {
  CollapsibleArrow,
  CollapsibleContent,
  CollapsibleTitle,
} from "./styles/CollapsibleStyles";
import Modal from "./Modal";
import { AiFillSetting } from "react-icons/ai";
import { MdPhotoLibrary } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const NewGameSection = ({
  startNewGame,
  gridSize,
  changeGridSize,
  gameState,
  hoveredOverCard,
  setCardTheme,
  cardTheme,
  numberOfCards,
  matchedPairs,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showPhotoList, setShowPhotoList] = useState(false);
  const handleChange = (event) => {
    setCardTheme(event.target.value);
  };

  const handleTitleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    startNewGame();
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(gameState === gameStates.playing ? false : true);
  }, [gameState]);

  useEffect(() => {
    if (matchedPairs === numberOfCards / 2) {
      setTimeout(() => {
        setIsOpen(true);
      }, 400);
    }
  }, [matchedPairs, numberOfCards]);

  return (
    <>
      <CollapsibleTitle isOpen={isOpen} onClick={handleTitleClick}>
        <CollapsibleArrow isOpen={isOpen}>
          <IoIosArrowDown />
        </CollapsibleArrow>
      </CollapsibleTitle>
      <CollapsibleContent isOpen={isOpen}>
        <NewGameDiv>
          <ThemeHeading>Theme</ThemeHeading>
          <ThemeSelection>
            <select
              value={cardTheme}
              onChange={handleChange}
              name="theme"
              id="theme"
            >
              {Object.keys(images.FRONT).map((theme) => (
                <option key={theme} value={theme}>
                  {theme.toLowerCase()}
                </option>
              ))}
            </select>
            <IconDiv>
              <MdPhotoLibrary
                title="show photo library"
                onClick={() => setShowPhotoList(true)}
              />
            </IconDiv>
          </ThemeSelection>
          <GridSizeHeading>Grid size</GridSizeHeading>
          <GridSize>
            <span>
              {gameState === "PLAYING"
                ? `${gridSize.columns} x ${gridSize.rows}`
                : hoveredOverCard
                ? `${hoveredOverCard.position[1] + 1} x ${
                    hoveredOverCard.position[0] + 1
                  }`
                : "-"}
            </span>
            {gameState === "PLAYING" && (
              <IconDiv>
                <AiFillSetting title="set grid size" onClick={changeGridSize} />
              </IconDiv>
            )}
          </GridSize>

          {gameState === "PLAYING" && (
            <Button title="start new game" onClick={handleButtonClick}>
              Start new game
            </Button>
          )}
        </NewGameDiv>
      </CollapsibleContent>

      {showPhotoList && (
        <Modal onClose={() => setShowPhotoList(false)}>
          <LibraryTheme>card back cover</LibraryTheme>
          <LibraryItem>
            <LibraryItemImage src={images.BACK.src} />
            <LibraryItemText>
              Photo by{" "}
              <a href={images.BACK.credit.url} target="_blank" rel="noreferrer">
                {images.BACK.credit.name}
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/s/photos/water?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </LibraryItemText>
          </LibraryItem>

          {Object.keys(images.FRONT).map((theme) => {
            return (
              <>
                <LibraryTheme>{theme}</LibraryTheme>
                {images.FRONT[theme].map((card, id) => {
                  return (
                    <LibraryItem key={id}>
                      <LibraryItemImage src={card.src} />
                      <LibraryItemText>
                        Photo by{" "}
                        <a
                          href={card.credit.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {card.credit.name}
                        </a>{" "}
                        on{" "}
                        <a
                          href={`https://unsplash.com/s/photos/${theme.toLowerCase()}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Unsplash
                        </a>
                      </LibraryItemText>
                    </LibraryItem>
                  );
                })}
              </>
            );
          })}
        </Modal>
      )}
    </>
  );
};

export default NewGameSection;
