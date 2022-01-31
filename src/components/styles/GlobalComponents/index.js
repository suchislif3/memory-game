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
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 8px;
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.colors.neutral};
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary2_light};
  }
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.colors.neutral};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.neutral};
`;

export const CardGrid = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-auto-rows: minmax(
    auto,
    min(
      ${({ columns, rows }) => `calc(75vmin / max(${rows}, ${columns}))`},
      200px
    )
  );
  gap: 0.6vmin;
`;
