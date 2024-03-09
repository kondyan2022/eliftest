import { useCallback, useState } from "react";

function isFunction(valueOrFunction) {
  return typeof valueOrFunction === "function";
}

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      const evaluated = isFunction(initialValue)
        ? initialValue()
        : initialValue;
      localStorage.setItem(key, JSON.stringify(evaluated));
      return evaluated;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = useCallback(
    (newValue) => {
      try {
        setStoredValue((prevValue) => {
          const evaluated = isFunction(newValue)
            ? newValue(prevValue)
            : newValue;
          localStorage.setItem(key, JSON.stringify(evaluated));
          return evaluated;
        });
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [storedValue, setValue];
}
