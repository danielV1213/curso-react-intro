import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

//* REACT CONTEXT
/*
El contexto permite que se cree un estado global para todos los componentes, evitando que se tenga que enviar información de padres a hijos explícitamente por medio de props. Esto también evita que se forme el famoso "prop drilling", que es cuando se empiezan a pasar propiedades por varios niveles del árbol de componentes, generando un envío de propiedades demasiado complejo.
*/

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    updateItem: updateTodos,
    loading,
    error,
  } = useLocalStorage("TODOS", []);
  const [todoQuery, setTodoQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // Función usada para quitar las tildes de los TODO's que las tengan y así permitir búsquedas con estos.
  function normalizeText(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  // *Estados derivados: estos estados surgen de estados que ya han sido previamente declarados.
  // *Manejo de búsquedas de TODO's.
  // Usando la doble negación, se valida que los valores a filtrar deben ser true.
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = normalizeText(todo.text.toLowerCase());
    const queryText = normalizeText(todoQuery.toLowerCase());
    return todoText.includes(queryText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      text,
      completed: false,
    });
    updateTodos(newTodos);
  };

  const completeTodo = (text) => {
    // Create a copy of the original TODOs array.
    const newTodos = [...todos];
    // Get the index of the TODO which "text" property matches with the passed text.
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    // Set the "completed" property of the selected TODO to the opposite value so it gets checked or unchecked.
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    updateTodos(newTodos);
  };

  const deleteTodo = (text) => {
    // Create a copy of the original TODOs array.
    const newTodos = [...todos];
    // Get the index of the TODO which "text" property matches with the passed text.
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    // Cut the array from the index
    newTodos.splice(todoIndex, 1);
    updateTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        todoQuery,
        searchedTodos,
        totalTodos,
        openModal,
        completeTodo,
        deleteTodo,
        setTodoQuery,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
