import React, { useContext, useReducer } from "react";

import { createContext, Dispatch } from "react";
import { initialState, reducer } from "./reducer";
import { ActionType } from "./types";

const PersonnelContext = createContext(initialState);

const PersonnelContextDispatch = createContext<Dispatch<ActionType>>(() => {});

export const PersonnelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PersonnelContextDispatch.Provider value={dispatch}>
      <PersonnelContext.Provider value={{ ...state }}>
        {children}
      </PersonnelContext.Provider>
    </PersonnelContextDispatch.Provider>
  );
};

export const usePersonnelDbState = () => {
  const context = useContext(PersonnelContext);

  if (!context) {
    throw new Error(
      "usePersonnelDbState must be used within a PersonnelProvider"
    );
  }

  return context;
};

export const usePersonnelDbDispatch = () => {
  const context = useContext(PersonnelContextDispatch);

  if (!context) {
    throw new Error(
      "usePersonnelDbDispatch must be used within a PersonnelProvider"
    );
  }

  return context;
};
