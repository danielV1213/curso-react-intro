import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        required
        placeholder='Cortar cebolla para el almuerzo'
        value={newTodoValue}
        onChange={onChange}
      />
      <div className='todo-form-button-container'>
        <button
          type='button'
          className='todo-form-button todo-form-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='todo-form-button todo-form-button--add'
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
