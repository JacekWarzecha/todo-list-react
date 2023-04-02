import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { Buttons } from "../Buttons";

export const LoadExampleTasks = () => {
  const dispatch = useDispatch();

  return (
    <Buttons onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Buttons>
  );
};
