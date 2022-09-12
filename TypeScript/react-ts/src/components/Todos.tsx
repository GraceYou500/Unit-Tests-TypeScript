import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// items here is an array of Todo type (defined in Todo file)
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item, index) => (
        <TodoItem
          key={index}
          text={item.text}
          onRemoveItem={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}; // React.FC => generics type: function component, means props is an object that always has children property.

export default Todos;
