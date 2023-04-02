import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />

    <Section
      title="Jacek Warzecha"
      body={
        <>
          Aktualnie moje zainteresowania oscylują wokół rynków finansowych oraz
          tworzenia ciekawych stron internetowych :)
        </>
      }
    />
  </Container>
);
