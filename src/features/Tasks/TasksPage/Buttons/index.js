import styled from "styled-components";

export const Buttons = styled.button`
  margin: 0 0 0 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  transition: 0.25s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`;
