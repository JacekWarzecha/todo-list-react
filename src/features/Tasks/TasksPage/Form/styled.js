import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  border: none;
  border-radius: 1px;
  transition: 0.5s 0.1s, 0.5s;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(120%);
    transform: translateY(-5px);
  }
`;
