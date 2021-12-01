import {
  BackImage,
  FrontImage,
  SingleCardContainer,
} from "./styles/CardStyles";

const SingleCard = ({ card, handleChoice, flipped }) => {
  return (
    <SingleCardContainer>
      <FrontImage src={card.src} flipped={flipped} matched={card.matched} alt="card front" />
      <BackImage
        src="/images/card-back.jpg"
        alt="card back"
        onClick={() => handleChoice(card)}
        flipped={flipped}
      />
    </SingleCardContainer>
  );
};

export default SingleCard;
