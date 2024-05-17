import React from "react";
import searchIcon from "./assets/search-icon.png";
import "./TodoSearch.css";

const TodoSearch = () => {
  return (
    <div className='todo-search-container'>
      <input
        type='text'
        id='todo-text'
        className='todo-search-input'
        placeholder='Buscar TODO'
      />
      <img src={searchIcon} alt='search-icon' id='search-icon' />
    </div>
  );
};

export { TodoSearch };
