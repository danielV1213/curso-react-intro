import React from "react";
import "./TodoCounter.css";
import taskList from "../assets/document.png";

const TodoCounter = ({ total, completed }) => {
  return (
    <div className='todo-header'>
      <h1>
        { completed < total ? `Has completado ${completed} de ${total} TODOs` : 'Has completado TODO!' }
      </h1>
      <img src={taskList} height='50px' alt='todo-header-icon' />
    </div>
  );
};

export { TodoCounter };
