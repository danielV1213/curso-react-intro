import React from "react";
import "./TodoCounter.css";
import taskList from "./assets/document.png";

const TodoCounter = ({ total, completed }) => {
  return (
    <div className='todo-header'>
      <h2>
        Has completado {completed} de {total} TODOs
      </h2>
      <img src={taskList} height='50px' alt='todo-header-icon' />
    </div>
  );
};

export { TodoCounter };
