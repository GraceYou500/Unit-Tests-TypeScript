import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

// void here means return nothing, coz we don't need return value in the aubmithandler
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null); // meaning the inputRef we created here will connect to an input element type

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      {/* input id can connect lable with the htmlFor */}
      <button>Submit todo</button>
    </form>
  );
};

export default NewTodo;
