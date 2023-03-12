import { List, Item, Content, Button } from "./styled";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

export const TaskList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => toggleTaskDone(task.id)} toggleDone>
            {task.done ? "✔" : ""}
          </Button>

          <Content done={task.done}>{task.content}</Content>

          <Button onClick={() => removeTask(task.id)} remove>
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  );
};
