import React, { useState, useEffect } from "react";

const usePersistedState = (key, defaultValue, stringified = false) => {
  const [state, setState] = useState(
    () => (stringified ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, stringified ? JSON.stringify(state) : state);
  }, [key, state]);
  return [state, setState];
};

export default usePersistedState;
