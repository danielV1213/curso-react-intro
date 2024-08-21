import React, { useContext } from "react";
import "./TodoList.css";
import { TodoContext } from "../TodoContext";

const TodoList = ({ children }) => {
  const { loading } = useContext(TodoContext);

  // Se está usando la propiedad children del objeto props para renderizar los items del todo.
  return (
    <ul className={`todo-list ${loading ? "text-center" : ""}`}>{children}</ul>
  );
};

export { TodoList };
