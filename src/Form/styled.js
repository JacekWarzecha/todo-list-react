import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #e8edf1;

  @media (max-width: 767px) {
    width: 100%;
  }

  ::-webkit-input-placeholder {
    color: #9da2a5;
  }

  :-moz-placeholder {
    color: #9da2a5;
  }

  ::-moz-placeholder {
    color: #9da2a5;
  }

  :-ms-input-placeholder {
    color: #9da2a5;
  }
`;

export const Button = styled.button`
  background-color: hsl(180, 100%, 25%);
  color: #e8edf1;
  padding: 10px;
  border: 1px solid #e8edf1;
  border-radius: 2px;
  transition: 0.5s 0.1s, 0.5s;

  @media (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
    transform: translateY(-10px);
  }
`;
