import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// items here is an array of Todo type (defined in Todo file)
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item, index) => (
        <TodoItem
          key={index}
          text={item.text}
          onRemoveItem={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}; // React.FC => generics type: function component, means props is an object that always has children property.

export default Todos;
