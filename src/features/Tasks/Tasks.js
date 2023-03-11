import { useState } from "react";
import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { RemoteButtons } from "./RemoteButtons";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";
import { Container } from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {
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
          <TaskList
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

export default Tasks;
