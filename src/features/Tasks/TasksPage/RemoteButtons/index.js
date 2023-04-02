import { RemoteButtonsArea } from "./styled.js";
import { Buttons } from "../Buttons/index.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  toggleHideDone,
  setAllDone,
} from "../../tasksSlice.js";

export const RemoteButtons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <RemoteButtonsArea>
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
