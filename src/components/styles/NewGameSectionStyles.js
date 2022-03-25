import styled from "styled-components";

export const NewGameDiv = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

export const ThemeHeading = styled.h4`
  grid-area: 1 / 1 / 2 / 2;
`;

export const ThemeSelection = styled.div`
  display: flex;
  grid-area: 2 / 1 / 3 / 2;

  & select {
    padding: 0.2em 0.4em;
    background: ${({ theme }) => theme.colors.neutral};
    color: ${({ theme }) => theme.colors.primary.dark};
    border: 0;
    border-radius: 6px;
  }
`;

export const LibraryTheme = styled.h2`
  text-transform: lowercase; 
  color: ${({ theme }) => theme.colors.secondary2.light};
  margin: 30px auto 0;
  border-top: 1px dashed ${({ theme }) => theme.colors.secondary2.light};
`;

export const LibraryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1%;
`;

export const LibraryItemImage = styled.img`
  width: 50px;
`;

export const LibraryItemText = styled.p`
  margin-left: 5px;
  text-align: left;
`;

export const GridSizeHeading = styled.h4`
  grid-area: 1 / 2 / 2 / 3;
`;

export const GridSize = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  grid-area: 2 / 2 / 3 / 3;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary1.light};
  }
`;
