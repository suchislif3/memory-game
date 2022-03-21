import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 10px 2%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  max-width: fit-content;
  border: 2px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 8px;
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.colors.neutral};
  font-weight: bold;
  font-size: 0.8em;
  grid-area: 1 / 3 / 3 / 4;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary2_light};
  }
`;

export const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  max-width: 500px;
  @media (max-width: 1200px) {
    max-width: 400px;
  }
`;

export const CardGrid = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-auto-rows: minmax(
    auto,
    min(
      ${({ columns, rows }) => `calc(70vmin / max(${rows}, ${columns}))`},
      200px
    )
  );
  gap: 0.6vmin;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
