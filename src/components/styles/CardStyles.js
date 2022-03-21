import styled, { keyframes } from "styled-components";
import { gameStates } from "../../constants/constants";

const fadeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const SingleCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  animation: ${fadeInOut} 0.7s ease-out
    ${({ showCards }) => (showCards ? "normal backwards" : "reverse forwards")};
  animation-delay: ${({ card }) => card.animDelay};
  transition: all ease 0.1s;
  filter: ${({ card, hoveredOverCard, isGridSizeValid, gameState }) =>
    `${
      gameState === gameStates.settingGridSize
        ? hoveredOverCard &&
          card.position[0] <= hoveredOverCard.position[0] &&
          card.position[1] <= hoveredOverCard.position[1]
          ? ""
          : "invert(40%)"
        : ""
    }
    ${
      gameState === gameStates.settingGridSize && !isGridSizeValid
        ? hoveredOverCard &&
          card.position[0] <= hoveredOverCard.position[0] &&
          card.position[1] <= hoveredOverCard.position[1]
          ? ""
          : "opacity(20%)"
        : ""
    }`};

  img {
    width: 100%;
    height: 100%;
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.neutral};
    border-radius: 6%;
  }
`;

export const FrontImage = styled.img`
  position: absolute;
  transform: ${({ flipped }) => (flipped ? "rotateY(0deg)" : "rotateY(90deg)")};
  transition: all ease-in ${({ matched }) => (matched ? "0.6s" : "0.1s")};
  transition-delay: ${({ flipped }) => (flipped ? "0.1s" : "0s")};
  opacity: ${({ matched }) => (matched ? "50%" : "1")};
`;

export const BackImage = styled.img`
  transform: ${({ flipped }) => (flipped ? "rotateY(90deg)" : "rotateY(0deg)")};
  transition: all ease-in 0.1s;
  transition-delay: ${({ flipped }) => (flipped ? "0s" : "0.1s")};
  pointer-events: ${({ flipped, isGridSizeValid, gameState }) =>
    flipped || (gameState === gameStates.settingGridSize && !isGridSizeValid)
      ? "none"
      : "auto"};
  cursor: pointer;
`;
