import React from "react";

const TodoCounter = ({ total, completed }) => {
  return (
    <h1>
      Has completado {completed} de {total} TODOs
    </h1>
  );
};

export { TodoCounter };
