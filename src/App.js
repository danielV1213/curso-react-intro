import "./App.css";
// Importar usando los componentes nombrados de manera predeterminada
// De esta forma se evita que si llamo mal al componente, no se muestre el error porque normalmente estaría nombrado por defecto.
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Fragment } from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar un curso de React.js", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Test", completed: true },
];

function App() {
  return (
    // El Fragment permite que se envuelvan todos los elementos HTML o componentes (en este caso) en un envoltorio padre (como se suele solicitar por React), pero a la hora de renderizar en el navegador, se podrán inspeccionar los elementos HTML por completo y no renderizará un solo elemento que envuelva a todo y no lo permita observar.
    <Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
