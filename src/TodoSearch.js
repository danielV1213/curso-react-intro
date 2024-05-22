import React, { useState } from "react";
import searchIcon from "./assets/search-icon.png";
import "./TodoSearch.css";

const TodoSearch = () => {
  const [todoQuery, setTodoQuery] = useState("");

  // * ¿Qué es el estado?
  /*
  El estado permite "avisarle" a React.js que debe renderizar de nuevo el componente dentro del que se está actualizando información por medio del estado. Si no se usa el estado, entonces se actualiza la informacion desde JavaScript, pero no se vuelve a renderizar desde HTML.

  Para realizar la actualización de la información por medio del estado, React se vale del Virtual DOM; que es, como su nombre lo indica, una copia del DOM. React compara constantemente el Virtual DOM con el DOM y si detecta cambios en el Virtual DOM, se los aplica al DOM. Esto evita que se re-rendericen los componentes constantemente, sino que solo cuando cambie el estado.
  */

  return (
    <div className='todo-search-container'>
      <input
        type='text'
        id='todo-text'
        className='todo-search-input'
        placeholder='Buscar TODO'
        value={todoQuery}
        // No se hizo uso de una función más externa porque la lógica es sencilla.
        onChange={(event) => {
          setTodoQuery(event.target.value);
        }}
      />
      <img src={searchIcon} alt='search-icon' id='search-icon' />
    </div>
  );
};

export { TodoSearch };
