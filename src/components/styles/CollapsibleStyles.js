import styled from "styled-components";

export const CollapsibleTitle = styled.div`
  width: 70%;
  writing-mode: vertical-lr;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.primary.light};
  padding: 3px;
  border: 1px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;

  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    filter: brightness(1.2);
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 400px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 50%;
  }
`;

export const CollapsibleArrow = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "rotateZ(180deg)" : "")};
  transition: all 0.2s;
`;

export const CollapsibleContent = styled.div`
  width: 70%;
  transform: translateY(-6px);
  padding-top: 6px;
  border-radius: 0 0 6px 6px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.primary.light};
  max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: ${({ isOpen }) => (isOpen ? "" : "hidden")};;
  transition: all 0.3s ease;

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 400px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 50%;
  }
`;
