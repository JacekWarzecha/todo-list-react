import { StyledSection, Header, Body, Title } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>

    <Body>{body}</Body>
  </StyledSection>
);
