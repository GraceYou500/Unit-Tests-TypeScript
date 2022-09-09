class Todo {
  id: string; // type anotation on property value, in typescript need to define the property type
  text: string;

  // constructor's urgument todoText also assign a type:
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
