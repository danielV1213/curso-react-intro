import "./App.css";
import { useState } from "react";
import { useLocalStorage } from "../customHook/useLocalStorage";
import { AppUI } from "./AppUI";

// Función usada para quitar las tildes de los TODO's que las tengan y así permitir búsquedas con estos.
function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function App() {
  const [todos, updateTodos] = useLocalStorage("TODOS", []);
  const [todoQuery, setTodoQuery] = useState("");

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

  // *Manejo de completado y eliminación de TODO's.
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
    // El Fragment permite que se envuelvan todos los elementos HTML o componentes (en este caso) en un envoltorio padre (como se suele solicitar por React), pero a la hora de renderizar en el navegador, se podrán inspeccionar los elementos HTML por completo y no renderizará un solo elemento que envuelva a todo y no lo permita observar. Se puede escribir como "fragment" o dejar solo los caimanes.
    <AppUI
      completedTodos={completedTodos}
      todoQuery={todoQuery}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      setTodoQuery={setTodoQuery}
    />
  );
}

export default App;
