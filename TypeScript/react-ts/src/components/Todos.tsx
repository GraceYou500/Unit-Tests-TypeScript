import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}; // React.FC => generics type: function component, means props is an object that always has children property.

export default Todos;
