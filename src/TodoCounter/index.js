import React, { useContext } from "react";
import taskList from "../assets/document.png";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <div className='todo-header'>
      <h1>
        {completedTodos < totalTodos
          ? `Has completado ${completedTodos} de ${totalTodos} TODOs`
          : "Has completado TODO!"}
      </h1>
      <img src={taskList} height='50px' alt='todo-header-icon' />
    </div>
  );
};

export { TodoCounter };
