import "./App.css";
// Importar usando los componentes nombrados de manera predeterminada
// De esta forma se evita que si llamo mal al componente, no se muestre el error porque normalmente estaría nombrado por defecto.
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { useState } from "react";

const defaultTodos = [
  { text: "Entrenar tren inferior", completed: true },
  { text: "Gestionar proceso de grado", completed: false },
  { text: "Preparar el almuerzo", completed: true },
  { text: "Activar tarjeta de débito", completed: false },
];

// Función usada para quitar las tildes de los TODO´s que las tengan y así permitir búsquedas con estos.
function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function App() {
  // Seteamos los TODO's por defecto para contar con un "placeholder" en el estado.
  const [todos, setTodos] = useState(defaultTodos);
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
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    // Create a copy of the original TODOs array.
    const newTodos = [...todos];
    // Get the index of the TODO which "text" property matches with the passed text.
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    // Cut the array from the index
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    // El Fragment permite que se envuelvan todos los elementos HTML o componentes (en este caso) en un envoltorio padre (como se suele solicitar por React), pero a la hora de renderizar en el navegador, se podrán inspeccionar los elementos HTML por completo y no renderizará un solo elemento que envuelva a todo y no lo permita observar. Se puede escribir como "fragment" o dejar solo los caimanes.
    <div className='container'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch todoQuery={todoQuery} setTodoQuery={setTodoQuery} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
