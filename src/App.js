import { useState } from "react";
import { Form } from "./Form";
import { Tasks } from "./Tasks";
import { RemoteButtons } from "./RemoteButtons";
import { Section } from "./Section";
import { Header } from "./Header";
import { Container } from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } =
    useTasks();

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <RemoteButtons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
