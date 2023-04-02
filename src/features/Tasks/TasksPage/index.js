import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { RemoteButtons } from "./RemoteButtons";
import { Section } from "../../../common/Section";
import { Header } from "../../../common/Header";
import { Container } from "../../../common/Container";
import Search from "./Search";
import { LoadExampleTasks } from "./LoadExampleTasks";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<LoadExampleTasks />}
      />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<RemoteButtons />}
      />
    </Container>
  );
}

export default TasksPage;
