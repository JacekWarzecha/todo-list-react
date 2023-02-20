import "./style.css";
import { StyledSection, Header, Body, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>

    <Body>{body}</Body>
  </StyledSection>
);

export default Section;
