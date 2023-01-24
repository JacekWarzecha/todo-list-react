import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import RemoteButtons from "./RemoteButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React from "react";

const tasks = [
  { id: 1, content: "Przejść na reacta", done: false },
  { id: 2, content: "Zjeść obiad", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
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
