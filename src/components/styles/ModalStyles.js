import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-height: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 2px;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  overflow: auto;
`;

export const CloseIconDiv = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  padding: 3px;
  color: ${({ theme }) => theme.colors.primary.dark};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary1.light};
  }
`;
