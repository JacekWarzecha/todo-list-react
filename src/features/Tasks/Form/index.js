import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

export const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const foucsInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent !== "") {
      addNewTask(trimmedNewTaskContent);
    }

    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        name="newTask"
        placeholder="Co jest do zrobienia?"
        autoFocus
        maxLength="1001"
      />
      <Button onClick={foucsInput}>Dodaj zadanie</Button>
    </StyledForm>
  );
};
