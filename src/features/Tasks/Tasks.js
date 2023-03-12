import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { RemoteButtons } from "./RemoteButtons";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";
import { Container } from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {
  const { removeTask, toggleTaskDone, setAllDone } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={
          <TaskList removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={<RemoteButtons setAllDone={setAllDone} />}
      />
    </Container>
  );
}

export default Tasks;
