import React, { useContext } from "react";
import "./App.css";
import loadingSpinner from "../assets/loading-spinner.svg";
// Importar usando los componentes nombrados de manera predeterminada
// De esta forma se evita que si llamo mal al componente, no se muestre el error porque normalmente estaría nombrado por defecto.
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

const AppUI = () => {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <div className='container'>
        <TodoCounter />
        <TodoSearch />

        {/* El consumer recibe como parámetros las propiedades que se van a compartir y retorna una render function que devuelve los componentes a renderizar con sus respectivas propiedades */}
        <TodoList>
          {/* Caso de carga */}
          {loading && <img src={loadingSpinner} alt='loading-spinner' />}
          {/* Caso de error */}
          {error && <p>¡Hubo un error!</p>}
          {/* Caso de que no existan TODO's aún */}
          {!loading && searchedTodos.length === 0 && (
            <p>No has creado ningún TODO 🙁</p>
          )}

          {/* Iteración sobre el arreglo de TODO's, esté vacío o no */}
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
      </div>

      <CreateTodoButton />
    </div>
  );
};

export { AppUI };
