import React from "react";

const Todo = props => {
  return (
    <div
      className={`todo${props.todo.taskCompleted ? "taskCompleted" : ""}`}
      onClick={e => props.toggleItem(props.todo.id)}
    >
      {props.todo.name}
    </div>
  );
};

export default Todo;
