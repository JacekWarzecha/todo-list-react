import styled from "styled-components";

export const RemoteButtonsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Buttons = styled.button`
  margin: 0 0 0 20px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  color: hsl(180, 100%, 25%);
  transition: 0.25s;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: hsl(180, 100%, 30%);
    cursor: pointer;
  }

  &:disabled {
    color: #ccc;
  }
`;
