import Todos from "./components/Todos";

import NewTodo from "./components/NewTodo";

function App() {
  // const todos = [
  //   new Todo("Learn React"),
  //   new Todo("Learn TypeS"),
  //   new Todo("Learn Planting"),
  //   new Todo("Love Secullent"),
  // ];

  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
