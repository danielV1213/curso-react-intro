import "./App.css";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    // El Fragment permite que se envuelvan todos los elementos HTML o componentes (en este caso) en un envoltorio padre (como se suele solicitar por React), pero a la hora de renderizar en el navegador, se podrán inspeccionar los elementos HTML por completo y no renderizará un solo elemento que envuelva a todo y no lo permita observar. Se puede escribir como "fragment" o dejar solo los caimanes.
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
