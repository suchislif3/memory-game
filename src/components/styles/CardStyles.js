import styled from "styled-components";

export const SingleCardContainer = styled.div`
  position: relative;

  img {
    width: 100%;
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
  pointer-events: ${({ flipped }) => (flipped ? "none" : "auto")};
  cursor: pointer;
`;
