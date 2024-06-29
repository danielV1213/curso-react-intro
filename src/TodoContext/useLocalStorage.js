import { useEffect, useState } from "react";

// *Custom hook para manejar la lógica de uso del localStorage
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // *¿Cómo funcionan los efectos en React?
  /*
    Los efectos en React permiten que se le de manejo a información que por lo general es asíncrona; es decir, que no llega inmediatamente al componente y además, sólo se debería renderizar cuando la página carga por primera vez. También se usan cuando se quiere cargar información que dependa del cambio presentado en determinados estados del componente.

    Para aplicar efectos en React, se usa el hook "UseEffect"; el cual recibe dos parámetros: una función (obligatoria) y un arreglo (opcional). Dentro de la función, se agrega el comportamiento que ocurrirá cuando el efecto sea ejecutado. El arreglo se usa para especificar, de qué estado(s) del componente dependerá la ejecución del efecto. Por lo tanto, al existir un cambio en dicho(s) efecto(s), el efecto se volverá a ejecutar. Si el arreglo de dependencias se deja vacío, el efecto sólo será renderizado una vez (al cargar la página por primera vez).
  */

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    }, 1500);
  }, []);

  // Función para actualizar el estado de los TODOs en el localStorage y en el estado de React.
  const updateItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    updateItem,
    loading,
    error,
  };
}

export { useLocalStorage };
