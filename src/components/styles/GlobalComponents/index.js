import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 10px 2%;
`;

export const Button = styled.button`
  background: none;
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

export const CardGrid = styled.div`
  max-width: 1040px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 5px;
`;
