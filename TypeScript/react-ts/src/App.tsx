import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  // const todos = [
  //   new Todo("Learn React"),
  //   new Todo("Learn TypeS"),
  //   new Todo("Learn Planting"),
  //   new Todo("Love Secullent"),
  // ];

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

  console.log("todos", todos);

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={onRemoveHandler} />
    </div>
  );
}

export default App;
