import React, { createContext, useState } from "react";
import defaultState from "../mocks/defaultState";

export const StateContext = createContext(defaultState);

function StateContextProvider({ children }) {
  const [state, setState] = useState(defaultState);

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateContextProvider;
