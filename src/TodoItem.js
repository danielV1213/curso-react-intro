import React from "react";

const TodoItem = ({ text, completed }) => {
  return (
    <li>
      <span>V</span>
      <p>{text}</p>
    </li>
  );
};

export { TodoItem };
