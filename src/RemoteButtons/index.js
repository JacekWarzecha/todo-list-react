import React from "react";
import "./style.css";

const RemoteButtons = ({ tasks, hideDone, toggleHideDone }) => (
  <div className="remoteButtons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="remoteButtons__buttons">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>

        <button
          className="remoteButtons__buttons"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default RemoteButtons;
