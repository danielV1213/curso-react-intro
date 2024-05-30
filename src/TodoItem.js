import React from "react";
import "./TodoItem.css";
import checkIcon from "./assets/check-icon.png";
import deleteIcon from "./assets/delete-icon.png";

const TodoItem = ({ text, completed, toggleTodoCompleted, deleteTodo }) => {
  return (
    <li className='todo-item'>
      <span
        className={`icon icon-check ${
          completed ? "icon-check--active" : "icon-check--inactive"
        }`}
        onClick={() => toggleTodoCompleted(text)}
      >
        <img src={checkIcon} alt='check-icon' height='45px' />
      </span>
      <p className={`todo-item-p ${completed && "todo-item-p--complete"}`}>
        {text}
      </p>
      <span className='icon icon-delete' onClick={() => deleteTodo(text)} >
        <img src={deleteIcon} alt='delete-icon' height='45px' />
      </span>
    </li>
  );
};

export { TodoItem };
