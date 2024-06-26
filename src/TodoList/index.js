import React from "react";
import "./TodoList.css";

const TodoList = ({ children, loading }) => {
  // Se está usando la propiedad children del objeto props para renderizar los items del todo.
  return (
    <ul className={`todo-list ${loading ? "text-center" : ""}`}>{children}</ul>
  );
};

export { TodoList };
