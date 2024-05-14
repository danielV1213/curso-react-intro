import React from "react";

const TodoList = ({ children }) => {
  // Se está usando la propiedad children del objeto props para renderizar los items del todo.
  return <ul>{children}</ul>;
};

export { TodoList };
