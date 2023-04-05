import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Buttons } from "../Buttons";

export const LoadExampleTasks = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const onClickChange = () => {
    dispatch(fetchExampleTasks());
  };

  return (
    <Buttons disabled={loading} onClick={onClickChange}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Buttons>
  );
};
