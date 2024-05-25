import { createContext, useEffect, useReducer } from "react";
import { employees } from "../Emplyoee";
export const EmployeeContext = createContext();

const initialState = {
  emplyoye:employees,
  team: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        team: [...state.team, action.payload],
        emplyoye:[...state.emplyoye.map((emp) => emp === action.payload ? {...emp,bgColor:true} : emp)]
      };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        emplyoye:[...state.emplyoye.map((emp) => emp.id === action.payload.id ? {...emp,bgColor:false} : emp)],
        team: state.team.filter(emp => emp.id !== action.payload.id)
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

// eslint-disable-next-line react/prop-types
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
