import React from "react";

import "./App.css";
// Importar usando los componentes nombrados de manera predeterminada
// De esta forma se evita que si llamo mal al componente, no se muestre el error porque normalmente estaría nombrado por defecto.
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

const AppUI = ({
  completedTodos,
  todoQuery,
  searchedTodos,
  totalTodos,
  completeTodo,
  deleteTodo,
  setTodoQuery,
}) => {
  return (
    <div>
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
      </div>

      <CreateTodoButton />
    </div>
  );
};

export { AppUI };
