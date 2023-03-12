import { RemoteButtonsArea, Buttons } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice.js";

export const RemoteButtons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  const dispatch = useDispatch();
  return (
    <RemoteButtonsArea>
      {tasks.length > 0 && (
        <>
          <Buttons onClick={() => dispatch(toggleHideDone())}>
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
};
