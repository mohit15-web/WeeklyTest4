import { createContext, useEffect, useReducer } from "react";

export const EmployeeContext = createContext();

const initialState = {
  team: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        team: [...state.team, action.payload],
      };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        team: state.team.filter(emp => emp.id !== action.payload.id),
      };
    case "SORT_TEAM":
      return {
        ...state,
        team: [...state.team].sort((a, b) => a.age - b.age)
      };
    default:
      return state;
  }
};

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('team')) || initialState);

  useEffect(() => {
    localStorage.setItem('team',JSON.stringify(state))
  },[state])

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};
