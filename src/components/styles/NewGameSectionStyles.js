import styled from "styled-components";

export const NewGameDiv = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
`;

export const ThemeSelection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  grid-area: 2 / 1 / 3 / 2;
`;

export const LibraryTheme = styled.h2`
  text-transform: lowercase; 
  color: ${({ theme }) => theme.colors.secondary2_light};
  margin: 30px auto 0;
  border-top: 1px dashed ${({ theme }) => theme.colors.secondary2_light};
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
    color: ${({ theme }) => theme.colors.secondary1_light};
  }
`;
