import { gameStates, images } from "../constants/constants";
import {
  BackImage,
  FrontImage,
  SingleCardContainer,
} from "./styles/CardStyles";

const SingleCard = ({
  card,
  handleCardClick,
  flipped,
  gameState,
  showCards,
  hoveredOverCard,
  isGridSizeValid,
  children,
}) => {
  return (
    <SingleCardContainer
      showCards={showCards}
      card={card}
      hoveredOverCard={hoveredOverCard}
      gameState={gameState}
      isGridSizeValid={isGridSizeValid}
    >
      {gameState === gameStates.playing && (
        <FrontImage
          src={card.src}
          flipped={flipped}
          matched={card.matched}
          alt="card front"
        />
      )}
      {children}
      <BackImage
        src={images.CARDBACK.src}
        alt="card back"
        id={card.position}
        onClick={() => handleCardClick(card)}
        flipped={flipped}
        isGridSizeValid={isGridSizeValid}
        gameState={gameState}
      />
    </SingleCardContainer>
  );
};

export default SingleCard;
