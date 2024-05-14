import React from "react";

const TodoSearch = () => {
  return (
    <div className='todo-search-container'>
      <input
        type='text'
        id='todo-text'
        className='todo-search-input'
        placeholder='Buscar TODO'
      />
    </div>
  );
};

export { TodoSearch };
