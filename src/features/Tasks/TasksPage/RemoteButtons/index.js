import { RemoteButtonsArea, Buttons } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../../tasksSlice.js";

export const RemoteButtons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <RemoteButtonsArea>
      <Buttons onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Buttons>
      {!areTasksEmpty && (
        <>
          <Buttons onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Buttons>

          <Buttons
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Buttons>
        </>
      )}
    </RemoteButtonsArea>
  );
};
