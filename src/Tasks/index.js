import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`
        tasks__listItem ${
          task.done && hideDoneTasks ? "tasks__listItem--hidden" : ""
        }`}
      >
        <button className="tasks__listButton tasks__listButton--done">
          {task.done ? "✔" : ""}
        </button>

        <span className={`${task.done ? "tasks__listItem--done" : ""}`}>
          {task.content}
        </span>

        <button className=" tasks__listButton tasks__listButton--red">
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
