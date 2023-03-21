import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { RemoteButtons } from "./RemoteButtons";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";
import { Container } from "../../common/Container";

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<RemoteButtons />}
      />
    </Container>
  );
}

export default Tasks;