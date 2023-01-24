import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import RemoteButtons from "./RemoteButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na reacta", done: false },
    { id: 2, content: "Zjeść obiad", done: true },
  ]);

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />
        }
        extraHeaderContent={
          <RemoteButtons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
