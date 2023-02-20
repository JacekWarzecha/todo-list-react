import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #e8edf1;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: hsl(120, 100%, 25%);
      color: white;
      border: 1px solid green;
      transition: 0.25s;
      &:hover {
        background-color: hsl(120, 100%, 30%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: hsl(0, 100%, 50%);
      border: 1px solid red;
      transition: 0.25s;

      &:hover {
        background-color: hsl(0, 100%, 65%);
      }
    `}
`;
