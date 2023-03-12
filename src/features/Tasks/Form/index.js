import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const foucsInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent !== "") {
      dispatch(
        addTask({
          content: trimmedNewTaskContent,
          done: false,
          id: nanoid(),
        })
      );
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
