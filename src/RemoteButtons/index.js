import React from "react";
import { RemoteButtonsArea, Buttons } from "./styled.js";

const RemoteButtons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <RemoteButtonsArea>
    {tasks.length > 0 && (
      <>
        <Buttons onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Buttons>

        <Buttons
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Buttons>
      </>
    )}
  </RemoteButtonsArea>
);

export default RemoteButtons;
