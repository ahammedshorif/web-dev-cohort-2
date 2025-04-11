import React from "react";

function Todos({todos}) {
  return (
    <div className="bg-blue-400 p-2 m-4">
      {todos.map(function(todo) {
        return (
          <div className="bg-blue-700 p-2 m-4">
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "completed" : "mark as completed"}</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
