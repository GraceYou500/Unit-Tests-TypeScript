import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

export const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: (todoId: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return [...prevTodo, newTodo];
      // return prevTodo.concat(newTodo);
    }); // concat will return a new array that contains newTodo, not mutate the existing array
  };

  const onRemoveHandler = (todoId: string) => {
    setTodos((PrevTodos) => {
      return PrevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onRemoveHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
