import React from "react";
import "./style.css";

const RemoteButtons = ({ tasks, hideDoneTasks }) => (
  <div className="remoteButtons">
    {tasks.length > 0 && (
      <>
        <button className="remoteButtons__buttons">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
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
