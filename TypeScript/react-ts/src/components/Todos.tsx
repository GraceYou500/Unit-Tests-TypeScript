import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// items here is an array of Todo type (defined in Todo file)
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
}; // React.FC => generics type: function component, means props is an object that always has children property.

export default Todos;
