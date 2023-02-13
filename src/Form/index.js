import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent !== "") {
      addNewTask(trimmedNewTaskContent);
    }

    setNewTaskContent("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        name="newTask"
        className="form__input"
        placeholder="Co jest do zrobienia?"
        autoFocus
        maxLength="1001"
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};
export default Form;
