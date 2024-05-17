import React from "react";
import "./CreateTodoButton.css";
import addTodoIcon from "./assets/add-icon.png"

const CreateTodoButton = () => {
  return (
    <div className="create-todo-button-container">
      <p className="create-todo-button-text">Agregar un nuevo TODO</p>
      <button className='create-todo-button'>
        <img src={addTodoIcon} alt="add-todo-icon" height="50px" />
      </button>
    </div>
  );
};

export { CreateTodoButton };
